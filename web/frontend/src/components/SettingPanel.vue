<template>
        <el-aside class="control-aside">
            <SettingItem v-for="(item, index) in items" :key="index" :value="item.value" :label="item.label" />
        </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SettingItem from './SettingItem.vue'

export default defineComponent({
    components: {
        SettingItem
    },
    data() {
        return {
            items: [
                { value: 0, label: 'Step' },
                { value: 10, label: 'Learning Rate' },
                { value: 20, label: 'Type' },
                { value: 20, label: 'Seed' },
                // 添加更多项...
            ]
        }
    }
})
</script>

<style scoped>
/* .control-aside {
    background-color: #545c64;
} */
</style>