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
    },
  ],
};

const componentsMap = new Map([
  ['amis-form', Form],
  ['amis-input-text', Input],
  ['amis-input-password', Input],
]);

export const addComponentProp = (schema: any = demo) => {
  const type = 'amis-' + schema.type;
  if (componentsMap.has(type)) {
    schema.component = componentsMap.get(type);
  }
  const body = schema.body;
  const typeDetail = typeofD(body);
  if (typeDetail === 'object') {
    addComponentProp(body);
  } else if (typeDetail === 'array') {
    body.forEach(item => addComponentProp(item));
  }
};

export function renderComponent(schema: any = demo) {
  const body = schema.body;
  const type = schema.type;
  let children: any = [];
  let props = {};
  if (type === 'form') {
    body.forEach(item => {
      const typeList: [] = item.type.split('-');
      if (typeList.length > 1) {
        item.type = typeList.at(-1);
      }
    });
    props.body = body;
    return h(schema.component || schema.type, { ...props });
  }
  const typeDetail = typeofD(body);
  if (typeDetail === 'object') {
    children = renderComponent(body);
  } else if (typeDetail === 'array') {
    children = body.map(item => renderComponent(item));
  } else {
  }
  return h(schema.component || schema.type, { ...props }, children);
}

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
  return renderComponent();
}
