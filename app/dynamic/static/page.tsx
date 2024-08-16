import Link from "next/link";
import ComponentOne from "../one";
import ComponentTwo from "../two";

export default function Page() {
  return (
    <>
      <section>
        <h1>Static Imports</h1>
        <h2>optimizations</h2>

        <Link href="../">Dynamic</Link>
        
        <br />
        <br />
        <br />
       
        <ComponentOne />
        <br />
        <br />
        
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}
