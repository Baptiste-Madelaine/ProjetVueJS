<script setup>
    import { ref } from "vue"
    import { signIn, signUp } from '../models/users'
    import { useRouter } from 'vue-router';
    import { useUserStore } from '../stores/user'
    import { storeToRefs } from 'pinia';


    const userStore = useUserStore()
    const { id, name} = storeToRefs(userStore);
    const { isLogged } = userStore;

    const route = useRouter()

    const email = ref()
    const password = ref()
    const confirmPassword = ref()
    const isError = ref(false);

    async function signUpNewUser(){
        if(password.value == confirmPassword.value){
            const { error, data } = await(signUp(email.value,password.value));
            console.log("test");
            if(error != null){
                isError.value = true;
                console.log(error);
            }else{
                id.value = data.user.id;
                name.value = data.user.email;
                const {errorIn, dataIn} = await(signIn(email.value,password.value));
                route.push({name: 'settings'})
                
            }
        }else{
            isError.value = true;
        }
    }

</script>
<template>
    Email:
    <input class="text-black p-1" type="text" placeholder="Email" v-model="email" required>
    Mot de passe:
    <input class="text-black p-1" type="password" placeholder="mot de passe" v-model="password" required>
    Confirmer mot de passe:
    <input class="text-black p-1" type="password" placeholder="confirmer mot de passe" v-model="confirmPassword" required>

    <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click="signUpNewUser"> Let's gooooo </button>

    <p v-if="isError"> Erreur Inscription</p>
</template>