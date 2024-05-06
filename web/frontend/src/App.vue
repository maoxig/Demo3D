<template>
  <model-collada
    :backgroundAlpha="0"
    :rotation="{
      x: - Math.PI / 2,
      y: 0,
      z: 0,
    }"
    :src="modelFilePath" 
  />
</template>
<script setup>
import { ModelCollada } from 'vue-3d-model';
import { ref, onMounted } from 'vue';

const modelFilePath = ref(""); // 使用 ref 来保存模型文件路径

onMounted(async () => {
  // Fetch model file path from backend when component is mounted
  const response = await fetch('/get_model_file_path'); // 发起 GET 请求获取模型文件路径
  const data = await response.json();
  modelFilePath.value = data.model_file_path; // 将获取到的模型文件路径赋值给 modelFilePath
});
</script>
