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

## Getting Started With Local Development

```bash
deno run --allow-net --allow-read --allow-env --watch main.ts
```

## Self-Hosting

Use `DENO_REGION` to serve region-specific content in your Deno projects, which is useful for users in different parts of the world. Check out the documentation at https://deno.com/deploy/docs/projects#preset-variables.

> Check the list of supported countries at https://platform.openai.com/docs/supported-countries/supported-countries-and-territories and select those regions for your project to ensure your users can access OpenAI features.

Click this [link][1] to quickly deploy to Deno Deploy with one click.

[1]: https://dash.deno.com/new?url=https://raw.githubusercontent.com/gptea-ai/link-to-openai/main/main.ts