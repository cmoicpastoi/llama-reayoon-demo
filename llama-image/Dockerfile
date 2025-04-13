FROM python:3.10-slim

WORKDIR /app

RUN apt update && apt install -y git build-essential cmake curl && \
    pip install --upgrade pip

# Clone and build llama.cpp
RUN git clone https://github.com/ggerganov/llama.cpp.git && \
    cd llama.cpp && \
    make lib

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

CMD ["/app/entrypoint.sh"]