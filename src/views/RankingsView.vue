<script setup>
    import TeamLabel from '@/components/TeamLabel.vue';
    import NavBar from '@/components/NavBar.vue';
    import useMatch from '@/composables/useMatch.js';
    import { ref, onMounted } from 'vue';

    const map = ref([])

    const { matchGetPoints } = useMatch();

    onMounted(async () => {
        try {
            const data = await matchGetPoints()
            data.sort((a,b) => b.totalPoints - a.totalPoints)

            data.forEach((elem, index) => {
                map.value.push([elem.name, elem.totalPoints, elem.members]);
            })   
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        }
    });

</script>
<template>
    <NavBar />
    <div class="flex flex-col" id="wrapper">
        <TeamLabel v-for="(item, index) in map" :test="item[2]">
            {{ console.log(item[2]) }}
            <template v-slot:places>
                {{ index + 1 }}
            </template>
            <template v-slot:team>
                {{ item[0] }}
            </template>
            <template v-slot:pts>
                {{ item[1] }}
            </template>
        </TeamLabel>
    </div>
    
</template>
<style>
    #wrapper{
        max-width: fit-content;
        margin:auto;
    }
</style>@/models/match