import Link from "next/link";
import { Server } from "./server";
import { Client } from "./client";

export default function Page() {
  return (
    <>
      <section>
        <h1>RSC</h1>
        <h2>React server components</h2>
        <br />
        <br />
        <br />
        <h3>Improved Performance</h3>
        <p>
          RSCs offload intensive tasks to the server, reducing the workload on
          the client. This helps create predictable webpages and improve Core
          Web Vitals like Largest Contentful Paint (LCP) and First Input Delay
        </p>

        <h3>Enhanced DX</h3>
        <p>
          Server Components can make development more straightforward by
          allowing developers to work with a familiar React API while taking
          advantage of server-side rendering when necessary.
        </p>

        <h3>SEO</h3>

        <h3>Enhanced security</h3>
        <p>
          Sensitive data like auth tokens or API keys used in RSCs are executed
          on the server and never exposed to the browser, preventing
          unintentional leaks
        </p>

        <br />
        <br />
        <br />
        <h3>Fazit</h3>
        <ul>
          <li>Smallest bundle size data transfered</li>
          <li>Only render on the server</li>
          <li>No client side hydration</li>
          <li>Top SEO</li>
          <li>No JS code</li>
        </ul>

        <br />
        <br />

        <Link
          href={
            "https://blog.webdevsimplified.com/2023-11/react-server-components/"
          }
        >
          Article
        </Link>

        <Server />
        <Client />
      </section>
    </>
  );
}
