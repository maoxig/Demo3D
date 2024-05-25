import { defineStore } from 'pinia';
import api from '@/api'
export const useWorkbenchStore = defineStore('workbench', {
    state: () => {
        return {
            text: '',
            prompt: '',
            negative_prompt: '',
            step: 200,
            seed: 0,
            type: 'history',
            learning_rate: 0.01,
            is_textured: true,
            modelUrl: ''
        };
    },
    actions: {
        updateNegativePrompt(value: string) {
            this.negative_prompt = value;
        },
        setText(value: string) {
            this.text = value
        },
        buildRequestPayload() {
            // 构建请求 payload，与后端保持一致
            return {
                text: this.text,
                prompt: this.prompt,
                negative_prompt: this.negative_prompt,
                step: this.step,
                seed: this.seed,
                type: this.type,
                learning_rate: this.learning_rate,
                is_textured: this.is_textured,
            };
        },
        async sendRequest() {
            // 使用 store 中的方法构建请求 payload
            const payload = this.buildRequestPayload();
            // 发送请求
            try {
                const response = await api.generate3DModel(payload);
                // 处理响应
                const modolUrl =URL.createObjectURL(response)

                
                this.modelUrl = modolUrl;
                console.log(this.modelUrl)
            } catch (error) {
                // 错误处理
                console.error(error);
            }
        },
        // ... 其他 action 方法
    },
})
