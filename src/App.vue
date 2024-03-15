<template>
  <AmisForm :schemas="schema"></AmisForm>
</template>
<script lang="ts" setup>
import AmisForm from '@/components/form/form.vue';

const schema = {
  type: 'form',
  api: '/mock/form/test',
  labelWidth: 100,
  data: {
    uname: '张三',
    password: '123',
    rememberMe: true,
  },
  rules:{
    
  },
  body: [
    {
      type: 'input-text',
      label: '账号',
      name: 'uname',
    },
    {
      type: 'input-password',
      label: '密码',
      name: 'password',
    },
    {
      type: 'checkbox',
      label: '记住登录',
      name: 'rememberMe',
    },
  ],
};
</script>
<style></style>
