<template>
    <div ref="containerRef" class="containerRef"></div>
</template>

<script lang="ts">
import api from '@/api';

import { onMounted, onBeforeUnmount, defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: 'ThreeModelViewerComponent',
    props: {
        modelUrl: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const containerRef = ref<any>(null);
        let viewer: any = null;

        onMounted(() => {
            const container = containerRef.value;
            viewer = new api.ThreeModelViewer(container);
            if (props.modelUrl) {
                // 加载背景物体
                viewer.loadModel(props.modelUrl);
            }
        });

        onBeforeUnmount(() => {
            if (viewer) {
                viewer.dispose();
                viewer = null;
            }
        });

        watch(() => props.modelUrl, (newModelUrl) => {
            if (viewer) {
                if (newModelUrl) {
                    // 清除旧的物体
                    viewer.clearModel();

                    // 加载新的背景物体
                    viewer.loadModel(newModelUrl);
                } else {
                    // 清除背景物体
                    viewer.clearModel();
                }
            }
        });

        return {
            containerRef
        };
    }
});
</script>

<style scoped>
.containerRef {
    width: 800px;
    height: 600px;
}
</style>