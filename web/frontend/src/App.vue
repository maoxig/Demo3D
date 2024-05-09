<template>
  <div class="full-page">
    <el-container>
      <el-aside class="left">
        <el-menu default-active="" @select="handleMenuSelect">
          <el-menu-item index="">
            <el-icon>
              <HomeFilled />
            </el-icon> 主页
          </el-menu-item>
          <el-menu-item index="workbench">
            <el-icon>
              <Monitor />
            </el-icon> 工作台
          </el-menu-item>
          <el-menu-item index="settings">
            <el-icon>
              <Setting />
            </el-icon> 配置
          </el-menu-item>
          <el-menu-item index="training">
            <el-icon>
              <Grid />
            </el-icon> 训练
          </el-menu-item>
          <el-menu-item index="user">
            <el-icon>
              <User />
            </el-icon> 用户
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="main">
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
      <el-aside class="right">右边框</el-aside>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router';

const router = useRouter()
function handleMenuSelect(index: string) {
  router.push({ path: `/${index}` });
}
</script>

<style scoped>
</style>
