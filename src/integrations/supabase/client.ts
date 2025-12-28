import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zhbtxuaeafuaiivkylhn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_WGRF9WysoFqKQ6l8q4Jkyw_pO79haV4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
