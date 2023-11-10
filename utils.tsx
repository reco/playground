import type { ComponentType } from "react";
// import { useShallow } from 'zustand/react/shallow';
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function createProducts() {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i}`);
  }
  return products;
}

export function filterProducts(filter: string, products: string[]) {
  if (filter === "") return products;
  return products.filter((product) => product.includes(filter));
}

/**
 * A higher-order component that injects a store into a component's props.
 * We need this to use Zustand with React Class components.
 * @param {function} Component - The component to wrap.
 * @param {function} useStore - A hook that returns the store.
 * @param {function} selectorFn - A function that selects the desired state from the store.
 */
export function withStore(
  Component: ComponentType<any>,
  useStore: (selector: any, equalityFn?: any) => any,
  selectorFn: any
) {
  return function WrappedComponent(
    props: React.ComponentProps<typeof Component>
  ) {
    const myStore = useStore(selectorFn);
    return <Component {...props} {...myStore} />;
  };
}
