<template>
  <!-- <Component :is="draw()"></Component> -->
  <demo></demo>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { draw } from '@/lib/render';
import demo from '@/components/demo.vue';

// render(draw(), document.querySelector('#main'));
const render = () => {
  return h('el-button', {}, '测试');
};
</script>
<style></style>
