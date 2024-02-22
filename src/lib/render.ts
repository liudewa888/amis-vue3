import { h } from 'vue';

import { typeofD } from '@/utils/utils';

import Form from '@/components/form/form.vue';
import Input from '@/components/form/input/input.vue';

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
        type: 'input-email',
        name: 'email',
        label: '邮箱：',
      },
    ],
  },
};

const demo = {
  type: 'page',
  body: [
    {
      type: 'form',
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
    },
  ],
};

const componentsMap = new Map([
  ['amis-form', Form],
  ['amis-input-text', Input],
  ['amis-input-password', Input],
]);

export function render(schema: any = demo) {
  let type = 'amis-' + schema.type;
  type = componentsMap.has(type) ? componentsMap.get(type) : type;
  const body = schema.body;
  let children: any = [];
  let props = {};
  const typeDetail = typeofD(body);
  if (typeDetail === 'object') {
    children = render(body);
  } else if (typeDetail === 'array') {
    children = body.map(item => render(item));
  } else {
    // 单独处理input类型
    const typeList: [] = schema.type.split('-');
    if (typeList.length > 1) {
      schema.type = typeList.at(-1);
    }
    props = schema;
    children = body;
  }
  return h(type, { ...props }, children);
}

export function renderFn() {
  return render();
}
