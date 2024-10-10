<template>
  <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700" :class="TwitterBorderColors">
    
    <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="TwitterBorderColors">
        {{props.title}}
    </h1>

    <slot>
        <!-- slot que vai ficar os itens do card -->
    </slot>

    <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-200 dark:hover:bg-dim-300" :class="defautTransition">
        Show More
    </div>

  </div>
</template>

<script lang="ts" setup>
const {TwitterBorderColors, defautTransition} = UseTailwindConfig();

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>