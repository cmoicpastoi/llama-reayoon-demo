#!/bin/bash
apt update && apt install -y curl &&
mkdir -p /models
echo "📦 모델 다운로드 중..."
curl -L -o /models/model.gguf https://huggingface.co/TheBloke/Llama-2-7B-GGUF/resolve/main/llama-2-7b.Q4_K_M.gguf
echo "🚀 서버 실행 중..."
python3 -m llama_cpp.server --model /models/model.gguf --n_ctx 512 --host 0.0.0.0
