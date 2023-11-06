const DEBUG = true;

export function VisualWrapper({
  children,
  rsc = false,
  name,
}: {
  children: React.ReactNode;
  rsc?: boolean;
  name: string;
}) {
  if (!DEBUG) {
    return <div>{children}</div>;
  }

  const color = rsc
    ? "before:bg-gradient-to-br before:from-black/80 before:via-black/80 before:to-black/10"
    : "before:bg-gradient-to-br before:from-rose-500/90 before:via-rose-500/90 before:to-pink-500/20";

  return (
    <div
      className={`
      ${color} before:rounded-sm before:content-[''] before:absolute before:-z-10 before:-top-4 before:-right-[2px] before:-bottom-[2px] before:-left-[2px]
      m-[2px] mt-4 relative bg-white
      `}
    >
      <div
        className={`absolute bottom-full text-[10px] tracking-wide text-white uppercase rounded-sm ml-1
        `}
      >
        {name}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}
