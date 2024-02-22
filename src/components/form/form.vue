<template>
  <el-form ref="formRef" :model="formData">
    <slot></slot>
    <el-form-item>
      <el-button>重置</el-button>
      <el-button @click="submit(formData)">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, useSlots } from 'vue';
const slots = useSlots();
const { body } = defineProps({
  body: {
    type: String,
    default: '',
  },
});

const formRef = ref(null);
const formData = reactive({});
const submit = item => {
  console.log(slots.default(), 909);
  return false;
};
</script>
