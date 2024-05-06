from pydantic import BaseModel
import os
from text_to_3d import generate_3d_model, preprocess_input

from fastapi import APIRouter, Response
from fastapi.responses import JSONResponse, FileResponse

model_router = APIRouter()


class TextRequest(BaseModel):
    text: str


@model_router.post("/generate_3d_model")
async def generate_model(text_request: TextRequest):
    preprocessed_text = preprocess_input(text_request.text)
    generated_3d_model = generate_3d_model(preprocessed_text)
    print(generated_3d_model.path)
    if not os.path.exists(generated_3d_model.path):
        return Response(content="Model not found.", status_code=404)

    return FileResponse(generated_3d_model.path, media_type="application/octet-stream")


