<script setup>
import TeamLabel from '@/components/TeamLabel.vue';
import NavBar from '@/components/NavBar.vue';
</script>
<template>
    <NavBar />
    <div class="flex flex-col" id="wrapper">
        <TeamLabel>
            1. SpaceX 15pts
        </TeamLabel>
        <TeamLabel>
            2. Google 12pts
        </TeamLabel>
        <TeamLabel>
            3. Meta 10pts
        </TeamLabel>
    </div>
    
</template>
<style>
    #wrapper{
        max-width: fit-content;
        margin:auto;
    }
</style>