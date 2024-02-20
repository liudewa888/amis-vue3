import { h } from 'vue';

import { typeofD } from '@/utils/utils';

import Form from '@/components/form/form.vue';
import inputText from '@/components/form/input/input-text.vue';

const demo1 = {
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
      type: 'AmisForm',
      body: [
        {
          type: 'AmisInputText',
          label: '邮箱',
        },
      ],
    },
  ],
};

const componentsMap = new Map([
  ['AmisForm', Form],
  ['AmisInputText', inputText],
]);

export function draw(schema: any = demo) {
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
  return h(type, { label: '电话' }, children);
}

export function renderFn() {
  return draw();
}
