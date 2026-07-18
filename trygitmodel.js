import OpenAI from "openai";
import process from "node:process";
import { performance } from "node:perf_hooks";

// =======================================================
// Configuration
// =======================================================

const CONFIG = Object.freeze({
  apiKey: "hello_world", // 改成你的密钥
  baseURL: "https://models.github.ai/inference",
  model: "openai/gpt-4.1",

  timeout: 30000,
  maxRetries: 2,

  temperature: 0.7,
  topP: 1,
  maxCompletionTokens: 16384,
});

const SYSTEM_PROMPT =
  "You are a helpful AI assistant. Always answer in Chinese unless the user requests another language.";

const USER_PROMPT =
  process.argv.slice(2).join(" ") ||
  "告诉我泰国芭提雅真的有个叫6巷的地方吗？";

// =======================================================
// Colors
// =======================================================

const COLOR = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

// =======================================================
// Client
// =======================================================

const client = new OpenAI({
  apiKey: CONFIG.apiKey,
  baseURL: CONFIG.baseURL,
  timeout: CONFIG.timeout,
  maxRetries: CONFIG.maxRetries,
});

// =======================================================
// Main
// =======================================================

async function main() {
  console.log(
    `${COLOR.cyan}====================================================${COLOR.reset}`
  );
  console.log(`${COLOR.green}GitHub Models Chat${COLOR.reset}`);
  console.log(`Model : ${CONFIG.model}`);
  console.log(`Prompt: ${USER_PROMPT}`);
  console.log(
    `${COLOR.cyan}====================================================${COLOR.reset}\n`
  );

  const start = performance.now();

  const response = await client.chat.completions.create({
    model: CONFIG.model,

    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: USER_PROMPT,
      },
    ],

    temperature: CONFIG.temperature,
    top_p: CONFIG.topP,
    max_completion_tokens: CONFIG.maxCompletionTokens,
  });

  const elapsed = performance.now() - start;

  const text =
    response.choices?.[0]?.message?.content ??
    "(模型没有返回任何内容)";

  console.log(`${COLOR.green}========== AI ==========${COLOR.reset}\n`);
  console.log(text);

  console.log(`\n${COLOR.green}========================${COLOR.reset}`);

  if (response.usage) {
    console.log(
      `Prompt Tokens     : ${response.usage.prompt_tokens}`
    );
    console.log(
      `Completion Tokens : ${response.usage.completion_tokens}`
    );
    console.log(
      `Total Tokens      : ${response.usage.total_tokens}`
    );
  }

  console.log(`Elapsed           : ${elapsed.toFixed(0)} ms`);
}

// =======================================================
// Error Handling
// =======================================================

main().catch((err) => {
  console.error(`\n${COLOR.red}Request Failed${COLOR.reset}`);

  if (err.status) {
    console.error("HTTP Status :", err.status);
  }

  if (err.code) {
    console.error("Code        :", err.code);
  }

  if (err.error?.message) {
    console.error("Message     :", err.error.message);
  } else if (err.message) {
    console.error("Message     :", err.message);
  }

  if (err.response) {
    console.error("Response    :", err.response);
  }

  process.exit(1);
});
