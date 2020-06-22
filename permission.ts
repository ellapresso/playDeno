async function print() {
  const file = await Deno.open("/Users/ellapresso/Desktop/foo.txt");
  const buffer = new Uint8Array(100);
  await Deno.read(file.rid, buffer);
  const text = new TextDecoder().decode(buffer);
  console.log(text);
  Deno.close(file.rid);
}

if (import.meta.main) {
  const status = await Deno.permissions.query({ name: "read" });
  if (status.state !== "granted") {
    throw new Error("need read permission");
  }
  console.log("read permission exist");
  await print();
  await Deno.permissions.revoke({ name: "read" });
  await print();
}
