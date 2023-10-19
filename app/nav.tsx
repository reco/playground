import { readdirSync } from "fs";
import Link from "next/link";

const directories = readdirSync("./app", { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((i) => i.name);

export default function Nav() {
  return (
    <nav>
      <Link href={`/`}>/</Link>
      {directories.map((dir) => (
        <Link key={dir} href={`./${dir}`}>
          {dir}
        </Link>
      ))}
    </nav>
  );
}
