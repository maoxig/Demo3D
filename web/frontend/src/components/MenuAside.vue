<template>
    <el-aside :class="{ 'collapsed': isCollapsed }">
        <div class="menu-header">
            <h3 class="menu-title" :class="{ 'hidden': isCollapsed }">菜单</h3>
            <div class="menu-toggle" @click="isCollapsed = !isCollapsed">
                <el-icon v-if="isCollapsed">
                    <Expand />
                </el-icon>
                <el-icon v-else>
                    <Fold />
                </el-icon>
            </div>
        </div>
        <el-menu class="menu-aside" :collapse-transition="false" @select="handleMenuSelect">
            <el-menu-item :index="item.path + ''" v-for="item in menuList" :key="item.meta.label">
                <component class="icons" :is="item.meta.icon"></component>
                <span class="menu-label" :class="{ 'hidden': isCollapsed }">{{ item.meta.label }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>




<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isCollapsed = ref(false);

// 动态生成菜单列表
const menuList = router.getRoutes().filter((route) => route.meta && route.meta.label && route.meta.icon);

function handleMenuSelect(index: string) {
    router.push({ path: `${index}` });
}
</script>

<style scoped>
.menu-aside {
    width: 100%;

    border-right: none;
    transition: width 0.3s;
}

.menu-title.hidden,
.menu-label.hidden {
    display: none;
}

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    /* 根据需要调整内边距 */
}

.el-aside {height: 100%;
    transition: width 0.3s;
}

.collapsed {
    width: 64px;
    /* 或者您希望的收起后的宽度 */
}

.menu-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    cursor: pointer;
}

.menu-label.hidden {
    display: none;
}

.icons {
    width: 18px;
    height: 18px;
    margin-right: 4px;
}

.menu-aside h3 {
    text-align: center;
}
</style>
