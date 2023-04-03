import { CSS, render } from "https://deno.land/x/gfm/mod.ts";
import "https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check";

import regions from "./regions.ts";


export async function buildPortal() {
  const regionCode = Deno.env.get("DENO_REGION") || "localhost";
	const regionText = regions[regionCode] ? regions[regionCode] : regionCode;
  const CODE = render(await Deno.readTextFile("./code.md"));
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${CSS}
        </style>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
      <div class="bg-white">
      <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div class="px-6 lg:px-0 lg:pt-4">
            <div class="mx-auto max-w-2xl">
              <div class="max-w-lg">
              <div class="mb-2">
                <a href="#" class="inline-flex space-x-6">
                  <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">Service deployed in ${regionText}</span>
                </a>
              </div>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">OpenAI Proxy</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Unrestricted Access to OpenAI/ChatGPT - Your Key to Limitless Creativity!</p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a href="https://dash.deno.com/new?url=https://raw.githubusercontent.com/gptea-ai/link-to-openai/main/main.ts" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Self-Hosting</a>
                  <a href="https://github.com/gptea-ai/link-to-openai" class="text-sm font-semibold leading-6 text-gray-900">View on GitHub <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>
            <div class="shadow-lg md:rounded-3xl">
              <div class="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div>
                <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-950">
                      <div class="flex bg-gray-800/40">
                        <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div class="px-4 py-2 text-white">Code Examples</div>
                        </div>
                      </div>
                        <div data-color-mode="dark" data-dark-theme="dark" class="markdown-body">
                          ${CODE}
                          ${regionText}
                        </div>
                    </div>
                  </div>
                  <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
      </div>
    </div>
      </body>
    </html>
    `;

  return html;
}