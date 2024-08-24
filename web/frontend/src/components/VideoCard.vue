<template>
    <el-card class="video-card" :body-style="{ padding: '20px' }">
        <div class="image-container">
            <img :src="video.cover_url" class="image" />
        </div>
        <div class="video-info">
            <span class="title">{{ video.title }}</span>
            <div class="author-info">
                <span>{{ video.author }}</span>
                <span class="view-count">播放量: {{ video.view_count }}</span>
            </div>
            <div class="upload-info">
                <time class="time">{{ video.upload_time }}</time>
                <span class="duration">{{ video.duration }}</span>
            </div>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Video } from '@/types/types'; // 使用正确的路径

defineProps<{
    video: Video;
}>();
</script>

<style scoped>
.video-card {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
}

.image-container {
    width: 100%;
    height: 150px;
    /* 固定高度 */
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 保持图片宽高比并覆盖整个容器 */
    display: block;
}

.video-info {
    padding: 14px;
}

.title {
    font-size: 16px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
}

.author-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
}

.view-count {
    font-size: 12px;
    color: #999;
}

.upload-info {
    display: flex;
    justify-content: space-between;
}

.time {
    font-size: 12px;
    color: #999;
}

.duration {
    font-size: 12px;
    color: #999;
}
</style>
