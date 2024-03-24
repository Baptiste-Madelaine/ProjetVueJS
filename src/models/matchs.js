import useSupabase from "./../composables/supabase.js";

export class Match {
    team1;
    team2;
    sport;
    time;
    team1_score;
    team2_score;
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


export async function getPoints(){
    const { supabase } = useSupabase();
    const { data, error } = await supabase.from('teams').select('*');
    const data2 = await index()
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
    return await teamsWithTotalPoints;
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