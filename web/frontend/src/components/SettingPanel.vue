<template>
    <el-aside class="control-aside">
        <SettingItem v-for="(item, index) in items" :key="index" :value="item.value" :label="item.label" />
        <div class="bad-prompt">
            <el-text>反面提示词</el-text>
            <el-switch v-model="showTextarea" />
            <el-input v-if="showTextarea" v-model="badPromptValue" type="textarea" :rows="4"
                style="width: 200px; margin-top: 10px" />
        </div>
        <el-text>艺术风格</el-text>

    </el-aside>
</template>

<script setup lang="ts">
import { inject, provide, ref } from 'vue';

const items = ref([
    { value: 0, label: 'Step' },
    { value: 10, label: 'Learning Rate' },
    { value: 20, label: 'Type' },
    { value: 20, label: 'Seed' },
    // 添加更多项...
]);
const showTextarea = ref(false);
const badPromptValue = ref('');

// 提供数据给子组件
provide('apiParams', {
    items,
    showTextarea,
    badPromptValue,
});

// 暴露一个方法来获取所有需要的数据
function getApiParams() {
    return {
        items: items.value,
        bad_prompt: showTextarea.value ? badPromptValue.value : null,
        // ... 其他需要发送到后端的参数
    };
}

defineExpose({
    getApiParams,
});
</script>
<style scoped>
/* .control-aside {
    background-color: #545c64;
} */
</style>