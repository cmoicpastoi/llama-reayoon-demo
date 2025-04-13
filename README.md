# LLaMA Reayoon Demo

## 배포 방법

```bash
kubectl apply -f deployment-api.yaml
kubectl apply -f service-api.yaml
kubectl apply -f deployment-web.yaml
kubectl apply -f service-web.yaml
```

## 접속

- API: `NodePort` 또는 `http://<NodeIP>:<Port>`
- 웹: `LoadBalancer` IP 또는 URL

## 설명

- 추론 서버: LLaMA 모델 curl로 HuggingFace에서 다운로드 후 API 제공
- 웹: Nginx + 정적 파일 (채팅 UI + 생성중 메시지)