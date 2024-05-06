from PIL import Image, ImageDraw, ImageFont
from pydantic import BaseModel
from typing import List


def preprocess_input(input: str) -> str:
    """处理一些字符串，转换为适合的prompt"""
    return input


def generate_3d_model(preprocessed_text: str) -> str:
    """根据预处理后的prompt，调用模型，将模型保存到本地，并返回模型路径"""
    return "D:/project/AI+/Demo3D/asserts/exmple.dae"
