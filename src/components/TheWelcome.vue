<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useUser from '@/composables/useUser.js';

const { signIn } = useUser();
const route = useRouter()

const userStore = useUserStore()
const { id, name} = storeToRefs(userStore);
const { isLogged } = userStore;
const isError = ref(false);

const emailInput = ref("");
const passwordInput = ref("");

async function seConnecter(){
  if(emailInput.value == "" || passwordInput.value == ""){
    isError.value = true;
  }else{
    isError.value = false;
    const {data, error} = await signIn(emailInput.value, passwordInput.value);
    if(error != null){
      isError.value = true;
    }else{
      id.value = data.user.id;
      name.value = data.user.email;
      route.push({name: 'rankings'})
    }
  }
}

function sinscrire(){
  route.push({name: 'signup'})
}
function guestAccess(){
  route.push({name: 'rankings'})
}
</script>

<template>
  <div id="login">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="wrapper">
      <h1 class="text-3xl font-bold underline m-5 text-purple-700">Metrolympiades</h1>
      <h3 class="text-2xl font-bold m-5 text-center text-gray-700">Login</h3>

      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input id="email" type="email" v-model="emailInput" placeholder="email@domain.fr" class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      
      <label fo="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input id="password" type="password" v-model="passwordInput" placeholder="Password" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

      <p class="text-red-600 pb-3" :class="{ 'hidden': !isError }">Check your Password or Email !</p>
      
      <div class="flex items-center justify-between">
        <button @click="seConnecter()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get me In !</button>
        <a href="/signup" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Create your Account !</a>
      </div>
      <br>
      <div class="flex items-center justify-center">
        <button @click="guestAccess()" class="bg-purple-500 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guest Access !</button>
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