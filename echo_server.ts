if (import.meta.main) {
  const hostname = "0.0.0.0";
  const port = 8080;
  const listener = Deno.listen({ hostname, port });
  console.log(`Listening on ${hostname}:${port}`);
  for await (const conn of listener) { // 리스너가 대기하고있다가, 연결되면 알려줌
    console.log(conn);
    Deno.copy(conn, conn);
  }
}
