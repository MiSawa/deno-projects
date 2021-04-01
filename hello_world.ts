import {
  jsx,
  serve, 
} from "https://deno.land/x/sift@0.1.6/mod.ts";

async function handleRequest(request: Request) {
  if (request.method === 'GET') {
    return jsx(
        <html>
          <head>
            <title>Deno test</title>
          </head>
          <body>
            Hello, deno!
          </body>
        </html>
    );
  }
}

serve({
  "/": handleRSequest,
});
console.log("http://localhost:8000/");
