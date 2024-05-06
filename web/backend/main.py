# 主文件，用于启动后端

from fastapi import FastAPI,APIRouter
from fastapi.middleware.cors import CORSMiddleware
from .api import api_router

app = FastAPI()
app.include_router(api_router,prefix="/api")
# 添加CORS中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有源进行跨域请求，也可以指定特定的源
    allow_methods=["*"],  # 允许所有HTTP方法
    allow_headers=["*"],  # 允许所有标头
)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1")
