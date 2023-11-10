import { StoreInitializer } from "./StoreInitializer";

import Link from "next/link";
import { Cart } from "./cart";
import { Product } from "./product";
import { Add } from "./add";
import { useStore } from "./store";

export default function Page() {
  const data = {
    name: "iPhone",
    price: 100,
  };

  useStore.setState(data);

  return (
    <>
      <StoreInitializer name="Phones" price={100} />
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
            description="The best phone money can buy."
            image="/iphone.jpg"
          />
          <Add />
          <Cart />
        </div>
        <p className="py-8">
          For SCs, we set the state with `useStore.setState(data)`.
          <br />
          This data will be availabe on the client!
          <br />
          <br />
          For the CCs We create a StoreInitializer CC which gets the data passed
          from the server component. Unfortunatley all CC will render once on
          the client.
          <br />
          This way we can pick an choose what data the client store has. No need
          to send the whole store down the wire.
        </p>
      </section>
    </>
  );
}
