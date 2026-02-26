import { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import { ProductDetail } from "./ProductDetail";
import { AURORA_COLORS } from "@/data/colors";
import { PRODUCTS } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) {
    return {
      title: "Aurora",
      description: "",
    };
  }

  return {
    title: `${product.name} — Aurora`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
