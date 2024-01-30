import { VisualWrapper } from "@/components/VisualWrapper";

export function Server() {
  console.log("*** Server Component");
  return (
    <VisualWrapper rsc name="Server Component">
      <h1 className="pt-2 mt-2 text-3xl font-bold border-t-2 border-black/10">
        Server Component
      </h1>
      <p className="mt-2 italic">This is only beeing rendered on the server</p>
    </VisualWrapper>
  );
}
