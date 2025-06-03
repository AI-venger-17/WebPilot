# 🌐 WebPilot — AI-Powered Web Assistant

WebPilot is a cutting-edge browser automation tool driven by an AI Agent that leverages the **Model Context Protocol (MCP)** and **Puppeteer** for seamless web interactions. Powered by **TypeScript** on the backend and **Streamlit** on the frontend, WebPilot integrates the **Hugging Face Inference API** with the `bart-large-cnn` model to deliver intelligent webpage summarization, making it a robust solution for web navigation and content analysis.

---

## 🚀 Key Features

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| 🔎 Web Search     | Effortlessly search the web using DuckDuckGo with AI-driven automation.     |
| 🌐 Open URL       | Directly navigate to any website via a user-friendly Streamlit interface.   |
| 📝 Summarize URL  | Generate concise summaries of webpages using Hugging Face's `bart-large-cnn`. |

---

## 🛠️ Tech Stack

- 🧠 **AI Agent with MCP**: Orchestrates intelligent browser automation and task execution.  
- 🤗 **Hugging Face Inference API (`bart-large-cnn`)**: Powers advanced text summarization for webpage content.  
- 🕸 **Puppeteer + Stealth Plugin**: Enables stealthy, human-like browser interactions to bypass bot detection.  
- 🧑‍💻 **Node.js (Express) + TypeScript**: Robust backend for reliable API and automation logic.  
- 📄 **Streamlit**: Intuitive frontend for seamless user interaction.  

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

Create a .env file in the root directory:

```bash
HUGGINGFACE_API_KEY=your_huggingface_token
```
⚠️ Ensure your Hugging Face token has Inference API access.

Start the backend:

```bash
npx ts-node src/server.ts
```

### 3️⃣ Frontend Setup

Install dependencies:

```bash
pip install streamlit requests
```

Run the frontend:

```bash
streamlit run app.py
```

The Streamlit interface will open, offering three options:
### 🔍 Search a Query, 🌐 Open a URL, 📝 Summarize a URL.

## 🔍 Feature Details
**🔎 Search a Query**
Uses Puppeteer with puppeteer-extra-plugin-stealth to perform DuckDuckGo searches.
The agent constructs a query URL (e.g., https://duckduckgo.com/?q=your+query), navigates to it, and mimics human behavior for undetectable browsing.

**🌐 Open a URL**
Navigates directly to any provided URL in a Chromium browser using Puppeteer.
Custom user agents and stealth plugins ensure smooth and compatible navigation.

**📝 Summarize a URL**
Loads the webpage and extracts the first 2,000 characters of visible text from <body>.
This text is sent to Hugging Face’s bart-large-cnn model via API, returning a clean summary.
Includes error handling for reliable results.

**🌟 Why WebPilot?**
🤖 AI-Driven: AI Agent with MCP intelligently manages web automation tasks.

**✂️ Hugging Face Integration:** Delivers concise, high-quality summaries via bart-large-cnn.

**🕵️ Stealth Automation:** Undetectable browser activity using Puppeteer with stealth plugins.

**🧑‍💻 TypeScript Backend:** Scalable, type-safe, and maintainable codebase.

**🎨 Streamlit Frontend:** Clean and user-friendly UI for interaction.

## Made with ❤️ by Brain-Bot-17