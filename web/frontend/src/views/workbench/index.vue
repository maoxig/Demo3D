<template>
    <el-container class="container">
        <el-container>
            <el-container>
                <el-row class="model-viewer-row">
                    <el-col :span="16">
                        <div class="model-viewer-container" v-if="modelUrl">
                            <ThreeModelViewerComponent :model-url="modelUrl" />
                        </div>
                    </el-col>
                </el-row>
            </el-container>
            <el-footer class="footer">
                <el-input type="textarea" v-model="inputString" :rows="4"></el-input>
                <div class="button-group">
                    <el-button @click="generateModelUrl">Generate 3D Model</el-button>
                    <a v-if="modelUrl" :href="modelUrl" download="model.glb">
                        <el-button>Download Model</el-button>
                    </a>
                </div>
            </el-footer>
        </el-container>
        <SettingPanel />
    </el-container>

</template>

<script setup lang="ts">
import ThreeModelViewerComponent from '@/components/ThreeModelViewer.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import api from '@/api';
import { defineComponent, ref } from 'vue';

let inputString = ref('');
let modelUrl = ref('');

async function generateModelUrl() {
    // 根据用户输入的字符串生成模型的 URL
    modelUrl.value = await generate3DModel(inputString.value);
    console.log(modelUrl.value);
}

async function generate3DModel(input: string) {
    return URL.createObjectURL(await api.generate3DModel(input));
}
</script>

<style scoped>
.container {
    height: 100%;
}

.model-viewer-row {
    flex-grow: 1;
}

.model-viewer-container {
    margin-top: 20px;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

.button-group {
    display: flex;
    gap: 10px;
}
</style>