<template>
  <div class="app">
    <el-container class="main-container">
      <el-aside class="left">
        <MenuAside />
      </el-aside>
      <el-container direction="vertical">
        <Header></Header>
        <el-container class="main">
          <el-container>
            <el-main>
              <RouterView />
            </el-main>
          </el-container>
          <SliderGroup />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">

import { RouterView, useRoute, useRouter } from 'vue-router';
import MenuAside from '@/components/MenuAside.vue';
import Header from '@/components/Header.vue';

</script>

<style scoped>
.app {
  height: 100%;
}

.el-aside :left {
  height: 100%;
}

.main-container {

  height: 100%
}
</style>
