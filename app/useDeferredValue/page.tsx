"use client";

import Link from "next/link";

import { useState, useDeferredValue } from "react";
import { createProducts, filterProducts } from "../../utils";

const products = createProducts();

function ProductListDeffered({ products }: { products: string[] }) {
  const defferedProducts = useDeferredValue(products);
  return (
    <ul className="m0 p0">
      {defferedProducts.map((product) => (
        <li className="lstn p1 b my05" key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
}

function ProductList({ products }: { products: string[] }) {
  return (
    <ul className="m0 p0">
      {products.map((product) => (
        <li className="lstn p1 b my05" key={product}>
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

      <p className="lh125 my3">
        Returns a deferred version of the value that may “lag behind” it.
        <br />
        Very similar to useTransition. <br />
        <br />
        <Link href="https://www.youtube.com/watch?v=lDukIAymutM&t=300s">
          UseDeferredValue vs Default value
        </Link>
      </p>

      <input className="search" type="text" onChange={handleKeyDown} />
      <br />
      <br />
      {/* fast */}
      <ProductListDeffered products={filteredProducts} />
      {/* slow */}
      {/* <ProductList products={filteredProducts} /> */}
    </>
  );
}
