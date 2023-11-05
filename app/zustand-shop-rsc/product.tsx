import Image from "next/image";

import { VisualWrapper } from "@/components/VisualWrapper";

import { useStore } from "./store";

export function Product({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  return (
    <VisualWrapper rsc name="ProductInfo">
      <Image src={image} alt="Product Name" width={600} height={488} />
      <h1 className="pt-2 mt-2 text-3xl font-bold border-t-2 border-black/10">
        {useStore.getState().name}
      </h1>
      <p className="mt-2 italic">{description}</p>
    </VisualWrapper>
  );
}
