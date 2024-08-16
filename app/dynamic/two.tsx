"use client";
import { VisualWrapper } from "@/components/VisualWrapper";

export default function ComponentTwo() {
  return (
    <VisualWrapper name="Component Two">
      <h1 className="pt-2 mt-2 text-3xl font-bold border-t-2 border-black/10">
        Component Two
      </h1>
      <p className="mt-2 italic">Component Two</p>
    </VisualWrapper>
  );
}
