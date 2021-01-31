<template>
  <h1>{{ msg }}</h1>

  <button class="bg-gray-800 text-yellow-500" @click="count++">count is: {{ count }}</button>

  <SvelteWrapper :module="BtnClass" :props="{label: count}" :handlers="{click: () => count++}" />
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { Btn } from '../../bundle'
import SvelteWrapper from './SvelteWrapper.vue'
const BtnClass = Btn

defineProps({
  msg: String
})

const count = ref(0)

</script>
