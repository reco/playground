"use client";
import { VisualWrapper } from "@/components/VisualWrapper";

export default function ComponentOne() {
  return (
    <VisualWrapper name="Component One">
      <h1 className="pt-2 mt-2 text-3xl font-bold border-t-2 border-black/10">
        Component One
      </h1>
      <p className="mt-2 italic">Component One</p>
    </VisualWrapper>
  );
}
