import useSupabase from "./../composables/supabase.js";

export class Team {
    name;
    members;
    leader;
}

export async function index() {
    const { supabase } = useSupabase();
    const { data, error } = await supabase.from("teams").select();

    return data;
}

export async function store(team) {
    if (!team instanceof Team) {
        return;
    }

    const { supabase } = useSupabase();
    const { data } = await supabase.from("teams").insert([team]);

    return data;
}

export async function getTeam($id) {
    const { supabase } = useSupabase();
    const { data, error } = await supabase.from("teams").select().eq("id", $id).first();

    return data;
}
