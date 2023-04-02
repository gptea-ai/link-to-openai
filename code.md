```typescript
// typescript
import { Configuration } from "openai";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  basePath: "https://linkai.deno.dev/v1",
});


// python
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_base = "https://linkai.deno.dev/v1"

```