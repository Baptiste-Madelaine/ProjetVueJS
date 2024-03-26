import useSupabase from "./supabase.js";

export default function useUser() {
    async function signUp(email, password) {
        const { supabase } = useSupabase();

        if (password.length < 8) {
            return;
        }

        const { error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            console.error(`Erreur lors de la création du compte : ${error.message}`);
        }
    }

    async function signIn(email, password) {
        const { supabase } = useSupabase();

        const { error } = await supabase.auth.signIn({
            email: email,
            password: password
        });

        if (error) {
            console.error(`Erreur lors de la connexion au compte : ${error.message}`);
        }
    }

    async function signOut() {
        const { supabase } = useSupabase();
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(`Erreur lors de la déconnexion`);
        }
    }

    return { signUp, signIn, signOut }
}
