# 这个文件定义了前端向后端模型处理的请求
from pydantic import BaseModel
from fastapi import File, UploadFile


class text_to_3d_request(BaseModel):
    prompt: str  # 正面提示词
    negative_promt: str | None  # 负面提示词
    type: str  # 类型
    seed: int = 0  # 随机种子
    is_textured: bool = True  # 是否产生纹理


class image_to_3d_request(BaseModel):
    prompt: str  # 正面提示词
    negative_promt: str | None  # 负面提示词
    type: str  # 类型
    seed: int = 0  # 随机种子
    is_textured: bool = True  # 是否产生纹理
    file: UploadFile  # 上传的文件

