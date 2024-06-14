import { useRef } from "react";

export default function useElementRefs<T>() {
  const elementRefs = useRef<Partial<Record<keyof T, HTMLElement | null>>>({});
  return elementRefs;
}
