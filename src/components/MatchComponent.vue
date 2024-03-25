
<template>
    <div class="flex flex-col h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 items-center">
        <div>
        <slot  name ="Time">
            00h00
        </slot>
        -
        <slot name="Sport">
            quidditch
        </slot>
        </div>
        <div>
        <slot name="Team1">
            Equipe1
        </slot>
        -
        <slot name="Team2">
            Equipe2
        </slot>
        </div>
        <div>
        <slot name="Score1">
            10
        </slot>
        -
        <slot name="Score2">
            10
        </slot>
        </div>
        
    </div>
  
</template>