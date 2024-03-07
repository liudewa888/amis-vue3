<template>
  <el-form ref="formRef" v-bind="baseFormProps">
    <component
      :is="item.component"
      v-bind="{ ...item }"
      v-model="formData[item.name]"
      v-for="(item, index) in schemas.body"
      :key="index"
    ></component>
    <el-form-item>
      <div class="flex justify-end w-100%">
        <el-button :type="item.elType" @click="formActionsDic[item.type]" v-for="item in formActions">{{
          item.label
        }}</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';
import { typeofD } from '@/utils/utils';
import Input from '@/components/form/input/input.vue';
import Checkbox from '@/components/form/checkbox/checkbox.vue';

const componentsMap = new Map([
  ['input-text', Input],
  ['input-password', Input],
  ['checkbox', Checkbox],
]);

const { schemas } = defineProps({
  schemas: {
    type: Object,
    default: {},
  },
});
const formRef = ref(null);
const formData = reactive({});

const baseFormActions = [
  {
    type: 'reset',
    label: '重置',
  },
  {
    type: 'submit',
    label: '登录',
    elType: 'primary',
  },
];

const initFormData = () => {
  const data = schemas.data;
  if (typeofD(data) === 'object') {
    Object.keys(data).forEach(key => {
      formData[key] = data[key];
    });
  }
};

const formActions = schemas.actions || baseFormActions;

const baseFormProps = {
  model: formData,
  rules: {},
  inline: false,
  'label-position': 'right',
  labelWidth: 80,
  'require-asterisk-position': 'left',
  'show-message': true,
  'inline-message': false,
  'status-icon': false,
  'validate-on-rule-change': true,
  size: '',
  disabled: false,
  'scroll-to-error': false,
};

const formSubmit = formRef => {
  console.log(formData);
};

const formReset = formRef => {
  console.log('form reset');
};

const addComponentProp = schema => {
  const type = schema.type;
  if (componentsMap.has(type)) {
    schema.component = componentsMap.get(type);
  }
  const body = schema.body;
  // 单独处理input类型
  const typeList: [] = schema.type.split('-');
  if (typeList.length > 1) {
    schema.type = typeList.at(-1);
  }

  const typeDetail = typeofD(body);
  if (typeDetail === 'object') {
    addComponentProp(body);
  } else if (typeDetail === 'array') {
    body.forEach(item => addComponentProp(item));
  }
};
const init = () => {
  Object.keys(baseFormProps).forEach(key => {
    baseFormProps[key] = schemas[key];
  });
  addComponentProp(schemas);
};

initFormData();
init();

const formActionsDic = {
  submit: formSubmit,
  reset: formReset,
};
</script>
