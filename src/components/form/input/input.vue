<template>
  <el-input :type="type" :name="name" :model-value="modelValue" @input="val => emits('update:modelValue', val)" />
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const val = ref(null);
const emits = defineEmits(['update:modelValue']);
const { label, type, name } = defineProps({
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
    type: String,
    default: '',
  },
});
</script>
