<p align="center">
  <br>
  <img src="https://img.icons8.com/fluency/96/chatbot.png" alt="GitHub Models Chat" width="120"/>
  <br>
  <h1 align="center">🤖 trygitmodel</h1>
  <p align="center">
    A lightweight CLI client for <strong>GitHub Models</strong> — chat with GPT-4.1 right from your terminal.
    <br>
    <sub>Built with OpenAI SDK · Zero config · Blazing fast</sub>
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js&style=flat-square" alt="Node">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-ff69b4?style=flat-square" alt="PRs">
</p>

---

## ✨ Features

- ⚡ **One-shot chat** — pass a prompt as CLI argument, get an instant answer
- 🎨 **Colorful terminal output** — clean, readable, and beautiful
- 📊 **Token usage stats** — see prompt / completion / total tokens after each query
- ⏱️ **Elapsed time** — know how fast the model responded
- 🛡️ **Graceful error handling** — structured error output when things go wrong
- 🔄 **Retry & timeout** — built-in retry logic (×2) and 30 s timeout

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/trygitmodel.git
cd trygitmodel

# 2. Install dependencies
npm install

# 3. Set your API key (edit trygitmodel.js or use env)
#    Open trygitmodel.js and change CONFIG.apiKey to your GitHub Models key

# 4. Run it!
node trygitmodel.js "What is the capital of France?"
```

---

## 📖 Usage

### Ask anything

```bash
node trygitmodel.js "Tell me about the history of the Great Wall"
```

### Use the default prompt

```bash
node trygitmodel.js
# → Uses the built-in default prompt
```

### Example output

```
====================================================
GitHub Models Chat
Model : openai/gpt-4.1
Prompt: 告诉我泰国芭提雅真的有个叫6巷的地方吗？
====================================================

========== AI ==========

是的，芭提雅确实有一个叫作"6巷"(Soi 6)的地方……

========================
Prompt Tokens     : 38
Completion Tokens : 432
Total Tokens      : 470
Elapsed           : 3682 ms
```

---

## ⚙️ Configuration

All settings live in the `CONFIG` object inside [`trygitmodel.js`](trygitmodel.js):

| Setting                | Value                        | Description                    |
|------------------------|------------------------------|--------------------------------|
| `apiKey`               | `"hello_world"`              | Your GitHub Models API key     |
| `baseURL`              | `https://models.github.ai/inference` | Inference endpoint    |
| `model`                | `openai/gpt-4.1`             | Model name                     |
| `timeout`              | `30000`                      | Request timeout (ms)           |
| `maxRetries`           | `2`                          | Max retry attempts             |
| `temperature`          | `0.7`                        | Response creativity            |
| `topP`                 | `1`                          | Nucleus sampling               |
| `maxCompletionTokens`  | `16384`                      | Max tokens in response         |

---

## 🧱 Project Structure

```
trygitmodel/
├── trygitmodel.js     # Main entry point
├── package.json       # Dependencies & metadata
├── yarn.lock          # Lockfile (Yarn)
├── .gitignore         # Ignored files
└── README.md          # This file
```

---

## 🛠️ Tech Stack

- **[OpenAI SDK](https://www.npmjs.com/package/openai)** — v6.48+
- **Node.js** — v18+ (ESM)
- **GitHub Models** — inference endpoint at `models.github.ai`

---

## 🤝 Contributing

PRs, ideas, and bug reports are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

[MIT](LICENSE) © 2024 trygitmodel

---

<p align="center">
  Made with ❤️ and Node.js
</p>
