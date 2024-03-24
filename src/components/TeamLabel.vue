<script setup>
    import { ref } from 'vue';
    let isMenuOpen = ref(true);
    function open(){
        isMenuOpen.value = !isMenuOpen.value
    }
    const props = defineProps(['test'])
</script>
<template>
    <div class="m-5 flex flex-col" >
        <div  @click="open()" class="items-center justify-between bg-blue-500 shadow-mb rounded px-5 py-3  flex space-x-0 gap-16 mb-0 cursor-pointer">
            <p class="text-white text-2xl ">
                <slot name="places" ></slot>
            </p>
            <p class="text-white text-2xl">
                <slot name="team"></slot>
            </p>
            <p class="text-white text-2xl ">
                <slot name="pts"></slot>
                pts
            </p>
            
        </div>
        <div  :class="{ 'hidden': isMenuOpen }" class="w-full">
            <ul class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-b-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" >
                <li v-for="item in test"  class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-center">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
    
</template>