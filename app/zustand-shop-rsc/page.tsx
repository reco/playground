import { StoreInitializer } from "./StoreInitializer";

import Link from "next/link";
import { Cart } from "./cart";
import { Product } from "./product";
import { Add } from "./add";

export default function Page() {
  return (
    <>
      <section>
        <h1>zustand shop RSC</h1>
        <h2>state management</h2>
        <p>
          Reference{" "}
          <Link href="https://www.youtube.com/watch?v=OpMAH2hzKi8">
            Reference
          </Link>
        </p>
        <div className="flex items-start min-h-screen gap-2 py-2">
          <StoreInitializer name="Phones" price={100} />
          <Product
            description="The best phone money can buy."
            image="/iphone.jpg"
          />
          <Add />
          <Cart />
        </div>
      </section>
    </>
  );
}
