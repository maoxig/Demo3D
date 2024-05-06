# 主文件，用于启动后端

from fastapi import FastAPI,APIRouter

from .api import api_router

app = FastAPI()
app.include_router(api_router,prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1")
