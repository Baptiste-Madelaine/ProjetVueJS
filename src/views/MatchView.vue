<script setup>
    import NavBar from '@/components/NavBar.vue';
    import MatchComponent from '@/components/MatchComponent.vue';
    import { index, Match, store } from '@/models/matchs';
    import { Team, getTeam } from '@/models/teams';
    import { ref, onMounted } from 'vue';

    const map = ref([])
function goToCreateMatch() {
  this.router.push({ path: '/CreateMatchView' })
}

  onMounted(async () => {
          try {
              const data = await index()
              console.log(data);
              //data.sort((a,b) => b.totalPoints - a.totalPoints)

              data.forEach(async (elem, index) => {
                try{
                //var team1 = await getTeam(elem.team1);
                var team1=await getTeam(elem.team1);
                var team2=await getTeam(elem.team2);
                console.log(team1[0].name);
                console.log(elem.sport);
                //console.log(Team.new(team1.name));
                  map.value.push([team1[0].name, team2[0].name, elem.time,elem.sport,elem.team1_score,elem.team2_score]);
                  //console.log(elem.team1+""+elem.team2.name);
                } catch (error) {
                  console.error('Une erreur s\'est produite lors de la récupération des données :', error);
              }
              })   
          } catch (error) {
              console.error('Une erreur s\'est produite lors de la récupération des données :', error);
          }
      });
</script>

<template>
  <NavBar/>
  <main>
    <h1>
      Match
    </h1>
    <div class="flex flex-col " id="wrapper">
        <MatchComponent v-for="(item, index) in map" :test="item[2]">
            {{ console.log(item[2])  }}
            <template v-slot:Time>
                {{ item [2] }}
            </template>
            <template v-slot:Sport>
                {{ item[3] }}
            </template>
            <template v-slot:Team1>
                {{ item[0] }}
            </template>
            <template v-slot:Team2>
                {{ item[1] }}
            </template>
            <template v-slot:Score1>
                {{ item[4] }}
            </template>
            <template v-slot:Score2>
                {{ item[5] }}
            </template>
        </MatchComponent>
    </div>
    <button @click="goToCreateMatch">
      CreateMatch
    </button>
  </main>
</template>
