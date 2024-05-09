<template>
    <div>
        <textarea type="text" v-model="inputString"></textarea>
        <button @click="generateModelUrl">Generate 3D Model</button>
        <a v-if="modelUrl" :href="modelUrl" download="model.glb">
            <button>Download Model</button>
        </a>
        <div class="model-viewer-container" v-if="modelUrl">
            <ThreeModelViewerComponent :model-url="modelUrl" />
        </div>

    </div>
</template>

<script setup lang="ts">
import ThreeModelViewerComponent from '@/components/ThreeModelViewer.vue';
import api from '@/api';
import { defineComponent, ref } from 'vue';

let inputString = ref('');
let modelUrl = ref('');

async function generateModelUrl() {
    // 根据用户输入的字符串生成模型的 URL
    modelUrl.value = await generate3DModel(inputString.value);
    console.log(modelUrl.value)
}

async function generate3DModel(input: string) {
    return URL.createObjectURL(await api.generate3DModel(input));
}
</script>

<style scoped>
textarea {
    width: 300px;
    height: 100px;
}
</style>