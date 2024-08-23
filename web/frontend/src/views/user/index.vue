<template>
    <el-scrollbar class="user-scrollbar">
        <el-card>
            <div class="welcome">
                <el-avatar class="avatar" icon="UserFilled" :size="60" />
                <div class="greeting">
                    <h2>欢迎！</h2>
                    <p>今天又是充满活力的一天！</p>
                </div>
            </div>
        </el-card>
        <el-tabs type="card" class="tabs">
            <el-tab-pane label="我的发布">
                <!-- Content for "发布" tab here -->
            </el-tab-pane>
            <el-tab-pane label="我的收藏">
                <!-- Content for "收藏" tab here -->
            </el-tab-pane>
            <el-tab-pane label="我的消息">
                <!-- Content for "消息" tab here -->
            </el-tab-pane>
            <el-tab-pane label="历史浏览">
                <!-- Content for "消息" tab here -->
            </el-tab-pane>
            <el-tab-pane label="个人设置">
                <!-- Content for "消息" tab here -->
            </el-tab-pane>
        </el-tabs>
    </el-scrollbar>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
.welcome {
    display: flex;
    align-items: center;
}

.user-scrollbar {
    height: calc(100vh - var(--header-height));
    padding: 20px;
}

.tabs {
    margin-top: 20px;
}
</style>
