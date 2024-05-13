<template>
    <el-menu class="menu-aside"  :collapse-transition="false" @select="handleMenuSelect">
        <h3>菜单</h3>
        <el-menu-item :index="item.path + ''" v-for="item in list" :key="item.label">
            <component class="icons" :is="item.icon"></component>
            <span>{{ item.label }}</span>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function handleMenuSelect(index: string) {
    router.push({ path: `/${index}` });
}

const list = [
    { path: '', label: '主页', icon: 'HomeFilled' },
    { path: 'workbench', label: '推理', icon: 'Monitor' },
    { path: 'settings', label: '配置', icon: 'Setting' },
    { path: 'training', label: '训练', icon: 'Grid' },
    { path: 'user', label: '用户', icon: 'User' }
];
</script>

<style scoped>
.icons {
    width: 18px;
    height: 18px;
    margin-right: 4px;
}

.menu-aside {
    width: 100%;
    height: 100%;
    border-right: none;
}

.menu-aside h3 {
    text-align: center;
}
</style>