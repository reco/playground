import { StoreInitializer } from "./StoreInitializer";

import Link from "next/link";
import { Cart } from "./cart";
import { Product } from "./product";
import { Add } from "./add";

export default function Page() {
  // Data we would fetch on the server
  const data = {
    name: "iPhone",
    price: 100,
    colors: ["red", "blue", "green"], // data only on the server
  };

  return (
    <>
      {/* Data we need on the clinet */}
      <StoreInitializer name={data.name} price={data.price} />
      <section>
        <h1>zustand shop RSC</h1>
        <h2>state management</h2>
        <p>
          Reference{" "}
          <Link href="https://www.youtube.com/watch?v=OpMAH2hzKi8">
            Reference
          </Link>
        </p>
        <div className="flex items-start gap-2 py-2">
          <Product
            description={`${
              data.name
            } is the best phone money can buy. Its only $${
              data.price
            } today. You can buy it in the following colors: ${data.colors.join(
              ", "
            )}.`}
            image="/iphone.jpg"
          />
          <Add />
          <Cart />
        </div>
        <p className="py-8">
          For the CCs We create a StoreInitializer which gets the data passed
          from the server component. Unfortunatley all CC will re-render once on
          the client.
          <br />
          This way we can pick an choose what data the client store has. No need
          to send the whole store down the wire.
        </p>
      </section>
    </>
  );
}
