import useSupabase from "./../composables/supabase.js";

export async function signUp(email, password) {
    const { supabase } = useSupabase();

    if (password.length < 8) {
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });
    return error;
}

export async function signIn(email, password) {
    const { supabase } = useSupabase();

    const { data, error } = await supabase.auth.signIn({
        email: email,
        password: password
    });
    return error;
}
