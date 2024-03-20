<template>
  <el-select :name="name" :model-value="modelValue" @change="val => emits('update:modelValue', val)">
    <el-option :value="item.value" v-for="(item, index) in options" :key="index">{{ item.label }}</el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['update:modelValue']);
const { modelValue, options, name } = defineProps({
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

const change = () => {
  emits('update:modelValue', '1');
};
</script>
