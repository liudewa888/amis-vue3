import { h } from 'vue';

import { typeofD } from '@/utils/utils';

import Form from '@/components/form.vue';

const demo1F = {
  type: 'page',
  body: {
    type: 'form',
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

const componentsMap = new Map([['AmisForm', Form]]);

export function draw(h, schema: any = demo) {
  let type = schema.type;
  type = componentsMap.has(type) ? componentsMap.get(type) : type;
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

export function renderFn() {
  return {
    render(h) {
      return draw(h);
    },
  };
}
