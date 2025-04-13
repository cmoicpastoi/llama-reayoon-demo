FROM python:3.10-slim

WORKDIR /app

# 필요한 시스템 패키지 설치
RUN apt update && apt install -y \
    git \
    build-essential \
    cmake \
    curl \
    libcurl4-openssl-dev \
    python3-dev \
    pkg-config \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

# llama.cpp 빌드
RUN git clone https://github.com/ggerganov/llama.cpp.git && \
    cd llama.cpp && \
    git checkout master && \
    mkdir build && cd build && \
    cmake .. -DLLAMA_BUILD_SERVER=on && \
    make -j && \
    make install

# 파이썬 의존성 설치
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# 엔트리포인트
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

CMD ["/app/entrypoint.sh"]

