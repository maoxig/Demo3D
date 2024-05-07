# 这个文件定义了前端向后端模型处理的请求
from pydantic import BaseModel
from fastapi import File, UploadFile
from text_to_3d import GenerationParams


class TextTo3dRequest(GenerationParams):
    pass


class ImageTo3dRequest(GenerationParams):
    pass
