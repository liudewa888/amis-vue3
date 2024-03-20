<template>
  <el-switch :name="name" :model-value="modelValue" @change="val => emits('update:modelValue', val)"> </el-switch>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['update:modelValue']);
const { modelValue, name } = defineProps({
  options: {
    type: Array,
    default: [],
  },
  name: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: null,
  },
});
</script>
