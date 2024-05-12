<template>
    <el-aside class="control-aside">
        <SliderItem v-for="(item, index) in items" :key="index" :value="item.value" :label="item.label" />
    </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SliderItem from './SliderItem.vue'

export default defineComponent({
    components: {
        SliderItem
    },
    data() {
        return {
            items: [
                { value: 0, label: 'Item 1' },
                { value: 10, label: 'Item 2' },
                { value: 20, label: 'Item 3' },
                // 添加更多项...
            ]
        }
    }
})
</script>

<style scoped>
.control-aside {
    background-color: #545c64;
}
</style>