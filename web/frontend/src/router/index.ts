import { createRouter, createWebHistory } from 'vue-router';
// 引入主页视图
import HomeView from '../views/home/HomeView.vue';
// 引入工作台视图
import WorkbenchView from '../views/workbench/index.vue';
// 引入配置视图
import SettingsView from '../views/settings/index.vue';
// 引入训练视图
import TrainingView from '../views/training/index.vue';
// 引入文档视图
import DocumentView from '../views/document/index.vue';
// 引入用户视图
import UserView from '../views/user/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { label: '主页', icon: 'HomeFilled' }
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: WorkbenchView,
      meta: { label: '推理', icon: 'Monitor' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { label: '配置', icon: 'Setting' }
    },
    {
      path: '/training',
      name: 'training',
      component: TrainingView,
      meta: { label: '训练', icon: 'Grid' }
    },
    {
      path: '/document',
      name: 'document',
      component: DocumentView,
      meta: { label: '文档', icon: 'Document' }
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: { label: '用户', icon: 'User' }
    }
  ]
});

export default router;
