<template>
  <AmisForm :schemas="schema" label="1111"></AmisForm>
</template>
<script lang="ts" setup>
import AmisForm from '@/components/form/form.vue';

const schema = {
  type: 'form',
  api: '/api/mock/form/test',
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
  ],
};
</script>
<style></style>
