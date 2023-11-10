"use client";

import { useRef } from "react";
import { useStore } from "./store";

export function StoreInitializer({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  const initialized = useRef(false);
  if (!initialized.current) {
    // console.log("StoreInitializer", { name, price });
    useStore.setState({ name, price });
    initialized.current = true;
  }
  return null;
}
