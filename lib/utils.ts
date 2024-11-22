import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { a, b }: { a: string; b: number } = ((list: string) => {
  if (list === "hello") {
    return { a: "hello", b: 42 };
  }
  return { a: "hello", b: 42 };
})();
