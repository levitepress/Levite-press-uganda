import { supabase } from "./supabase.js";

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

export function esc(value="") {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
export function msg(text, type="info") {
  const box = $("#message");
  if (box) { box.textContent = text; box.className = `message ${type}`; box.hidden = false; }
}
export function hideMsg(){ const b=$("#message"); if(b) b.hidden=true; }

export async function currentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
}
export async function requireUser() {
  const user = await currentUser();
  if (!user) { location.href = `login.html?next=${encodeURIComponent(location.pathname.split("/").pop())}`; return null; }
  return user;
}
export async function profileFor(userId) {
  const { data } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
  return data;
}
export function setupNav() {
  const btn = $("#logoutBtn");
  if (btn) btn.onclick = async () => { await supabase.auth.signOut(); location.href="index.html"; };
}
export async function initAuthNav() {
  const user = await currentUser();
  const login = $("#loginLink"), dash = $("#dashboardLink"), logout=$("#logoutBtn");
  if (user) { if(login) login.hidden=true; if(dash) dash.hidden=false; if(logout) logout.hidden=false; }
}
export function safeFileName(name) {
  return name.toLowerCase().replace(/[^a-z0-9._-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,120) || "file";
}
export async function uploadUserFile(file, userId, category) {
  const path = `${userId}/${category}/${Date.now()}-${safeFileName(file.name)}`;
  const { error } = await supabase.storage.from("client-documents").upload(path, file, { upsert:false, contentType:file.type || undefined });
  if (error) throw error;
  return path;
}
export async function signedDownload(path) {
  const { data, error } = await supabase.storage.from("client-documents").createSignedUrl(path, 300, {download:true});
  if (error) throw error;
  return data.signedUrl;
}

document.addEventListener("DOMContentLoaded", async () => {
  setupNav(); await initAuthNav();
  const year=$("#year"); if(year) year.textContent=new Date().getFullYear();
});
