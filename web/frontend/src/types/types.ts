// types.ts
export interface Video {
    video_id: string;
    title: string;
    author: string;
    author_id: string;
    view_count: number;
    danmaku_count: number;
    cover_url: string;
    upload_time: string;
    duration: string;
    description: string;
    tags: string[];
    is_featured: boolean;
}

export interface Model {
    model_id: string;
    name: string;
    model_file: string;
    thumbnail_url: string;
    author: string;
    author_id: string;
    description: string;
    upload_time: string;
    view_count: number;
    like_count: number;
    tags: string[];
    is_featured: boolean;
}
