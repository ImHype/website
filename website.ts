import { listenAndServe } from "https://deno.land/std/http/server.ts";

console.log("Listening on http://localhost:8080");



const text = `
<html>
  <title>Joey</title>
  <head>
    <style>
      .h1 { backround: green}
    </style>
  </head>
  <body>
    <h1>Joey Website</h1>
  </body>
</html>
`;

await listenAndServe(":8080", (_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});