<template>
  <el-form>
    <slot></slot>
    <el-form-item>
      <el-button>提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
const { body } = defineProps({
  body: {
    type: String,
    default: '测试999',
  },
});
</script>
