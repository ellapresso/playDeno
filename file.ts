if (import.meta.main) {
  // function Deno.cwd(): string;
  console.log(Deno.cwd());
  // current working directory.
  // 실행은 : deno run --allow-read file.ts
  // 현재 디렉토리 위치를 가져오는 함수
  // function Deno.chdir(directory: string): void;
  Deno.chdir("/Users/ellapresso/Desktop"); // 파일의 위치 변경해줌.
  console.log(Deno.cwd());

  // function Deno.stat(path: string | URL): Promise<FileInfo>;
  // function Deno.statSync(path: string | URL): FileInfo;
  const fileInfo = await Deno.stat("./foo.txt"); // foo.txt가 있는지 확인
  console.log(fileInfo);

  if (fileInfo.isFile) {
    // function Deno.open(path: string | URL, options?: OpenOptions): Promise<File>;
    // function Deno.openSync(path: string | URL, options?: OpenOptions): File;
    const openedFile = await Deno.open("./foo.txt", { read: true }); // 권한이 있어야 열 수 있다.

    const buffer = new Uint8Array(fileInfo.size);

    // function Deno.read(rid: number, buffer: Uint8Array): Promise<number | null>;
    // function Deno.readSync(rid: number, buffer: Uint8Array): number | null;
    await Deno.read(openedFile.rid, buffer);

    console.log("[read buffer]", new TextDecoder().decode(buffer));

    // function Deno.close(rid: number): void;
    Deno.close(openedFile.rid);

    // function Deno.remove(path: string | URL, options?: RemoveOptions): Promise<void>;
    // function Deno.removeSync(path: string | URL, options?: RemoveOptions): void;
    await Deno.remove("./foo.txt");
  }

  // function Deno.create(path: string | URL): Promise<File>;
  // function Deno.createSync(path: string | URL): File;
  const file = await Deno.create("./foo.txt");

  const text = `Hello, Deno : ${new Date().toISOString()}`;
  const data = new TextEncoder().encode(
    text,
  );

  // function Deno.write(rid: number, data: Uint8Array): Promise<number>;
  // function Deno.writeSync(rid: number, data: Uint8Array): number;
  await Deno.write(file.rid, data);
  console.log("[write text]", text);

  // function Deno.close(rid: number): void;
  Deno.close(file.rid);
}
