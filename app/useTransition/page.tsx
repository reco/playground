"use client";

import Link from "next/link";

import { useTransition, useState } from "react";
import { createProducts, filterProducts } from "../../utils";

const products = createProducts();

function ProductList({ products }: { products: string[] }) {
  return (
    <ul className="m0 p0">
      {products.map((product) => (
        <li className="lstn p1 b my05 b-fff" key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("");

  function handleKeyDown(evt: React.ChangeEvent<HTMLInputElement>) {
    // fast
    startTransition(() => {
      setFilter(evt.target.value);
    });

    // slow
    // setFilter(evt.target.value);
  }
  const filteredProducts = filterProducts(filter, products);
  return (
    <>
      <h1>useTransition</h1>
      <h2>hook</h2>

      <p className="lh125 my3">
        The useTransition hook allows us to specify some state updates as not as
        important. These state updates will be executed in parallel with other
        state updates, but the rendering of the component will not wait for
        these less important state updates.
        <br />
        <br />
        <Link href="https://www.youtube.com/watch?v=lDukIAymutM&t=300s">
          UseTransition vs Default value
        </Link>
      </p>

      <input
        className="search"
        type="text"
        placeholder="..."
        onChange={handleKeyDown}
      />
      {isPending ? <p>Searching...</p> : null}
      <br />
      <br />
      <ProductList products={filteredProducts} />
    </>
  );
}
