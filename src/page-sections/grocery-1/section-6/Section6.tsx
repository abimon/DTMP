"use client";

import Box from "@component/Box";
import { H1 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import {  ProductCard12, ProductCard16,} from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Product from "@models/product.model";
import ProductCard20 from "@component/product-cards/ProductCard20";
import ProductCard21 from "@component/product-cards/ProductCard21";
import { StaticImageData } from "next/image";
// STYLED COMPONENT

type ProductCardProps = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  imgURL: StaticImageData;
  price: number; // Added missing properties
  rating: number;
  reviews: [];
  stock: number;
  customFields: {
    resourceCategory: string;
    resourceDescription1: string;
    domain: string;
    sector: string;
    region: string;
    resourceVersion: string;
    resourceCode: string;
    resourceDescription2: string;
    overview: string;
    timeBenefit: string;
    costBenefit: string;
    qualityBenefit: string;
    estimatedCompletionTime: string;
    steps: string[];
  };
  discount: number; // Added missing properties
  thumbnail: string; // Added missing properties
  spec: string; // Added missing properties
  categories: string[]; // Added missing properties
  // images?: string[]; // Added missing properties
};
// =============================================================
type Props = {
  products: ProductCardProps[];
};
export default function Section6({ products }: Props) {
  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <CategorySectionCreator>

      <Box my="-0.25rem"> 
      <H1 mb="1.5rem">Featured Resources</H1>
        <Carousel responsive={responsive} slidesToShow={4}>
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard21
                product={item}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
