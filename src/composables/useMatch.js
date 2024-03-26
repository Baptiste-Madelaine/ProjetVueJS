import useSupabase from "./supabase.js";
import Match from "@/models/match.js";



export default function useMatch() {
    async function matchStore(match) {
        if (!match instanceof Match) {
            return;
        }

        const { supabase } = useSupabase();
        const { error } = await supabase.from("matchs").insert([match]);

        if (error) {
            console.error(`Erreur lors de l'insértion d'un match : ${error.message}`);
        }
    }

    async function matchIndex() {
        const { supabase } = useSupabase();

        const { data, error } = await supabase.from("matchs").select();

        if (error) {
            console.error(`Erreur lors de la récupération des matchs : ${error}`);
            return;
        }

        return data;
    }

    async function matchGet(id) {
        const { supabase } = useSupabase();
        const { data, error } = await supabase.from("matchs").select().eq("id", id);

        if (error) {
            console.error(`Erreur lors de la récupération du match ${id} : ${message.error}`);
            return;
        }

        return (data.length > 0)
            ? data[0]
            : null;
    }


    async function matchGetPoints() {
        const { supabase } = useSupabase();
        const { data, error } = await supabase.from('teams').select('*');
        const data2 = await matchIndex()
        let teamsWithTotalPoints

        if (error) {
            console.error('Erreur lors de la récupération des équipes:', error.message);
        } else {
            const teamsPromises = data.map(async team => {
                const totalPoints = calculateTotalPoints(team, data2);
                return { ...team, totalPoints };
            });
            teamsWithTotalPoints = await Promise.all(teamsPromises);
        }
        return teamsWithTotalPoints;
    }

    function calculateTotalPoints(team, data) {
        let totalPoints = 0;
        

        data.forEach(match => {
            if (match.team1 === team.id) {
                totalPoints += match.team1_score || 0;
            } else if (match.team2 === team.id) {
                totalPoints += match.team2_score || 0;
            }
        });

        return totalPoints;
    }

    return { matchStore, matchIndex, matchGet, matchGetPoints }
}
