from PIL import Image, ImageDraw, ImageFont
from pydantic import BaseModel
from typing import List


class ThreeDModel(BaseModel):
    id: int
    path: str
    name: str
    prompt: str
    created_at: str
    description: str


def preprocess_input(input: str) -> str:
    """处理一些字符串，转换为适合的prompt"""
    return input


def generate_3d_model(preprocessed_text: str) -> ThreeDModel:
    """根据预处理后的prompt，调用模型，将模型保存到本地，并返回模型路径"""
    model_path = "D:/project/AI+/Demo3D/asserts/example.glb"

    model = ThreeDModel(
        id=1,
        path=model_path,
        prompt=preprocessed_text,
        name="Example Model",
        created_at="2022-01-01",
        description="This is an example 3D model.",
    )

    return model
