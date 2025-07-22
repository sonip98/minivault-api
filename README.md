# 🧠 MiniVault API

> **ModelVault Take-Home Project** — A local-first developer tool that runs LLMs completely offline.

---

## 🚀 Overview

MiniVault API is a lightweight, local REST API that simulates a core ModelVault feature: **running an LLM locally to respond to user prompts** — entirely offline.

This project uses:

* 🟢 Node.js with [Fastify](https://fastify.dev/)
* 🧠 [Ollama](https://ollama.com/) to run local LLMs (e.g., Mistral)
* 🐳 Optional Docker support
* 🧾 Disk logging for every interaction

---
## 🎥 Demo

[Watch the MiniVault API demo video](https://screenrec.com/share/MqZacGF4Qh)

## ✅ Features

* `POST /generate` → Takes a prompt, returns an LLM-generated response.
* Logs all prompts and responses to `./logs/interactions.log`.
* Uses Ollama locally, no internet/cloud LLMs involved.
* Clean modular structure.
* Optional: Command-line CLI.

---

## 📦 Requirements

* Node.js `>=18`
* [Ollama](https://ollama.com/) installed and running locally
* Mistral model pulled (`ollama run mistral`)
* Optional: Docker Desktop (for containerized setup)

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/sonip98/minivault-api.git
cd minivault-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Ensure Ollama is running locally

* [Install Ollama](https://ollama.com/download)
* Start Ollama:

```bash
ollama serve  # Or just `ollama run mistral` to auto-start server
```

* Pull the Mistral model:

```bash
ollama pull mistral
```

> Ollama will serve the model on `http://localhost:11434`

---

### 4. Start the API server

```bash
npm start
```

By default, the server runs on **`http://localhost:3000`**

---

## 🎯 API Usage

### POST `/generate`

Send a prompt and get a response from the local model.

#### Request:

```bash
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is local-first AI?"}'
```

#### Response:

```json
{
  "response": "Local-first AI means that the artificial intelligence model runs on your local device rather than in the cloud, ensuring privacy and faster performance."
}
```

> 🔁 Actual response varies depending on model and prompt.

---

## 📁 File Structure

```
minivault-api/
├── routes/
│   └── generate.js        # POST /generate endpoint
├── utils/
│   ├── ollama.js          # Ollama API integration
│   └── logger.js          # Log prompt/response to disk
├── logs/
│   └── prompts.log   # Request/response logs
├── .env                 
├── cli.js                 # (Optional) CLI interface
├── Dockerfile             # Docker support
├── index.js               # Fastify app entry point
├── package.json
└── README.md
```

---

## 🐳 Optional: Run via Docker

Build:

```bash
docker build -t minivault-api .
```

Run:

```bash
docker run -p 3000:3000 minivault-api
```

> ⚠️ Ollama must be installed and running **on the host machine**.
> Inside Docker, the API uses `host.docker.internal:11434` to reach Ollama.

---

## ⚙️ Configuration

Create a `.env` file in the project root:

```env
OLLAMA_URL=http://localhost:11434
```

> If using Docker, change to:
> `OLLAMA_URL=http://host.docker.internal:11434`

## 🔧 CLI Usage

Run a prompt from the terminal:

```bash
node cli.js "What is local-first AI?"
```

---

## 💡 Tradeoffs / Design Notes

* Ollama runs as a separate service, enabling flexibility and modularity.
* Responses depend on actual LLM completions; no hardcoded stubs.
* Docker usage requires special handling (`host.docker.internal`) for Ollama access.

---

## 🙌 Thank You

This project demonstrates a real-world approach to local-first AI APIs.
Appreciate your time in reviewing!
