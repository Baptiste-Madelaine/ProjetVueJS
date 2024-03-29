<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
    import NavBar from '@/components/NavBar.vue';
    import { index, Team, getTeam } from '@/models/teams.js';
    import { store, Match } from '@/models/matchs.js'
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

const route = useRouter()

    const equipes = ref([])
    var sports;//ref([]) must create sport in bdd and get them

    var equipe1;
    var equipe2;
    var time;
    onMounted(async () => {
          try {
              const data = await index()
              console.log(data);
              //data.sort((a,b) => b.totalPoints - a.totalPoints)

              data.forEach(async (elem, index) => {
                try{
                  console.log(elem);
                  equipes.value.push([elem.id ,elem.name]);
                  
                } catch (error) {
                  console.error('Une erreur s\'est produite lors de la récupération des données :', error);
              }
              })   
          } catch (error) {
              console.error('Une erreur s\'est produite lors de la récupération des données :', error);
          }
      });
    async function CreateMatch()
    {
      //console.log(equipe1);
      //console.log(equipe2);
      //console.log(sports);
      //console.log(time);
      
      var match =new Match();
      match.team1=equipe1;
      match.team2=equipe2;
      match.sport=sports;
      match.time=time;
      match.team1_score=0;
      match.team2_score=0;
      console.log(match);
      
      try {

        const data = await store(match);
        console.log(data);

      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données / insertion :', error);
      }
      
      //route.push('/Match');
    }
</script>

<template>
  <NavBar />
  <main >
    <h1>
      Match Creation
    </h1>
      <div class = "flex flex-col space-y-4 ">
          <div class="relative h-10 w-72 min-w-[200px]">
            <select name="Team1" v-model="equipe1" class="peer bg-sky-700 h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm text-black font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" >
              
              <option v-for="(item, index) in equipes" :value="item[0]" :index="index" >{{item[1]}}</option>
            </select>
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal text-black leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a Team 1
            </label>
          </div>
          <div class="relative h-10 w-72 min-w-[200px]">
            <select name="Team1" v-model="equipe2" class="peer bg-sky-700 h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-black text-sm font-normaloutline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" >
              <option v-for="(item, index) in equipes" :value="item[0]" :index="index">{{item[1]}}</option>
            </select>
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal text-black leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a Team 2
            </label>
          </div>
          <div class="relative h-10 w-72 min-w-[200px]">
            <select name="Team1"  v-model="sports"  class="peer bg-sky-700 h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm text-black font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" >
              <option value="Tennis">Tennis</option>
              <option value="Rugby">Rugby</option>
              <option value="footix">footix</option>
              <option value="Hand-ball">Hand-ball</option>
            </select>
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a Sport
            </label>
            
          </div>
          <div class="relative h-10 w-72 min-w-[200px]">
            <input v-model="time" class="peer bg-sky-700 h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 " type="time" id="appt" name="appt" min="08:00" max="22:00"  required />
            <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-black select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Select a Time
              </label>
          </div>
        <button @click="CreateMatch()" class="relative h-10 w-72 min-w-[200px] bg-sky-700 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5">
          CreateMatch
        </button>
        
    </div>
  </main>
</template>
