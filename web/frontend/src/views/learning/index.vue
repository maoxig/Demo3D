<template>
    <div>
        <!-- 标签筛选 -->
        <el-tag v-for="tag in tags" :key="tag" :type="selectedTags.includes(tag) ? '' : 'info'" @click="toggleTag(tag)"
            class="tag">
            {{ tag }}
        </el-tag>

        <!-- 搜索框 -->
        <el-input placeholder="请输入搜索关键词" v-model="searchKeyword" class="search-input" @input="handleSearch"></el-input>

        <!-- 模型、教程列表 -->
        <el-card class="recommendation">
            <div class="header">
                <h2>推荐</h2>
                <el-button type="text" class="more">更多</el-button>
            </div>
            <div class="content">
                <el-card class="recommend-card" v-for="item in recommendations" :key="item.id">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                </el-card>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const tags = ref(['模型', '教程', '工具', '资源']);
const selectedTags = ref(['模型', '教程']);
const searchKeyword = ref('');
const handleSearch = (value: string) => {
    console.log(value);
};

const toggleTag = (tag: string) => {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter((item) => item !== tag);
    } else {
        selectedTags.value.push(tag);
    }
};
const recommendations = ref([
    { id: 1, title: '推荐内容1', subtitle: '副标题1' },
    { id: 2, title: '推荐内容2', subtitle: '副标题2' },
    { id: 3, title: '推荐内容3', subtitle: '副标题3' },
    { id: 4, title: '推荐内容4', subtitle: '副标题4' },
    { id: 5, title: '推荐内容5', subtitle: '副标题5' },
    { id: 6, title: '推荐内容6', subtitle: '副标题6' },
    { id: 7, title: '推荐内容7', subtitle: '副标题7' },
    { id: 8, title: '推荐内容8', subtitle: '副标题8' },
    { id: 9, title: '推荐内容9', subtitle: '副标题9' },
    { id: 10, title: '推荐内容10', subtitle: '副标题10' },
    { id: 11, title: '推荐内容11', subtitle: '副标题11' },
    { id: 12, title: '推荐内容12', subtitle: '副标题12' },
    { id: 13, title: '推荐内容13', subtitle: '副标题13' },
    { id: 14, title: '推荐内容14', subtitle: '副标题14' },
    { id: 15, title: '推荐内容15', subtitle: '副标题15' },
    { id: 16, title: '推荐内容16', subtitle: '副标题16' },
    { id: 17, title: '推荐内容17', subtitle: '副标题17' },
    { id: 18, title: '推荐内容18', subtitle: '副标题18' },
    { id: 19, title: '推荐内容19', subtitle: '副标题19' },
    { id: 20, title: '推荐内容20', subtitle: '副标题20' },
    { id: 21, title: '推荐内容21', subtitle: '副标题21' },
    { id: 22, title: '推荐内容22', subtitle: '副标题22' },
    { id: 23, title: '推荐内容23', subtitle: '副标题23' },
    { id: 24, title: '推荐内容24', subtitle: '副标题24' },
    { id: 25, title: '推荐内容25', subtitle: '副标题25' },
    { id: 26, title: '推荐内容26', subtitle: '副标题26' },
    { id: 27, title: '推荐内容27', subtitle: '副标题27' },
    { id: 28, title: '推荐内容28', subtitle: '副标题28' },
    { id: 29, title: '推荐内容29', subtitle: '副标题29' },
    { id: 30, title: '推荐内容30', subtitle: '副标题30' },
    { id: 28, title: '推荐内容28', subtitle: '副标题28' },
    { id: 29, title: '推荐内容29', subtitle: '副标题29' },
    { id: 30, title: '推荐内容30', subtitle: '副标题30' },
]);
</script>

<style scoped>
.tag {
    margin-right: 10px;
    cursor: pointer;
}

.search-input {
    margin: 20px 0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.more {
    font-size: 14px;
}
</style>
