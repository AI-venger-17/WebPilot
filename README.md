
# 🌐 WebPilot — MCP Web Assistant

**WebPilot** is an intelligent browser automation assistant built using **Model Context Protocol (MCP)** and **Puppeteer**. It enables users to:

- 🔍 Perform web searches via **DuckDuckGo**
- 🌐 Open websites directly in a browser
- 📝 Summarize webpage content using an AI model

The frontend is built with **Streamlit**, while the backend is powered by **Node.js (Express)**, **Puppeteer** for browser control, and **Hugging Face Inference API** for summarization.

---

## 🚀 Features

| Feature        | Description                                                                |
|---------------|----------------------------------------------------------------------------|
| 🔎 Web Search | Enter any query to get search results via DuckDuckGo                      |
| 🌐 Open Site  | Open any website directly from the Streamlit app                          |
| 📝 Summarize  | Enter a URL to get a concise summary of the page content via Hugging Face |

---

## 🛠️ Tech Stack

- 🧠 **Model Context Protocol (MCP)**
- 🧑‍💻 **Node.js (Express)** – Backend server
- 🕸 **Puppeteer** – Browser automation
- 🧪 **puppeteer-extra-plugin-stealth** – Bypassing bot detection
- 🤗 **Hugging Face Inference API** – AI-based summarization
- 📄 **Streamlit** – Frontend UI

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Brain-Bot-17/WebPilot.git
cd WebPilot
```

### 2️⃣ Backend Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add:

```ini
HUGGINGFACE_API_KEY=your_actual_huggingface_token_here
```

Start the backend:

```bash
npx ts-node src/server.ts
```

### 3️⃣ Frontend Setup

Install Streamlit:

```bash
pip install streamlit
```

Run the frontend:

```bash
streamlit run app.py
```

---
