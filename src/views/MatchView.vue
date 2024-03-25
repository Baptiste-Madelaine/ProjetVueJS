<script setup>
    import NavBar from '@/components/NavBar.vue';
function goToCreateMatch() {
  this.router.push({ path: '/CreateMatchView' })
}
</script>

<template>
  <NavBar/>
  <main>
    <h1>
      Match
    </h1>
    <MatchComponent>
      
    </MatchComponent>
    <button @click="goToCreateMatch">
      CreateMatch
    </button>
  </main>
</template>
