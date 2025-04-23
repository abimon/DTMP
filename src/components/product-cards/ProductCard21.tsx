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
  margin: 10px; /* Added margin to create space between cards */
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
  justifyContent: "flex-end",
  paddingBottom: "10px",
  "& .buttonBox": {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const ImageBox = styled("div")({
  width: "100%",
  height: "auto",
  position: "relative",
  objectFit: "cover",
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
  justify-content: flex-end;
  height: 100%;
  background: #fff;
  margin-top: 0;
`;

// =============================================================
type ProductCardProps = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  imgURL:  StaticImageData;
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
// =============================================================

export default function ProductCard20(props: ProductCardProps) {
  const {id, name,slug,createdAt,stock,spec} = props;

  const [open, setOpen] = useState(false);
  const { state, dispatch } = useAppContext();

  const cartItem = state.cart.find((item) => item.id === id);

  const toggleDialog = useCallback(() => setOpen((open) => !open), []);

//   const handleCartAmountChange = (qty: number) => () => {
//     dispatch({
//       type: "CHANGE_CART_AMOUNT",
//       payload: { price, imgUrl, id, qty, slug, name: title }
//     });
//   };

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageBox className="hoverImgBox">
          <Link href={`/product/${slug}`}>
            <NextImage alt={slug} width={190} objectFit="cover" height={160} src="/assets/images/products/Home & Garden/vida.png" />
          </Link>
        </ImageBox>

      </ImageWrapper>

      <ContentWrapper>
        {/* Text Content */}
        <div style={{ padding: '16px' }}>
          {/* Badge Section */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
            {/* INSIGHT Button */}
            <div
              style={{
                backgroundColor: 'blue',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              View
            </div>
            {/* Digital Maturity Text */}
            <div
              style={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#7D879C',
                alignContent: 'center',
              }}
            >
              {spec}
            </div>
          </div>

          {/* Date Created Section */}
          <div
            style={{
              fontSize: '10px',
              fontWeight: '400',
              color: '#A5AFC4',
              marginBottom: '8px',
            }}
          >
            Created: {createdAt}
          </div>

          {/* Title Section */}
          <Link href={`/product/${slug}`}>
            <H3
              mb={1}
              title={name}
              fontSize="16px"
              fontWeight="600"
              className="title"
              color="text.secondary"
              style={{ marginBottom: '8px' }}
            >
              {name}
            </H3>
          </Link>

          {/* Subtitle Section */}
          <p style={{ fontSize: '14px', color: '#50526B', fontWeight: '400', margin: 0 }}>
            {stock}
          </p>
        </div>
      </ContentWrapper>


      {/* <ProductQuickView
        open={open}
        onClose={toggleDialog}
        product={{ id, slug, price, name }}
      /> */}
    </Wrapper>
  );
}











