"use client";

import { VisualWrapper } from "@/components/VisualWrapper";
import { Button } from "@/components/Button";

import { useStore } from "./store";

export function Add() {
  const { name, price } = useStore();
  return (
    <VisualWrapper name="AddToCart">
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-lg">${price.toFixed(2)}</p>
      <div className="flex justify-end">
        <Button
          className="text-sm"
          onClick={() => {
            useStore.setState((state) => ({
              cartTotal: state.cartTotal + price,
            }));
          }}
        >
          Add to Cart
        </Button>
      </div>
    </VisualWrapper>
  );
}
