<script setup>
    import { ref } from 'vue';
    import NavBar from '@/components/NavBar.vue';
    import useTeam from '../composables/useTeam'
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/user'
    import { storeToRefs } from 'pinia';

    const userStore = useUserStore()
    const { id, name} = storeToRefs(userStore);

    const items = ref([{ message: 'member1' }, { message: 'member2' }])
    //const team = await getTeam(id);
</script>
<template>
    <NavBar />

    <div>
        <p> </p>
        <h1> "Team Name"</h1>
        <input class="text-black p-1" type="text" placeholder="Team Name" v-model="email" required>

        <h1> Members </h1>
        <li> firstname </li>
        <li v-for="item in items">
            {{ item.message }}
            <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click=""> X </button>
        </li>
        <button class="p-2 bg-blue-600 border-black border-4 rounded-full" @click=""> Add a member + </button>
    </div>
</template>