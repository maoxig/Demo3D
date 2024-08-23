<template>
  <el-container class="community-view">
    <el-main class="community-main">
      <!-- 走马灯组件 -->
      <el-carousel height="var(--carousel-height)" :interval="5000" type="card" :autoplay="true">
        <el-carousel-item v-for="(banner, index) in banners" :key="index">
          <el-image :src="banner" fit="fill"></el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- 无限滚动列表 -->
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <el-card v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</el-card>
      </ul>
    </el-main>
    <el-aside>
      侧边栏放一些信息
    </el-aside>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const banners = ref([
  'banner/banner1.jpg',
  'banner/banner2.jpg',
  'banner/banner3.jpg',
  'banner/banner4.jpg',
  'banner/banner5.jpg'

])

const load = () => {
  count.value += 2
}
</script>

<style lang="css" scoped>
.el-aside {
  width: 250px;
}

.community-view {
  height: calc(100vh - var(--header-height));
  /* 60px is the height of the header */
}

.infinite-list {
  height: calc(100% - var(--carousel-height));
  /* 100px is the height of the carousel */
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* background: var(--el-color-primary-light-9); */
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
  margin-top: 10px;
}
</style>
