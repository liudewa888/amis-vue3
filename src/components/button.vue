<template>
  <el-button>{{ body }}</el-button>
</template>

<script setup>
const { body } = defineProps({
  body: {
    type: String,
    default: '测试999',
  },
});
</script>
