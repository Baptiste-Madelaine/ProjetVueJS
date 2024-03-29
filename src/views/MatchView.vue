<script setup>
    import NavBar from '@/components/NavBar.vue';
    import MatchComponent from '@/components/MatchComponent.vue';
    import { index, Match, store , updateMatchScore1 ,updateMatchScore2 } from '@/models/matchs';
    import { Team, getTeam } from '@/models/teams';
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

const route = useRouter()

    const map = ref([])
function goToCreateMatch() {
  route.push('/CreateMatch')
}

  onMounted(async () => {
          try {
              const data = await index()
              //console.log(data);
              //data.sort((a,b) => b.totalPoints - a.totalPoints)

              data.forEach(async (elem, index) => { // ref score with watch update score in bdd with watch v-model into update
                try{
                //var team1 = await getTeam(elem.team1);
                console.log(elem.id);
                var team1=await getTeam(elem.team1);
                var team2=await getTeam(elem.team2);
                //console.log(team1[0].name);
                //console.log(elem.sport);
                //console.log(Team.new(team1.name));
                  map.value.push([team1[0].name, team2[0].name, elem.time,elem.sport,elem.team1_score,elem.team2_score,elem.id]);
                  //console.log(elem.team1+""+elem.team2.name);
                } catch (error) {
                  console.error('Une erreur s\'est produite lors de la récupération des données :', error);
              }
              })   
          } catch (error) {
              console.error('Une erreur s\'est produite lors de la récupération des données :', error);
          }
      });
      const updateScore1 = async (evt) => {
            let val = evt.target.value
            //console.log(val);
            //console.log(evt.target.getAttribute("id"));
            //console.log(evt.target.getAttribute("name"));
            try
              {
                if(evt.target.getAttribute("name")=="score1")
                {
                  
                    await updateMatchScore1(evt.target.getAttribute("id"),val);
                }
                else{
                  await updateMatchScore2(evt.target.getAttribute("id"),val);
                }
            } catch (error) {
                    console.error('Une erreur s\'est produite lors de lupdate :', error);
                }
            
      }
</script>
<template>
  <NavBar/>
  <main class="flex flex-col items-center">
    <h1 class="flex flex-col items-center justify-between shadow-mb rounded px-5 py-2 space-x-0 gap-3  mb-3 "> 
      Match(s)
    </h1>
    <div class="flex flex-col text-black" id="wrapper">
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
              <input name="score1" :placeholder=item[4] type="number" :id=item[6] @change="updateScore1(event)"/>
            </template>
            <template v-slot:Score2>
              <input name="score2" :placeholder=item[5] type="number" :id=item[6] @change="updateScore1(event)"/>
            </template>
        </MatchComponent>
    </div>
    <button @click="goToCreateMatch()" class="relative h-10 w-72 min-w-[200px] bg-sky-700 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5">
      CreateMatch
    </button>
  </main>
</template>
