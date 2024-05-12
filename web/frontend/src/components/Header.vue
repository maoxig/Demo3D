<template>
    <el-header class="custom-header">
        <div class="header-right">
            <a class="github-link" href="https://github.com/maoxig/Demo3D" target="_blank">
                <img src="/public/github-mark.svg" alt="GitHub Icon" class="github-icon">
            </a>
            <el-switch v-model="isNightMode" active-color="#409eff" inactive-color="#ffffff"
                @change="toggleNightMode"></el-switch>
        </div>
    </el-header>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const isNightMode = ref(false);

function toggleNightMode(value: boolean) {
    // Handle switching night mode here
}
</script>

<style scoped>
.custom-header {
    display: flex;
    justify-content: right;
    align-items: right;
    padding: 0 20px;
    background-color: #545c64;
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