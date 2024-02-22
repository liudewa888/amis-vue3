<template>
  <el-form-item :label="label">
    <el-input :type="type" :name="name" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const val = ref(null);
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
  value: {
    type: String,
    default: '',
  },
});
</script>
