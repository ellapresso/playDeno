if (import.meta.main) {
  // btoa -> 글로벌함수 :  binary string encode
  // function btoa(s: string): string;
  console.log(`btoa("hello")`, btoa("hello")); // aGVsbG8=
  console.log(`btoa("Hello World!")`, btoa("Hello World!")); // SGVsbG8gV29ybGQh

  // function atob(s: string): string;
  console.log(`atob("aGVsbG8=")`, atob("aGVsbG8=")); // hello
  console.log(`atob("SGVsbG8gV29ybGQh")`, atob("SGVsbG8gV29ybGQh")); // Hello World!
}
