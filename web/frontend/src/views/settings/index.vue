<template>
    <main>
        <el-scrollbar class="setting-scrollbar">
            <el-card>
                <template #header>
                    <div class="card-header">
                        <span>常用设置</span>
                    </div>
                </template>
                常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置常用设置
            </el-card>
            <el-card>
                <template #header>
                    <div class="card-header">
                        <span>AI助手设置</span>
                    </div>
                </template>
                AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置AI助手设置
            </el-card>
            <el-card>
                <template #header>
                    <div class="card-header">
                        <span>首页设置设置</span>
                    </div>
                </template>

                <el-form label-position="right" label-width="100px">
                    <el-form-item label="视频卡片数量">
                        <el-slider v-model="videoCardLimit" :min="1" :max="10" :show-stops="true"
                            @change="handleVideoCardLimitChange" />
                    </el-form-item>
                </el-form>
            </el-card>
        </el-scrollbar>
    </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useSettingStore } from '@/store/modules/setting';
const settingStore = useSettingStore();

const videoCardLimit = ref(settingStore.getVideoCardLimit());

const handleVideoCardLimitChange = (limit: number) => {
    videoCardLimit.value = limit;
    settingStore.setVideoCardLimit(limit);
};
</script>
<style lang="css" scoped>
.setting-scrollbar {
    height: calc(100vh - var(--header-height) - var(--main-padding) * 2);

}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 为卡片添加底部间隔 */
.el-card+.el-card {
    margin-top: 20px;
    /* 设置卡片之间的间隔 */
}
</style>