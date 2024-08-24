<template>
  <el-scrollbar class="home-scrollbar">
    <el-card>
      <div class="welcome">
        <el-avatar class="avatar" icon="UserFilled" :size="60" />
        <div class="greeting">
          <h2>欢迎！</h2>
          <p>今天又是充满活力的一天！</p>
        </div>
        <div class="info">
          <p>日期: {{ currentDate }}</p>
          <p>消息: {{ unreadMessages }}</p>
        </div>
      </div>
    </el-card>

    <el-card class="recommendation model">
      <div class="header">
        <h2>模型推荐</h2>
        <el-button type="text" class="more" @click="goToLearningPage">更多</el-button>
      </div>
      <div class="content">
        <ModelCard v-for="model in modelData" :key="model.model_id" :model="model" />
      </div>
    </el-card>
    <el-card class="recommendation video">
      <div class="header">
        <h2>视频推荐</h2>
        <el-button type="text" class="more" @click="goToLearningPage">更多</el-button>
      </div>
      <div class="content">
        <VideoCard v-for="(video, index) in videoData.slice(0, videoCardLimit)" :key="video.video_id" :video="video" />
      </div>
    </el-card>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VideoCard from '@/components/VideoCard.vue';
import ModelCard from '@/components/ModelCard.vue';
import type { Model, Video } from '@/types/types';
import { useRouter } from 'vue-router';
import { useSettingStore } from '@/store/modules/setting';

const settingStore = useSettingStore();
const videoCardLimit = ref(5);
const handleVideoCardLimitChange = (limit: number) => {
  videoCardLimit.value = limit;
  settingStore.setVideoCardLimit(limit);
};


// 使用useRouter钩子来获取router实例
const router = useRouter();
// 定义一个方法来导航到学习页面
const goToLearningPage = () => {
  router.push('/learning');
};

onMounted(() => {
  // 确保在组件挂载时获取最新的videoCardLimit值
  videoCardLimit.value = settingStore.VideoCardLimit;
});
const currentDate = ref(new Date().toLocaleDateString());
const unreadMessages = ref(5);
const modelData = ref<Model[]>([
  // 原有模型数据
  {
    model_id: 'm1',
    name: 'Model One',
    model_file: '/path/to/model_one.obj',
    thumbnail_url: 'https://example.com/thumbnail1.png',
    author: 'Author A',
    author_id: 'a1',
    description: 'This is the first model.',
    upload_time: '2023-04-01T12:00:00Z',
    view_count: 150,
    like_count: 20,
    tags: ['character', 'fantasy'],
    is_featured: false
  },
  {
    model_id: 'm2',
    name: 'Model Two',
    model_file: '/path/to/model_two.obj',
    thumbnail_url: 'https://example.com/thumbnail2.png',
    author: 'Author B',
    author_id: 'b2',
    description: 'This is the second model.',
    upload_time: '2023-04-02T12:00:00Z',
    view_count: 300,
    like_count: 45,
    tags: ['vehicle', 'modern'],
    is_featured: true
  },
  {
    model_id: 'm3',
    name: 'Model Three',
    model_file: '/path/to/model_three.obj',
    thumbnail_url: 'https://example.com/thumbnail3.png',
    author: 'Author C',
    author_id: 'c3',
    description: 'This is the third model.',
    upload_time: '2023-04-03T12:00:00Z',
    view_count: 500,
    like_count: 70,
    tags: ['building', 'architecture'],
    is_featured: true
  },
  {
    model_id: 'm4',
    name: 'Model Four',
    model_file: '/path/to/model_four.obj',
    thumbnail_url: 'https://example.com/thumbnail4.png',
    author: 'Author D',
    author_id: 'd4',
    description: 'This is the fourth model.',
    upload_time: '2023-04-04T12:00:00Z',
    view_count: 200,
    like_count: 25,
    tags: ['nature', 'environment'],
    is_featured: false
  },
  {
    model_id: 'm5',
    name: 'Model Five',
    model_file: '/path/to/model_five.obj',
    thumbnail_url: 'https://example.com/thumbnail5.png',
    author: 'Author E',
    author_id: 'e5',
    description: 'This is the fifth model.',
    upload_time: '2023-04-05T12:00:00Z',
    view_count: 250,
    like_count: 40,
    tags: ['robot', 'science fiction'],
    is_featured: false
  },

  // 新增的模型数据
  {
    model_id: 'm6',
    name: 'Model Six',
    model_file: '/path/to/model_six.obj',
    thumbnail_url: 'https://example.com/thumbnail6.png',
    author: 'Author F',
    author_id: 'f6',
    description: 'This is the sixth model, featuring advanced mechanics.',
    upload_time: '2023-04-06T12:00:00Z',
    view_count: 700,
    like_count: 90,
    tags: ['mechanical', 'robotics'],
    is_featured: true
  },
  {
    model_id: 'm7',
    name: 'Model Seven',
    model_file: '/path/to/model_seven.obj',
    thumbnail_url: 'https://example.com/thumbnail7.png',
    author: 'Author G',
    author_id: 'g7',
    description: 'This is the seventh model, an intricate sculpture.',
    upload_time: '2023-04-07T12:00:00Z',
    view_count: 350,
    like_count: 60,
    tags: ['sculpture', 'abstract'],
    is_featured: false
  },
  {
    model_id: 'm8',
    name: 'Model Eight',
    model_file: '/path/to/model_eight.obj',
    thumbnail_url: 'https://example.com/thumbnail8.png',
    author: 'Author H',
    author_id: 'h8',
    description: 'This is the eighth model, a detailed architectural design.',
    upload_time: '2023-04-08T12:00:00Z',
    view_count: 400,
    like_count: 55,
    tags: ['architecture', 'design'],
    is_featured: false
  },
  {
    model_id: 'm9',
    name: 'Model Nine',
    model_file: '/path/to/model_nine.obj',
    thumbnail_url: 'https://example.com/thumbnail9.png',
    author: 'Author I',
    author_id: 'i9',
    description: 'This is the ninth model, featuring futuristic concepts.',
    upload_time: '2023-04-09T12:00:00Z',
    view_count: 600,
    like_count: 85,
    tags: ['futuristic', 'concept art'],
    is_featured: true
  },
  {
    model_id: 'm10',
    name: 'Model Ten',
    model_file: '/path/to/model_ten.obj',
    thumbnail_url: 'https://example.com/thumbnail10.png',
    author: 'Author J',
    author_id: 'j10',
    description: 'This is the tenth model, showcasing fantasy creatures.',
    upload_time: '2023-04-10T12:00:00Z',
    view_count: 800,
    like_count: 120,
    tags: ['fantasy', 'creatures'],
    is_featured: true
  }
]);


const videoData = ref<Video[]>([
  // 原有视频数据
  {
    video_id: 'v1',
    title: 'Video One',
    author: 'Video Author A',
    author_id: 'va1',
    view_count: 1000,
    danmaku_count: 50,
    cover_url: 'https://example.com/cover1.png',
    upload_time: '2023-04-01T12:00:00Z',
    duration: '05:30',
    description: 'This is the first video.',
    tags: ['educational', 'tutorial'],
    is_featured: false
  },
  {
    video_id: 'v2',
    title: 'Video Two',
    author: 'Video Author B',
    author_id: 'vb2',
    view_count: 800,
    danmaku_count: 35,
    cover_url: 'https://example.com/cover2.png',
    upload_time: '2023-04-02T12:00:00Z',
    duration: '03:45',
    description: 'This is the second video.',
    tags: ['entertainment', 'comedy'],
    is_featured: true
  },
  {
    video_id: 'v3',
    title: 'Video Three',
    author: 'Video Author C',
    author_id: 'vc3',
    view_count: 600,
    danmaku_count: 25,
    cover_url: 'https://example.com/cover3.png',
    upload_time: '2023-04-03T12:00:00Z',
    duration: '04:20',
    description: 'This is the third video.',
    tags: ['documentary', 'history'],
    is_featured: false
  },
  {
    video_id: 'v4',
    title: 'Video Four',
    author: 'Video Author D',
    author_id: 'vd4',
    view_count: 400,
    danmaku_count: 15,
    cover_url: 'https://example.com/cover4.png',
    upload_time: '2023-04-04T12:00:00Z',
    duration: '02:10',
    description: 'This is the fourth video.',
    tags: ['review', 'technology'],
    is_featured: false
  },
  {
    video_id: 'v5',
    title: 'Video Five',
    author: 'Video Author E',
    author_id: 've5',
    view_count: 200,
    danmaku_count: 10,
    cover_url: 'https://example.com/cover5.png',
    upload_time: '2023-04-05T12:00:00Z',
    duration: '01:50',
    description: 'This is the fifth video.',
    tags: ['vlog', 'personal'],
    is_featured: true
  },

  // 新增的视频数据
  {
    video_id: 'v6',
    title: 'Video Six',
    author: 'Video Author F',
    author_id: 'vf6',
    view_count: 1500,
    danmaku_count: 75,
    cover_url: 'https://example.com/cover6.png',
    upload_time: '2023-04-06T12:00:00Z',
    duration: '06:00',
    description: 'This is the sixth video, featuring a collaboration.',
    tags: ['collaboration', 'music'],
    is_featured: true
  },
  {
    video_id: 'v7',
    title: 'Video Seven',
    author: 'Video Author G',
    author_id: 'vg7',
    view_count: 1200,
    danmaku_count: 60,
    cover_url: 'https://example.com/cover7.png',
    upload_time: '2023-04-07T12:00:00Z',
    duration: '04:50',
    description: 'This is the seventh video with a special guest.',
    tags: ['interview', 'celebrity'],
    is_featured: true
  },
  {
    video_id: 'v8',
    title: 'Video Eight',
    author: 'Video Author H',
    author_id: 'vh8',
    view_count: 300,
    danmaku_count: 20,
    cover_url: 'https://example.com/cover8.png',
    upload_time: '2023-04-08T12:00:00Z',
    duration: '02:40',
    description: 'This is the eighth video in a series.',
    tags: ['series', 'educational'],
    is_featured: false
  },
  {
    video_id: 'v9',
    title: 'Video Nine',
    author: 'Video Author I',
    author_id: 'vi9',
    view_count: 250,
    danmaku_count: 12,
    cover_url: 'https://example.com/cover9.png',
    upload_time: '2023-04-09T12:00:00Z',
    duration: '03:15',
    description: 'This is the ninth video with advanced content.',
    tags: ['advanced', 'tutorial'],
    is_featured: false
  },
  {
    video_id: 'v10',
    title: 'Video Ten',
    author: 'Video Author J',
    author_id: 'vj10',
    view_count: 1800,
    danmaku_count: 85,
    cover_url: 'https://example.com/cover10.png',
    upload_time: '2023-04-10T12:00:00Z',
    duration: '07:00',
    description: 'This is the tenth video and a special feature.',
    tags: ['feature', 'popular'],
    is_featured: true
  }
]);

</script>

<style scoped>
.home-scrollbar {
  height: calc(100vh - var(--header-height) - var(--main-padding) * 2);
}

.welcome {
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 20px;
}

.greeting {
  margin-right: 20px;
}

.info {
  display: flex;
  flex-direction: column;
}

.recommendation {
  margin-top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.more {
  font-size: 14px;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.recommend-card {
  padding: 20px;
}
</style>
