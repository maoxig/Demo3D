<template>
    <el-header class="custom-header">
        <div class="search-box">
            <el-input class="search-input" placeholder="Search" prefix-icon="Search" clearable></el-input>
        </div>
        <div class="header-right">
            <FullScreen class="fullscreen-icon" @click="toggleFullscreen" />
            <el-switch v-model="isDark" inline-prompt: active-color="var(--el-fill-color-dark)"
                active-action-icon="Moon" inactive-action-icon="Sunny" inactive-color="var(--el-color-primary)"
                @change=toggleDark></el-switch>
            <a class="github-link" href="https://github.com/maoxig/Demo3D" target="_blank">
                <img src="/github-mark.svg" alt="GitHub Icon" class="github-icon">
            </a>
            <el-avatar class="avatar" icon="UserFilled" />
        </div>
    </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'


const isDark = useDark();
const toggleDark = useToggle(isDark);

const isFullscreen = ref(false);

function toggleFullscreen() {
    isFullscreen.value = !isFullscreen.value;
    if (isFullscreen.value) {
        // Enter fullscreen mode
        const docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

</script>

<style scoped>
.custom-header {
    display: flex;
    justify-content: right;
    align-items: right;
    padding: 20px;

    /* background-color: #545c64; */
}

.custom-header {

    font-size: 20px;
    font-weight: 500;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
    position: relative;
}

.search-box {

    flex: 1;
    margin-right: 20px;
    align-items: center;
}

.search-input {
    width: 100%;
    height: 40px;
    font-size: 16px;

}

.header-right {
    display: flex;
    align-items: center;

}

.github-link {
    margin-left: 20px;
    margin-right: 20px;
}

.github-icon {
    width: 20px;
    height: 20px;

}

.fullscreen-icon {
    width: 25px;
    height: 25px;
    margin-left: 20px;
    margin-right: 20px;
}
.avatar {
    width: 30px;
    height: 30px;
}
</style>