"use client";

import Link from "next/link";

import { SearchInput } from "@/components/SearchInput";
import { useTransition, useState } from "react";
import { createProducts, filterProducts } from "../../utils";

const products = createProducts();

function ProductList({ products }: { products: string[] }) {
  return (
    <ul className="p-0 m-0">
      {products.map((product) => (
        <li
          className="p-3 my-3 font-bold list-none bg-white shadow-md"
          key={product}
        >
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

      <p className="my-3 lh125">
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

      <SearchInput
        type="text"
        onChange={handleKeyDown}
        className="text-2xl font-light m-7"
      />
      {isPending ? <p>Searching...</p> : null}
      <br />
      <br />
      <ProductList products={filteredProducts} />
    </>
  );
}
