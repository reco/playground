"use client";

import { VisualWrapper } from "@/components/VisualWrapper";

export function Client() {
  console.log("*** Client Component");
  return (
    <VisualWrapper name="Server Component">
      <h1 className="pt-2 mt-2 text-3xl font-bold border-t-2 border-black/10">
        Client Component
      </h1>
      <p className="mt-2 italic">This is only beeing rendered on the server</p>
    </VisualWrapper>
  );
}
