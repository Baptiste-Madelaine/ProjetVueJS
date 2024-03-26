<script setup>
    import { ref } from "vue"
    import { signUp } from '../models/users'

    const email = ref()
    const password = ref()
    const confirmPassword = ref()

    async function signUpNewUser(){
        if(password == confirmPassword){
            signUp(email,password).value
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
</template>