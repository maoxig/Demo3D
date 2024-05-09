from pydantic import BaseModel
from typing import List


class ThreeDModel(BaseModel):
    """描述生成的3D建模

    Args:
        id (int):产生的3D模型标识
        path (str):3D建模结果路径
        name (str):3D建模命名
        prompt (str):提示词
        created_at (str): 创建时间
        description (str):描述
    """

    id: int
    path: str
    name: str
    prompt: str = ""
    created_at: str
    description: str = ""


class GenerationParams(BaseModel):
    """这个类用来描述模型输入条件

    Args:
        text (str): 输入文本
        prompt (str, optional): 提示词
        negative_prompt (str , optional): 负面提示词
        step (int, optional): 迭代步数.
        seed (int, optional): 随机种子.
        type (str, optional): 类型.
        is_textured (bool, optional): 是否有纹理.
    """

    text: str  # 输入文本
    prompt: str = ""  # 提示词
    negative_promt: str = ""  # 负面提示词
    step: int = 200  # 迭代步数
    seed: int = 0  # 随机种子
    type: str = "history"  # 类型
    is_textured: bool = True  # 是否有纹理


def preprocess_input(input: str) -> str:
    """处理一些字符串，转换为适合的prompt"""
    return input


def generate_3d_model(preprocessed_text: str) -> ThreeDModel:
    """根据预处理后的prompt，调用模型，返回一个3D建模类
    Args:
        preprocessed_text (str): 预处理后的prompt
    Returns:
        ThreeDModel: 3D建模类,确保分配了id、name、path等
    """

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
