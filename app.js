const SUPABASE_URL = "https://hpcbfitnzyfxpngxofoe.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_5weP2g_Lp6doZDpDhc6kew_bXEkxSuZ";

async function submitApplication(e) {
  e.preventDefault();

  const f = e.target;

  const days = [
    ...f.querySelectorAll('input[name="days"]:checked')
  ];

  if (days.length < 3 || days.length > 4) {
    alert("Please select exactly 3–4 preferred class days. Saturday is not available.");
    return false;
  }

  const photoInput = f.querySelector('input[name="photo"]');

  if (!photoInput.files || photoInput.files.length === 0) {
    alert("Please select your passport-size photo.");
    return false;
  }

  const photo = photoInput.files[0];

  const reference =
    "LP-" +
    new Date().getFullYear() +
    "-" +
    Math.random().toString(36).slice(2, 8).toUpperCase();

  const application = {
    id: Date.now(),
    reference: reference,
    full_name: f.fullname.value.trim(),
    date_of_birth: f.dob.value,
    gender: f.gender.value,
    phone: f.phone.value.trim(),
    email: f.email.value.trim(),
    location: f.location.value.trim(),
    course: f.course.value,
    level: f.level.value,
    photo_path: photo.name,
    preferred_time: f.time.value,
    preferred_days: days.map(day => day.value),
    experience: f.experience.value.trim(),
    additional_information: f.additional.value.trim(),
    status: "submitted"
  };

  try {
    const response = await fetch(
      SUPABASE_URL + "/rest/v1/applications",
      {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": "Bearer " + SUPABASE_KEY,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(application)
      }
    );

    const responseText = await response.text();

    if (!response.ok) {
      console.error("SUPABASE ERROR:", response.status, responseText);

      alert(
        "Supabase rejected the application.\n\n" +
        "Error " + response.status + ":\n" +
        responseText
      );

      return false;
    }

    localStorage.setItem(
      "leviteApplication",
      JSON.stringify({
        reference: reference,
        status: "Submitted",
        name: application.full_name,
        course: application.course,
        days: application.preferred_days,
        time: application.preferred_time
      })
    );

    f.style.display = "none";

    const success = document.querySelector(".success");
    success.style.display = "block";

    document.querySelector("#ref").textContent = reference;

  } catch (error) {
    console.error("FETCH ERROR:", error);

    alert(
      "The browser could not connect to Supabase.\n\n" +
      "Technical error:\n" +
      error.message
    );
  }

  return false;
}
