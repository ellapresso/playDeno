// function queueMicrotask(func: Function): void;

if (import.meta.main) {
  console.log("Before enqueueing the microtask - 1");
  queueMicrotask(() => {
    console.log("The microtask has run. - 3");
  });
  console.log("After enqueueing the microtask - 2");
}
