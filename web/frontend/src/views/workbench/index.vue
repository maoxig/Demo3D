<template>
    <el-container class="container">
        <el-container>
            <el-container>
                <el-row class="model-viewer-row">
                    <el-col :span="16">
                        <div class="model-viewer-container" v-if="workbenchStore.modelUrl">
                            <ThreeModelViewerComponent :model-url="workbenchStore.modelUrl" />
                        </div>
                    </el-col>
                </el-row>
            </el-container>
            <el-footer class="footer">
                <el-input type="textarea" v-model="workbenchStore.text" :rows="2" clearable></el-input>
                <div class="button-group">
                    <el-button @click="submitRequest">Generate 3D Model</el-button>
                    <a v-if="workbenchStore.modelUrl" :href="workbenchStore.modelUrl" download="model.glb">
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

import { useWorkbenchStore } from '@/store/modules/workbench';


const workbenchStore = useWorkbenchStore();


const submitRequest = async () => {
    await workbenchStore.sendRequest()
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