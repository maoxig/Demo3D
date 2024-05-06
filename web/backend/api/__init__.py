from fastapi import APIRouter
from .model_hander import model_router
api_router = APIRouter()
api_router.include_router(model_router)
