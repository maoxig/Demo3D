import { defineStore } from 'pinia';

export const useWorkbenchStore = defineStore('workbench', {
    state: () => {
        return {
            items: [
                { value: 0, label: 'Step' },
                { value: 10, label: 'Learning Rate' },
                { value: 20, label: 'Type' },
                { value: 20, label: 'Seed' },
                // 添加更多项...
            ],
            showTextarea: false,
            badPromptValue: '',
        };
    },
    actions: {
        updateItems(newItems: any[]) {
            this.items = newItems;
        },
        updateShowTextarea(value: boolean) {
            this.showTextarea = value;
        },
        updateBadPromptValue(value: string) {
            this.badPromptValue = value;
        },
        // ... 其他 action 方法
    },
});
