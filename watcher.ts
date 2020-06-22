if (import.meta.main) {
  const watcher = Deno.watchFs("/Users/ellapresso/Desktop/");
  for await (const event of watcher) {
    // 지정된 경로에서 일어난 파일 이벤트를 콘솔에서 알려줌.
    // 숨김파일까지 알려줌 ㅋㅋ
    console.log(">>>> event", event);
    // { kind: "create", paths: [ "/Users/mark/Desktop/foo.txt" ] }
  }
}
