
<template>
    <div class="flex flex-col items-center justify-between bg-blue-500 shadow-mb rounded px-5 py-2 space-x-0 gap-3 cursor-pointer mb-3 "> 
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