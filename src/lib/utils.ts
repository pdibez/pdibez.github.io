import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let fullDate = new Date(date).toLocaleDateString("es-ar", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });  
  return fullDate;
}
