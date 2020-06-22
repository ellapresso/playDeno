function callback() {
  console.log("Welcome to Deno 🦕");
}

if (import.meta.main) {
  // function addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void;
  addEventListener("hello", callback);

  // function setInterval(cb: (...args: any[]) => void, delay?: number, ...args: any[]): number;
  setInterval(() => {
    // function dispatchEvent(event: Event): boolean;
    dispatchEvent(new Event("hello"));
  }, 1000);
  // function clearInterval(id?: number): void;

  // function setTimeout(cb: (...args: any[]) => void, delay?: number, ...args: any[]): number;
  setTimeout(() => {
    // function removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener("hello", callback);
  }, 2500);
  // function clearTimeout(id?: number): void;
}
