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
        <div v-for="item in filteredItems" :key="item.id" class="item">
            {{ item.title }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: ['模型', '教程'],
            selectedTags: [],
            searchKeyword: '',
            items: [
                // 假设这是从服务器获取的数据
                { id: 1, title: '苹果模型', tags: ['模型'] },
                { id: 2, title: '建模课程', tags: ['教程'] },
                // ...更多数据
            ],
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                const hasTags = this.selectedTags.length === 0 || this.selectedTags.some(tag => item.tags.includes(tag));
                const hasKeyword = this.searchKeyword === '' || item.title.toLowerCase().includes(this.searchKeyword.toLowerCase());
                return hasTags && hasKeyword;
            });
        },
    },
    methods: {
        toggleTag(tag) {
            const index = this.selectedTags.indexOf(tag);
            if (index > -1) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
        },
        handleSearch() {
            // 可以在这里发送请求到后端进行搜索
        },
    },
};
</script>

<style scoped>
.tag {
    margin-right: 10px;
    cursor: pointer;
}

.search-input {
    margin: 20px 0;
}

.movie-item {
    margin-bottom: 10px;
}
</style>
