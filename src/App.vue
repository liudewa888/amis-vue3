<template>
  <Component :is="draw()"></Component>
</template>

<script setup lang="ts">
import { render } from 'vue';
import { draw } from '@/lib/render';

// render(draw(), document.querySelector('#main'));





</script>
<style></style>
