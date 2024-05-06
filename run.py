import argparse
import json


def main():
    parser = argparse.ArgumentParser()

    parser.add_argument("--mode", type=str, help="启用模式，web/cmd", default="web")
    parser.add_argument("--text", type=str, help="模型输入文本", default="a robot")
    parser.add_argument(
        "--text_file", type=str, default=None, help="保存模型输入文本的文件"
    )

    args = parser.parse_args()
    if args.text is not None:
        text = [
            " ".join(args.text),
        ]
    elif args.text_file is not None:
        if args.text_file.endswith(".json"):
            with open(args.text_file, "r") as f:
                json_file = json.load(f)
                text = json_file
                text = [l.strip(".") for l in text]
        else:
            with open(args.text_file, "r") as f:
                text = f.readlines()
                text = [l.strip() for l in text]
    else:
        raise NotImplementedError

    #print(text)
    if args.mode == "web":
        print("Running in web mode.")
        import uvicorn
        import os
        import sys
        # 将 model 包所在的路径添加到 Python 模块搜索路径中
        sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "model")))
        uvicorn.run("web.backend.main:app",host="0.0.0.0",reload=True)
    else:
        print("Running in cmd mode.")

if __name__=="__main__":
    main()