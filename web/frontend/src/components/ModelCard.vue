<template>
    <el-card class="model-card" :body-style="{ padding: '20px' }">
        <div class="image-container">
            <img :src="model.thumbnail_url" class="image" />
        </div>
        <div class="model-info">
            <span class="name">{{ model.name }}</span>
            <div class="author-info">
                <span>作者: {{ model.author }}</span>
            </div>
            <div class="upload-info">
                <time class="time">{{ model.upload_time }}</time>
                <div class="stats">
                    <span class="view-count">浏览量: {{ model.view_count }}</span>
                    <span class="like-count">点赞数: {{ model.like_count }}</span>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Model } from '@/types/types'; // 使用正确的路径

defineProps<{
    model: Model;
}>();
</script>

<style scoped>
.model-card {
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

.model-info {
    padding: 14px;
}

.name {
    font-size: 16px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
}

.author-info {
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
}

.upload-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.time {
    font-size: 12px;
    color: #999;
}

.stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.view-count,
.like-count {
    font-size: 12px;
    color: #999;
}

.view-count {
    margin-right: 8px;
}
</style>
