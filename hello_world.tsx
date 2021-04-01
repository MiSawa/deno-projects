import {
  jsx,
  serve, 
} from "https://deno.land/x/sift@0.1.6/mod.ts";

async function handleRequest(request: Request) {
  console.log(request.method);
  return jsx(
      <html>
        <head>
          <title>Deno test</title>
        </head>
        <body>
          Hello, deno!
        </body>
      </html>,
  );
}

serve({
  "/": handleRequest,
});
console.log("http://localhost:8000/");
