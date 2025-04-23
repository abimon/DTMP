"use client";

import { useState } from "react";
import Box from "@component/Box";
import Shop from "@models/shop.model";
import FlexBox from "@component/FlexBox";
import { H5 } from "@component/Typography";
import Product from "@models/product.model";
import Section2 from "@sections/market-2/section-2";
import ProductReview from "@component/products/ProductReview";
import AvailableShops from "@component/products/AvailableShops";
import RelatedProducts from "@component/products/RelatedProducts";
import FrequentlyBought from "@component/products/FrequentlyBought";
import ProductDescription from "@component/products/ProductDescription";
import ProductQuiz from "./ProductQuiz";
import ProductInfo from "./ProductInfo";
import Section6 from "@sections/grocery-1/section-6";

// ==============================================================
type Props = {
  // shops: Shop[];
  relatedProducts: Product[];
  frequentlyBought: Product[];
};
// ==============================================================

export default function ProductView({
  // shops,
  relatedProducts,
  frequentlyBought,
}: Props) {
  const [selectedOption, setSelectedOption] = useState("description");
  const handleOptionClick = (opt: any) => () => setSelectedOption(opt);

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
            onClick={handleOptionClick("review")}
            borderBottom={selectedOption === "review" ? "2px solid" : ""}
            color={selectedOption === "review" ? "primary.main" : "text.muted"}
          >
            Steps
          </H5>
          <H5
            p="4px 10px"
            className="cursor-pointer"
            borderColor="primary.main"
            onClick={handleOptionClick("questions")}
            borderBottom={selectedOption === "questions" ? "2px solid" : ""}
            color={selectedOption === "questions" ? "primary.main" : "text.muted"}
          >
            Questions
          </H5>
        </FlexBox>

        {/* DESCRIPTION AND REVIEW TAB DETAILS */}
        <Box mb="50px">
          {selectedOption === "description" && <ProductDescription />}
          {selectedOption === "information" && <ProductInfo />}
          {selectedOption === "review" && <ProductReview />}
          {selectedOption === "questions" && <ProductQuiz />}
        </Box>
      </Box>

      {/* RELATED PRODUCTS */}
      {relatedProducts && <RelatedProducts products={relatedProducts} />}

      {/* SERVICE LIST AREA */}
      {/* <Section2 /> */}
    </>
  );
}
