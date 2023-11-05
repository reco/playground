"use client";

import { useStore } from "./store";

import { Button } from "@/components/Button";
import { VisualWrapper } from "@/components/VisualWrapper";

export function Cart() {
  const cartTotal = useStore((state) => state.cartTotal);
  return (
    <VisualWrapper name="CartTotal">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Total:</h1>
        <div className="text-lg">${cartTotal.toFixed(2)}</div>
        <div>
          <Button
            className="text-sm"
            onClick={() => {
              useStore.setState({ cartTotal: 0 });
            }}
          >
            Clear
          </Button>
        </div>
      </div>
    </VisualWrapper>
  );
}
