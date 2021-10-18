import { listenAndServe } from "https://deno.land/std/http/server.ts";

console.log("Listening on http://localhost:8080");
await listenAndServe(":8080", (_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});