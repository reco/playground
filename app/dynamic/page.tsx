import dynamic from "next/dynamic";
import Link from "next/link";

function Loading() {
  return <p style={{border: '10px solid red'}}>Loading...</p>;
}


const ComponentOne = dynamic(() => import("./one"), { ssr: true, loading: Loading });
const ComponentTwo = dynamic(() => import("./two"), { ssr: false, loading: Loading });



export default function Page() {
  return (
    <>
      <section>
        <h1>Dynamic Imports</h1>
        <h2>optimizations</h2>

        <p>Both components are loaded dynamically. </p>

        <Link href="/dynamic/static">Static</Link>
        <br />
        <br />
        <br />
       
        <ComponentOne />
        <br />
        <br />

        <ComponentTwo />
        
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}
