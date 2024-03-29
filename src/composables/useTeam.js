import useSupabase from "./supabase.js";
import Team from "@/models/team.js"

export default function useTeam() {
    async function teamStore(team) {
        if (!team instanceof Team) {
            return;
        }

        const { supabase } = useSupabase();
        const { error } = await supabase.from("teams").insert([team]);

        if (error) {
            console.error("Erreur lors de l'insertion d'une équipe : " + error.message);
        }
    }

    async function teamIndex() {
        const { supabase } = useSupabase();
        const { data, error } = await supabase.from("teams").select();

        if (error) {
            console.error("Erreur lors de la récupération des équipes : " + error.message);
            return;
        }

        return data;
    }

    async function teamGet(id) {
        const { supabase } = useSupabase();
        const { data, error } = await supabase.from("teams").select().eq("leader", id);
        /*
        if (error) {
            console.error("Erreur lors de la récupération de l'équipe " + id + " : " + error);
        }
        */

        return {data,error};
    }
    async function teamChangeName(id, nom){
        const { supabase } = useSupabase();
        const { data, error } = await supabase.from("teams").update({name: nom}).eq('leader', id);
        return {data, error}
    }
    async function teamChangeMembers(id, members_){
        const { supabase } = useSupabase();
        const { data, error } = await supabase.from("teams").update({members: members_}).eq('leader', id);
        return {data, error}
    }

    return { teamStore, teamIndex, teamGet, teamChangeName, teamChangeMembers}
}
