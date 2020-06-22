//params 는 타입스크립트의 기본 lib에 내장되어 있는 아이들
function decorator(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  console.log("decorator");
}

class Welcome {
  @decorator
  public hello(): void {
    console.log("Welcome to Deno 🦕");
  }
}

function main() {
  new Welcome().hello();
}

if (import.meta.main) {
  main();
}
