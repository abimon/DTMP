"use client"

import Box from "@component/Box";
import { H3 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import ProductCard10 from "@component/product-cards/ProductCard10";
import Product from "@models/product.model";
import styled from "styled-components";
import imgUrl from "../../../../public/assets/images/Groceries Shop/cloud1.png"
import { StaticImageData } from "next/image";

const Wrapper = styled(Box)`
  margin: 40px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  overflow: hidden;
  transition: all 250ms ease-in-out;

  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`;

type ProductCard10Props = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  imgUrl: string | StaticImageData;
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
    steps: string[];
    relatedResources: string[];
    serviceInput: string[];
    serviceThroughput: string[];
    serviceOutput: string[];
    estimatedCompletionTime: string;
  };
};

type Props = {
  title: string;
  products: ProductCard10Props[]; // explicitly match the props needed
};

// =======================================================
// type Props = { title: string; products: Product[] };
// =======================================================

export default function Section4({ title, products }: Props) {
  const responsive = [
    { breakpoint: 950, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <div>
      <Wrapper>
          {products.map((item) => (
            <Box key={item.id}>
              <ProductCard10
                id={item.id}
                slug={item.slug}
                name={item.name} // Use the 'name' field
                description={item.description} // Use the 'description' field
                createdAt={item.createdAt} // Use the 'createdAt' field
                imgUrl={imgUrl} // Use the 'imgUrl' field
                customFields={item.customFields} // Use the 'customFields' object
              />
              
            </Box>
          ))}
      </Wrapper>
    </div>
  );
}
