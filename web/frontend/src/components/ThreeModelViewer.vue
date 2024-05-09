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
            required: true
        }
    },
    setup(props) {
        const containerRef = ref<any>(null);
        let viewer: any = null;

        onMounted(() => {
            const container = containerRef.value;
            viewer = new api.ThreeModelViewer(container);
            console.log(props.modelUrl)
            viewer.loadModel(props.modelUrl);

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
                    // 加载新的背景物体
                    viewer.loadModel(newModelUrl);
                } else {

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