import { BufWriter, BufReader } from "https://deno.land/std/io/bufio.ts";
import { writeResponse, readRequest } from "https://deno.land/std/http/_io.ts";

if (import.meta.main) {
  const hostname = "0.0.0.0";
  const port = 8080;
  const listener = Deno.listen({ hostname, port });
  console.log(`Listening on ${hostname}:${port}`);
  for await (const conn of listener) {
    const reader = new BufReader(conn);
    const writer = new BufWriter(conn);

    const request = await readRequest(conn, reader);

    if (request === null) break;

    console.log(request); // server request

    await writeResponse(writer, {
      status: 200,
      body: new TextEncoder().encode(JSON.stringify({ hello: "Deno" })),
    });
    // body를 보낼때 바로 보낼수 없음.
    conn.close();
  }
}
