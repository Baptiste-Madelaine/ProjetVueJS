import { createClient } from '@supabase/supabase-js';

export default function useSupabase() {
    const url = import.meta.env.VITE_SUPABASE_URL; 
    const anon = import.meta.env.VITE_SUPABASE_ANON;

    const supabase = createClient(url, anon);

    return { supabase }
}
