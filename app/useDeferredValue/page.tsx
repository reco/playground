"use client";

import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";

import { useState, useDeferredValue } from "react";
import { createProducts, filterProducts } from "../../utils";

const products = createProducts();

function ProductListDeffered({ products }: { products: string[] }) {
  const defferedProducts = useDeferredValue(products);
  return (
    <ul className="p-0 m-0">
      {defferedProducts.map((product) => (
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
  const [filter, setFilter] = useState("");

  function handleKeyDown(evt: React.ChangeEvent<HTMLInputElement>) {
    setFilter(evt.target.value);
  }
  const filteredProducts = filterProducts(filter, products);
  return (
    <>
      <h1>useDeferredValue</h1>
      <h2>hook</h2>

      <p className="my-3 lh125">
        Returns a deferred version of the value that may “lag behind” it.
        <br />
        Very similar to useTransition. <br />
        <br />
        <Link href="https://www.youtube.com/watch?v=lDukIAymutM&t=300s">
          UseDeferredValue vs Default value
        </Link>
      </p>

      <SearchInput
        type="text"
        onChange={handleKeyDown}
        className="text-2xl font-light m-7"
      />
      <br />
      <br />
      {/* fast */}
      <ProductListDeffered products={filteredProducts} />
      {/* slow */}
      {/* <ProductList products={filteredProducts} /> */}
    </>
  );
}
