<template>
  <el-form ref="formRef" :model="formData">
    <component
      :is="item.component"
      v-bind="{ ...item }"
      v-model="formData[item.name]"
      v-for="(item, index) in schemas.body"
      :key="index"
    ></component>
    <el-form-item>
      <div class="flex justify-end w-100%">
        <el-button>重置</el-button>
        <el-button type="primary" @click="submit(formRef)">提交</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';
import { typeofD } from '@/utils/utils';
import Input from '@/components/form/input/input.vue';

const componentsMap = new Map([
  ['input-text', Input],
  ['input-password', Input],
]);

const { schemas, label } = defineProps({
  schemas: {
    type: Object,
    default: {},
  },
  label: {
    type: String,
    default: '',
  },
});
const formRef = ref(null);
const formData = reactive({});
const submit = item => {
  console.log(formData, 898);
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
  addComponentProp(schemas);
};

init();
</script>
