
<template>
    <div class="flex flex-col h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 items-center mb-3 ">
        <div>
        <slot  name ="Time">
        </slot>
        -
        <slot name="Sport">
            
        </slot>
        </div>
        <div>
        <slot name="Team1">
            
        </slot>
        -
        <slot name="Team2">
            
        </slot>
        </div>
        <div>
        <slot name="Score1">
           
        </slot>
        -
        <slot name="Score2">
           
        </slot>
        </div>
        
    </div>
  
</template>