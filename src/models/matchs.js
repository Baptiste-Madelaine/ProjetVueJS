import useSupabase from "./../composables/supabase.js";

export class Match {
    name;
    members;
    leader;
}


export async function index() {
    const { supabase } = useSupabase();

    const { data, error } = await supabase.from("matchs").select();

    return data;
}

export async function store(match) {
    if (!match instanceof Match) {
        return;
    }

    const { supabase } = useSupabase();
    const { data } = await supabase.from("matchs").insert([match]);

    return data;
}

export async function getMatch($id) {
    const { supabase } = useSupabase();
    const { data, error } = await supabase.from("matchs").select().eq("id", $id).first();

    return data;
}


