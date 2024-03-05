<template>
  <el-form-item :label="label">
    <el-input :type="type" :name="name" @input="val => emits('update:modelValue', val)" :model-value="modelValue" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const val = ref(null);
const emits = defineEmits();
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
