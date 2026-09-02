(() => {
  const WHATSAPP_NUMBER = "256786665412";
  const CONTACT_EMAIL = "levitepressug@gmail.com";

  // Mobile navigation
  const menu = document.querySelector('.menu');
  const links = document.querySelector('.links');

  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Service-request form
  const form = document.getElementById('quoteForm');

  if (form) {
    const params = new URLSearchParams(location.search);
    const preset = params.get('service');

    const aliases = {
      'software-development': 'software-app-development',
      'database-management': 'database-digital-solutions',
      'secretarial': 'secretarial-services',
      'computer-training': 'computer-training',
      'website-design': 'website-design',
      'printing': 'printing-graphics-typesetting',
      'graphic-design': 'printing-graphics-typesetting',
      'typesetting': 'printing-graphics-typesetting',
      'bulk-printing': 'printing-graphics-typesetting'
    };

    const selectedPreset = aliases[preset] || preset;

    if (selectedPreset) {
      const select = form.elements.service;

      if (
        select &&
        [...select.options].some(option => option.value === selectedPreset)
      ) {
        select.value = selectedPreset;
      }
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const d = new FormData(form);

      const name = String(d.get('name') || '').trim();
      const service = String(d.get('service') || '').trim();
      const details = String(d.get('details') || '').trim();
      const phone = String(d.get('phone') || '').trim();
      const channel = String(d.get('channel') || '').trim();
      const email = String(d.get('email') || '').trim();
      const privacyConsent = d.get('privacy_consent');

      if (
        !name ||
        !service ||
        !details ||
        !phone ||
        !privacyConsent
      ) {
        form.reportValidity();
        return;
      }

      const msg =
`Hello Levite Press Uganda. I would like to enquire about ${service}.

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Preferred communication: ${channel || 'WhatsApp'}

Requirement:
${details}`;

      const box = document.getElementById('quoteResult');

      if (!box) return;

      box.hidden = false;
      box.textContent = 'Saving your request securely…';

      try {
        const response = await fetch(
          'https://hpcbfitnzyfxpngxofoe.supabase.co/rest/v1/service_requests',
          {
            method: 'POST',

            headers: {
              'apikey':
                'sb_publishable_5weP2g_Lp6doZDpDhc6kew_bXEkxSuZ',

              'Authorization':
                'Bearer sb_publishable_5weP2g_Lp6doZDpDhc6kew_bXEkxSuZ',

              'Content-Type': 'application/json',

              // IMPORTANT:
              // Ask Supabase to return the newly saved request.
              'Prefer': 'return=representation'
            },

            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email || null,
              service: service,
              details: details,
              preferred_channel: channel || 'WhatsApp'
            })
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Supabase request failed: ${response.status} ${errorText}`
          );
        }

        const savedRows = await response.json();

        if (
          !Array.isArray(savedRows) ||
          savedRows.length < 1 ||
          !savedRows[0]?.id
        ) {
          throw new Error(
            'Supabase did not return a confirmed saved request.'
          );
        }

        const requestId = savedRows[0].id;

        const waUrl =
          `https://wa.me/${WHATSAPP_NUMBER}?text=` +
          encodeURIComponent(msg);

        const mailSubject =
          `Service Request — ${service}`;

        const mailUrl =
          `mailto:${CONTACT_EMAIL}?subject=` +
          encodeURIComponent(mailSubject) +
          `&body=` +
          encodeURIComponent(msg);

        box.innerHTML = `
          <strong>Your request has been received and confirmed.</strong><br>
          Reference ID: <strong>${requestId}</strong>
          <br><br>
          Your enquiry has been saved in the Levite Press request system.
          <div class="cta-row" style="margin-top:12px">
            <a
              class="btn"
              href="${waUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
            </a>

            <a
              class="btn outline-dark"
              href="${mailUrl}"
            >
              Send Details by Email
            </a>
          </div>
        `;

        form.reset();

      } catch (error) {

        console.error(
          'LEVITE PRESS SERVICE REQUEST ERROR:',
          error
        );

        const waUrl =
          `https://wa.me/${WHATSAPP_NUMBER}?text=` +
          encodeURIComponent(msg);

        const mailSubject =
          `Service Request — ${service}`;

        const mailUrl =
          `mailto:${CONTACT_EMAIL}?subject=` +
          encodeURIComponent(mailSubject) +
          `&body=` +
          encodeURIComponent(msg);

        box.innerHTML = `
          <strong>We could not confirm the online request.</strong>
          <br><br>
          Please send your request directly using one of the options below.
          <div class="cta-row" style="margin-top:12px">
            <a
              class="btn"
              href="${waUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send on WhatsApp
            </a>

            <a
              class="btn outline-dark"
              href="${mailUrl}"
            >
              Send by Email
            </a>
          </div>
        `;
      }

      box.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    });
  }
})();
