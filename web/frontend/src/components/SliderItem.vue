<template>
    <div class="slider-demo-block">
        <div class="slider-item-label">{{ label }}</div>
        <el-slider v-model="value" show-input />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElSlider } from 'element-plus'

export default defineComponent({
    components: {
        ElSlider
    },
    props: {
        label: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const value = ref(0)

        return {
            value,
            label: props.label
        }
    }
})
</script>

<style scoped>
.slider-demo-block {
    max-width: 600px;
    display: flex;
    align-items: center;
}

.slider-demo-block .slider-item-label {
    margin-right: 12px;
    color: white;
}

.slider-demo-block .el-slider {
    margin-top: 0;
}
</style>