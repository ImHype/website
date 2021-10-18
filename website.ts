import { listenAndServe } from "https://deno.land/std/http/server.ts";

await listenAndServe(":8080", (_req) => {/* .. */});