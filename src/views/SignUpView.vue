<script setup>
    import { ref } from "vue"
<<<<<<< HEAD
    import { signIn, signUp } from '../models/users'
=======
    import useUser from '@/composables/useUser.js'
>>>>>>> origin/dev
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/user'
    import { storeToRefs } from 'pinia';


    const userStore = useUserStore()
    const { id, name} = storeToRefs(userStore);
    const { isLogged } = userStore;

    const { signUp } = useUser();

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
                console.log(error);
                const {errorIn, dataIn} = await(signIn(email.value,password.value));
                route.push({name: 'settings'})
                
            }
        }else{
            isError.value = true;
        }
    }

</script>
<template>
    <div id="login">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="wrapper">
        <h1 class="text-3xl font-bold underline m-5 text-purple-700">Metrolympiades</h1>
        <h3 class="text-2xl font-bold m-5 text-center text-gray-700">Sign Up</h3>

        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input id="email" type="email" v-model="email" placeholder="email@domain.fr" class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        
        <label fo="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input id="password" type="password" v-model="password" placeholder="Password" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

        <label fo="password" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
        <input id="confirmPassword" type="password" v-model="confirmPassword" placeholder="Confirm Password" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

        <p class="text-red-600 pb-3" v-if="isError">Check your Password or Email !</p>
        
        <div class="flex items-center justify-center">
            <button @click="signUpNewUser()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Let's gooooo</button>
        </div>
        </div>
    </div>
</template>
<style scoped>
  #login{
    height: 100vh;
    padding: auto;
    display: flex;
  }
</style>