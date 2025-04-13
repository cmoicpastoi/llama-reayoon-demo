document.getElementById("chat-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const prompt = document.getElementById("prompt").value;
  const chatBox = document.getElementById("chat-box");
  const loading = document.createElement("div");
  loading.className = "bubble you";
  loading.innerText = "⏳ 재윤이 생각 중...";
  chatBox.appendChild(loading);
  const res = await fetch("http://localhost:8000/completion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, n_predict: 50 })
  });
  const data = await res.json();
  loading.remove();
  const reply = document.createElement("div");
  reply.className = "bubble bot";
  reply.innerText = data.content;
  chatBox.appendChild(reply);
});