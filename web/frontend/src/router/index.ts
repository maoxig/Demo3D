import { createRouter, createWebHistory } from 'vue-router';
// 引入主页视图
import HomeView from '../views/home/index.vue';
// 引入工作台视图
import WorkbenchView from '../views/workbench/index.vue';
// 引入配置视图
import SettingsView from '../views/settings/index.vue';
// 引入学习视图
import LearningView from '../views/learning/index.vue';
// 引入用户视图
import UserView from '../views/user/index.vue';
// 引入支持与帮助视图
import HelpView from '../views/help/index.vue';
// 引入社区与交流视图
import CommunityView from '../views/community/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { label: '首页', icon: 'House' }
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: WorkbenchView,
      meta: { label: '建模工作室', icon: 'Monitor' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { label: '配置与管理', icon: 'Setting' }
    },
    {
      path: '/learning',
      name: 'learning',
      component: LearningView,
      meta: { label: '智能建模学习', icon: 'Notebook' }
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView,
      meta: { label: '社区与交流', icon: 'ChatLineSquare' }
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: { label: '个人中心', icon: 'User' }
    }
    ,
    {
      path: '/help',
      name: 'help',
      component: HelpView,
      meta: { label: '支持与帮助', icon: 'Service' }
    }
  ]
});

export default router;
