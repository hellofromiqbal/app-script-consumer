export {};

declare global {
  interface Window {
    Testing: new () => {
      hello: () => string;
      world: () => string;
      sum: (a: number, b: number) => number;
    };
  }
}
