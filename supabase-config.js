// ============================================================
// Supabase credentials — તમારા પ્રોજેક્ટ મુજબ બદલો
// (Supabase Dashboard → Project Settings → API)
// ============================================================
const SUPABASE_URL = "https://arlvoarkbtteywpobkmb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybHZvYXJrYnR0ZXl3cG9ia21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyOTkxNjYsImV4cCI6MjEwMzg3NTE2Nn0.zzf_TEW6VCOy-Rvdk_JTmWomeSkzaaahcIRl8B-o1Do";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// Simple username-based "session" — Supabase Auth વાપર્યા વગર.
// profiles.id + username ને localStorage માં સેવ કરીએ છીએ.
// ⚠️ આ real authentication નથી — કોઈપણ username ટાઈપ કરીને
// ઓળખ બદલી શકે. હલકા practice-quiz app માટે પૂરતું છે.
// ============================================================
const SESSION_KEY = "kapila_session";

function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); }
  catch (e) { return null; }
}
function setSession(profile) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(profile));
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
// લોગિન ફરજિયાત હોય એવા પેજ પર ટોપ પર કૉલ કરો
function requireSession(redirectTo) {
  const s = getSession();
  if (!s) { location.href = redirectTo || "index.html"; return null; }
  return s;
}
