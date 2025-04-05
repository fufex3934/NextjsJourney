import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// ✅ Correct name and type
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.productId;
  return {
    title: `Product Details - Product ID: ${id}`,
    description: `View details about product with ID ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = params.productId;

  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
}
