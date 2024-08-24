import { defineStore } from 'pinia';
export const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            VideoCardLimit: 5,
        };
    },
    actions: {

        setVideoCardLimit(value: number) {
            this.VideoCardLimit = value;
        },
        getVideoCardLimit() {
            return this.VideoCardLimit;
        }
        // ... 其他 action 方法
    },
})
