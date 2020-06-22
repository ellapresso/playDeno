// import { listenAndServe } from "https://deno.land/std/http/server.ts"; // raw로,,,
import { listenAndServe } from "https://raw.githubusercontent.com/denoland/deno/master/std/http/server.ts";

if (import.meta.main) {
  listenAndServe({
    hostname: "localhost",
    port: 8080,
  }, (req) => {
    console.log(req);

    if (req.url === "/") {
      req.respond({
        status: 200,
        body: JSON.stringify({ hello: "Deno" }),
      });

      return;
    }

    req.respond({ status: 404 });
  });
}
