import { h } from 'vue';

import { typeofD } from '@/utils/utils';

import AmisForm from '@/components/form.vue';

const demo1F = {
  type: 'page',
  body: {
    type: 'form',
    api: '/amis/api/mock2/form/saveForm',
    body: [
      {
        type: 'input-text',
        name: 'name',
        label: '姓名：',
      },
      {
        name: 'email',
        type: 'input-email',
        label: '邮箱：',
      },
    ],
  },
};

const demo = {
  type: 'div',
  body: [
    {
      type: 'ElButton',
      body: 'test',
    },
  ],
};

export function draw(schema: any = demo) {
  const type = schema.type;
  const body = schema.body;
  let children: any = [];
  const typeDetail = typeofD(body);
  if (typeDetail === 'object') {
    children = draw(body);
  } else if (typeDetail === 'array') {
    children = body.map(item => draw(item));
  } else {
    children = body;
  }
  return h(type, {}, children);
}
