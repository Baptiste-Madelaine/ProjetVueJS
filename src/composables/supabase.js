import { createClient } from '@supabase/supabase-js'

export default function useSupabase() {
    const url = "https://ulxbtgfcimyvvpombuby.supabase.co"
    const annon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVseGJ0Z2ZjaW15dnZwb21idWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwOTY1MTMsImV4cCI6MjAyNjY3MjUxM30.thT09WvqlyzrzFRLuaFHz9JPfpkGTKlEXFL0wt9hG08"

    const supabase = createClient(url, annon)
    
    return { supabase }
}
