<script setup>
    import { ref } from 'vue';
    import NavBar from '@/components/NavBar.vue';
    import useTeam from '../composables/useTeam.js'
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/user'
    import { storeToRefs } from 'pinia';

    const { teamGet, teamChangeName, teamChangeMembers } = useTeam();

    const store = useUserStore()
    const { id, name} = storeToRefs(store);
    const idTeam = id.value;

    const items = ref([]);
    const nomTeam = ref("");
    //const {data, error} = await teamGet(idTeam);

    const fetchData = async () => {
        const { data, error } = await teamGet(idTeam);
        const members = data[0].members
        for(mem in members){
            items.value.push(mem);
        }
        nomTeam.value = data[0].name
        console.log(nomTeam.value)
    };
    fetchData()
    const modfiyName = async(evt) => {
        teamChangeName(id.value, nomTeam.value)

    }
    const addMember = async(evt) => {
        console.log(items.value)
        items.value.push("");
    }
    const modifyMemberName = async(evt) => {
        console.log(items.value);
        teamChangeMembers(id.value, items.value)
    }
    const removeMember = async(index) => {
        items.value.splice(index, 1)
        teamChangeMembers(id.value, items.value)
    }
    
</script>
<template>
    <NavBar/>
    <div id="login">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="wrapper">
        <h3 class="text-2xl font-bold m-5 text-center text-gray-700">Team Settings</h3>

        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Team Name</label>
        <input id="email" type="email" v-model="nomTeam" class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" @change="modfiyName(event)">
        
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Members</label>
        <ul>
            <li @change="modifyMemberName"  v-for="(item, index) in items" :key="index" class="my-2">
                <input type="text" class=" shadow appearance-none border rounded py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  v-model="items[index]">
                    <button class="btn bg-blue-500 px-1 rounded-full" @click="removeMember(index)">X</button>
                </li>
            <br>
            
        </ul>

        <div class="flex items-center justify-center">
            <button @click="addMember(evt)" class="bg-purple-500 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Members !</button>
        </div>
        
        
        </div>
    </div>

</template>