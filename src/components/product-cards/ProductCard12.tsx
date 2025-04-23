"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";

import Box from "@component/Box";
import { Chip } from "@component/Chip";
import Rating from "@component/rating";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import NextImage from "@component/NextImage";
import { H3, Paragraph, Span } from "@component/Typography";
import ProductQuickView from "@component/products/ProductQuickView";
import { useAppContext } from "@context/app-context";
import { calculateDiscount, currency } from "@utils/utils";
import { StaticImageData } from "next/image";

// STYLED COMPONENTS
const Wrapper = styled("div")`
  height: 100%;
  margin: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;


const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageWrapper = styled("div")({
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  "&:hover": {
    "& .hoverButtonBox": { opacity: 1 },
  }
});

const HoverButtonBox = styled("div")({
  opacity: 0,
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: ".5s ease",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",  // Align the icons at the bottom on hover
  paddingBottom: "10px",  // Adds space from the bottom for the icons
  "& .buttonBox": {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const ImageBox = styled("div")({
  width: "100%",  // Ensure the image will fill the full width
  height: "auto",  // Set the height to auto for flexible scaling
  position: "relative",
  objectFit: "cover",  // Ensures the image maintains its aspect ratio
  top: 0,
  left: 0,
});


const ItemController = styled("div")(({ theme }) => ({
  display: "flex",
  background: "#fff",
  overflow: "hidden",
  borderRadius: "5px",
  boxShadow: theme.shadows[2],
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "6px 12px",
    alignItems: "center",
    "&:hover": { cursor: "pointer", background: "#f3f5f9" },
  },
  "& svg": { fontSize: 22, color: theme.colors.gray[600] },
}));

const ContentWrapper = styled("div")`
  display: inline-flex;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  /* Align content to the bottom of the card */
  height: 100%;
  background: #fff;
  margin-top: 0;  /* Remove any top margin to avoid gap */
`;


// =============================================================
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
  product: ProductCardProps;
};
// =============================================================

export default function ProductCard12({product}: Props) {


  return (
    <Wrapper>
      <ImageWrapper>
        <ImageBox className="hoverImgBox">
          <Link href={`/product/${product.slug}`}>
            <NextImage alt={product.slug} width={190} height={190} src={product.imgURL} />
          </Link>
        </ImageBox>

        <HoverButtonBox className="hoverButtonBox">
          <Box className="buttonBox">
            <ItemController>
              <Span >
                <Icon variant="small">eye-alt</Icon>
              </Span>
            </ItemController>
          </Box>
        </HoverButtonBox>
      </ImageWrapper>

      <ContentWrapper>
        <Link href={`/product/${product.slug}`}>
          <H3
            mb={1}
            title={product.name}
            fontSize="16px"
            fontWeight="600"
            className="title"
            color="text.secondary"
          >
            {product.name}
          </H3>
          <p style={{ fontSize: "14px", color: "#50526B", fontWeight: "400" }}>
            {product.customFields.resourceCategory}
          </p>
        </Link>
      </ContentWrapper>

      {/* <ProductQuickView
        open={open}
        onClose={toggleDialog}
        product={{ id, images, slug, price, title }}
      /> */}
    </Wrapper>
  );
}















