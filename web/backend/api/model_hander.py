from pydantic import BaseModel
import os
from text_to_3d import generate_3d_model, preprocess_input

from fastapi import APIRouter, Response
from fastapi.responses import JSONResponse, FileResponse
from models import TextTo3dRequest

model_router = APIRouter()


@model_router.post("/generate_3d_model")
async def generate_model(text_to_3d_request: TextTo3dRequest):
    preprocessed_text = preprocess_input(text_to_3d_request.text)
    generated_3d_model = generate_3d_model(preprocessed_text)
    print(generated_3d_model.path)
    if not os.path.exists(generated_3d_model.path):
        return Response(content="Model not found.", status_code=404)

    return FileResponse(generated_3d_model.path, media_type="application/octet-stream")
