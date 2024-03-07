<template>
  <AmisForm :schemas="schema"></AmisForm>
</template>
<script lang="ts" setup>
import AmisForm from '@/components/form/form.vue';

const schema = {
  type: 'form',
  api: {
    method: 'post',
    url: '/mock/form/test',
    data: {
      myNm: '${name}',
      myPsw: '${password}',
    },
  },
  labelWidth: 100,
  data: {
    uname: '张三',
    password: '123',
    rememberMe: true,
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
