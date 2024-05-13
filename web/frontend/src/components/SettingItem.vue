<template>
    <div class="setting-item">
        <div class="settting-item-label">{{ label }}</div>
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
.setting-item {
    display: flex;
    align-items: center;
}

.setting-item .settting-item-label {
    margin-right: 12px;
    color:var(--el-menu-text-color)
}

.setting-item .el-slider {
    margin-top: 0;
}
</style>