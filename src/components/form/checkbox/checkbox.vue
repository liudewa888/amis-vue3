<template>
  <el-checkbox :name="name" :label="label" @change="val => emits('update:modelValue', val)" :model-value="modelValue" />
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const emits = defineEmits();
const { label, type, name, modelValue } = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: '',
  },
  modelValue: {
    type: true,
    default: '',
  },
});
</script>
