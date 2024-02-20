<template>
  <el-form-item :label="label">
    <el-input />
  </el-form-item>
</template>

<script setup>
const { label } = defineProps({
  label: {
    type: String,
    default: '测试',
  },
});
</script>
