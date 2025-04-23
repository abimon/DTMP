"use client";

import { useState } from "react";
import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import { H5 } from "@component/Typography";
import Product from "@models/product.model";
import ProductReview from "@component/products/ProductSteps";
import RelatedProducts from "@component/products/RelatedProducts";
import ProductDescription from "@component/products/ProductDescription";
import ProductQuiz from "./ProductQuiz";
import ProductInfo from "./ProductInfo";
import { StaticImageData } from "next/image";

// ==============================================================

// ==============================================================
type ProductCardProps = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  imgURL: string | StaticImageData;
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
    steps: string[];
  };
  discount: number; // Added missing properties
  thumbnail: string; // Added missing properties
  spec: string; // Added missing properties
  categories: string[]; // Added missing properties
  // images?: string[]; // Added missing properties
};
type Props = {
  product: ProductCardProps;
  products: Product[];
};
export default function ProductView({
  products,product
}: Props) {
  const [selectedOption, setSelectedOption] = useState("description");
  const handleOptionClick = (opt: any) => () => setSelectedOption(opt);
  // const {prods} =prods;
  return (
    <>
      <Box bg="white" padding={"12px"} mt="8vh" mb="8vh">
        <FlexBox
          borderBottom="1px solid"
          borderColor="gray.400"
          mt="80px"
          mb="26px"
        >
          <H5
            mr="50px"
            p="4px 10px"
            className="cursor-pointer"
            borderColor="primary.main"
            onClick={handleOptionClick("description")}
            borderBottom={selectedOption === "description" ? "2px solid" : ""}
            color={
              selectedOption === "description" ? "primary.main" : "text.muted"
            }
          >
            Description
          </H5>
          <H5
            mr="50px"
            p="4px 10px"
            className="cursor-pointer"
            borderColor="primary.main"
            onClick={handleOptionClick("steps")}
            borderBottom={selectedOption === "steps" ? "2px solid" : ""}
            color={selectedOption === "steps" ? "primary.main" : "text.muted"}
          >
            Steps
          </H5>
          <H5
            p="4px 10px"
            className="cursor-pointer"
            borderColor="primary.main"
            onClick={handleOptionClick("questions")}
            borderBottom={selectedOption === "questions" ? "2px solid" : ""}
            color={
              selectedOption === "questions" ? "primary.main" : "text.muted"
            }
          >
            Questions
          </H5>
        </FlexBox>

        {/* DESCRIPTION AND REVIEW TAB DETAILS */}
        <Box mb="50px">
          {selectedOption === "description" && (
            <ProductDescription
              description={product.description}
            />
          )}
          {selectedOption === "info" && <ProductInfo />}
          {selectedOption === "steps" && (
            <ProductReview steps={product.customFields.steps} />
          )}
          {selectedOption === "questions" && <ProductQuiz />}
        </Box>
      </Box>

      {/* RELATED PRODUCTS */}
      {products && <RelatedProducts products={products} />}
    </>
  );
}
