import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

export function b64e(str) {
  return encodeURIComponent(Buffer.from(str.replace(validUrlRegex, "").trim()).toString('base64'));
}

export function b64d(encoded_str) {
  return Buffer.from(decodeURIComponent(encoded_str), 'base64').toString("utf-8");
}