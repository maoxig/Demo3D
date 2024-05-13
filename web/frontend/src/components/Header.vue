<template>
    <el-header class="custom-header">
        <div class="header-right">
            <el-switch v-model="isDark" inline-prompt: active-color="var(--el-fill-color-dark)"
                inactive-color="var(--el-color-primary)" @change=toggleDark></el-switch>
            <a class="github-link" href="https://github.com/maoxig/Demo3D" target="_blank">
                <img src="/github-mark.svg" alt="GitHub Icon" class="github-icon">
            </a>
        </div>
    </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark();
const toggleDark = useToggle(isDark);

// Handle switching night mode here
// You can add your logic here to change the night mode

</script>

<style scoped>
.custom-header {
    display: flex;
    justify-content: right;
    align-items: right;
    padding: 0 20px;
    /* background-color: #545c64; */
}

.header-right {
    display: flex;
    align-items: center;
}

.github-link {
    margin-right: 10px;
}

.github-icon {
    width: 20px;
    height: 20px;
}
</style>