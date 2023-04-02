# OpenAI/ChatGPT Proxy Via Deno

## Usage

Using OpenAI/ChatGPT official npm package:

```diff
import { Configuration } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
+ basePath: "https://linkai.deno.dev/v1",
});
```

Using OpenAI/ChatGPT official Python package:

```diff
  import openai

  openai.api_key = os.getenv("OPENAI_API_KEY")
+ openai.api_base = "https://linkai.deno.dev/v1"
```

## Local Dev

```bash
deno run --allow-net --allow-read --allow-env --watch main.ts
```

## Deployment
Click this [link][1] to quickly deploy to Deno Deploy with one click.

[1]: https://dash.deno.com/new?url=https://raw.githubusercontent.com/gptea-ai/link-to-openai/main/main.ts