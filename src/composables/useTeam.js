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
        const { data, error } = await supabase.from("teams").select().eq("id", id);

        if (error) {
            console.error("Erreur lors de la récupération de l'équipe " + id + " : " + error.message);
            return;
        }

        return (data.length > 0)
            ? data[0]
            : null;
    }

    return { teamStore, teamIndex, teamGet}
}
