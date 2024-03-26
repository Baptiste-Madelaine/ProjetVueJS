<script setup>
    import { ref } from 'vue';
    import NavBar from '@/components/NavBar.vue';
    import { getTeam } from '../models/teams'
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/user'
    import { storeToRefs } from 'pinia';

    const userStore = useUserStore()
    const { id, name} = storeToRefs(userStore);

    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
    //const team = await getTeam(id);
</script>
<template>
    <NavBar />

    <div>
        <p> </p>
        <h1> "Team Name"</h1>
        <input class="text-black p-1" type="text" placeholder="Email" v-model="email" required>

        <h1> Members </h1>
        <li v-for="item in items">
            {{ item.message }}
        </li>
        <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click=""> Add a member + </button>
    </div>
</template>