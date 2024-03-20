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
  rules: {
    password: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
    ],
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
    {
      type: 'switch',
      label: '开关',
      name: 'switch',
    },
    {
      type: 'radio',
      label: '性别',
      name: 'sex',
      options: [
        {
          label: '男',
          value: '1',
        },
        {
          label: '女',
          value: '0',
        },
      ],
    },
    {
      type: 'select',
      label: '选项',
      name: 'sex1',
      placeholder: '请选择',
      options: [
        {
          label: '男',
          value: '1',
        },
        {
          label: '女',
          value: '0',
        },
        {
          label: '未知',
          value: '2',
        },
      ],
    },
  ],
};
</script>
<style></style>
