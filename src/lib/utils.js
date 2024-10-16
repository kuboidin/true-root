import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}