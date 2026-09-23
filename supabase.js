import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.1/+esm";

export const SUPABASE_URL = "https://hpcbfitnzyfxpngxofoe.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_5weP2g_Lp6doZDpDhc6kew_bXEkxSuZ";
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
