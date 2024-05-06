from pydantic import BaseModel
import os
from model import generate_3d_model, preprocess_input

from fastapi import APIRouter
model_router = APIRouter()

class TextRequest(BaseModel):
    text: str


@model_router.post("/generate_3d_model/")
async def generate_model(text_request: TextRequest):
    preprocessed_text = preprocess_input(text_request.text)
    generated_3d_model = generate_3d_model(preprocessed_text)
    return {"status": "success", "model_file_path": generated_3d_model}
