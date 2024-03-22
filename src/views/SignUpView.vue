<script setup>
    import { ref } from "vue"

</script>
<template>
    Email:
    <input class="text-black p-1" type="text" placeholder="Email" v-model="email">
    Mot de passe:
    <input class="text-black p-1" type="password" placeholder="mot de passe" v-model="password">
    Confirmer mot de passe:
    <input class="text-black p-1" type="password" placeholder="confirmer mot de passe" v-model="confirmPassword">

    <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click="signUpNewUser"> Let's gooooo </button>
</template>