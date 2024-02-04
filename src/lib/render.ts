import { h } from 'vue';

import { typeofD } from '@/utils/utils';



const demo = {
  type: 'div',
  body: [
    {
      type: 'amis-button',
      body: '按钮',
    },
    {
      type: 'h3',
      body: '标题',
    },
    {
      type: 'span',
      body: '内容',
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

  return h(type, { }, children);
}
