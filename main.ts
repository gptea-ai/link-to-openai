import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { buildPortal } from "./render.ts";

const OPEN_AI_API_HOST = "api.openai.com";

async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return new Response(await buildPortal(), {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  }
  
  url.host = OPEN_AI_API_HOST;
  return await fetch(url, request);
}

serve(handler);