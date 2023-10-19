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
