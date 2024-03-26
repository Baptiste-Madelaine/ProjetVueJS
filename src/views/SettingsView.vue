<script setup>
    import { ref } from 'vue';
    import NavBar from '@/components/NavBar.vue';
    import { storeToRefs } from 'pinia';

    const userStore = useUserStore()
</script>
<template>
    <NavBar />
    
</template>