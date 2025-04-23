"use client";

import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import styled from "styled-components";

import Box from "@component/Box";
import Card from "@component/Card";
import { Chip } from "@component/Chip";
import Rating from "@component/rating";
import Icon from "@component/icon/Icon";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import LazyImage from "@component/LazyImage";
import { H3, Paragraph, Span } from "@component/Typography";
import ProductQuickView from "@component/products/ProductQuickView";
import { useAppContext } from "@context/app-context";
import { calculateDiscount, currency } from "@utils/utils";

// STYLED COMPONENTS
const StyledBazaarCard = styled(Card)(({ theme }) => ({
  margin: "auto",
  height: "248px",
  // width: "379px",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  borderRadius: "12px",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .controller": { right: 10 }
  }
}));

const ImageWrapper = styled(Box)({
  textAlign: "center",
  position: "relative",
  display: "inline-block"
});

const ImageBox = styled(Box)(({ theme }) => ({
  padding: "25px 249px 20px 25px ",
}));

const ContentWrapper = styled(Box)({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});

// =============================================================
type ProductCardProps = {
  off: number;
  slug: string;
  title: string;
  subTitle: string;
  price: number;
  imgUrl: string;
  rating?: number;
  images: string[];
  id: string | number;
  hoverEffect?: boolean;
};
// =============================================================

export default function ProductCard16(props: ProductCardProps) {
  const { off, id, title, subTitle, price, imgUrl, rating, hoverEffect, slug, images } = props;

  const { state, dispatch } = useAppContext();
  const [openModal, setOpenModal] = useState(false);

  const cartItem = state.cart.find((item) => item.id === id);

  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);

  const handleCartAmountChange = (qty: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { price, imgUrl, id, qty, slug, name: title }
    });
  };

  return (
    <StyledBazaarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        <ImageBox>
          <Link href={`/product/${slug}`}>
            <LazyImage
              alt={title}
              src={imgUrl}
              width={75}
              height={75}
              style={{ objectFit: "cover" }}
            />
          </Link>
        </ImageBox>
      </ImageWrapper>

      <ProductQuickView
        open={openModal}
        onClose={toggleDialog}
        product={{ id, images, slug, price, title }}
      />

      <ContentWrapper>
        <Box flex="1 1 0" minWidth="0px" mr={1}>
          <Link href={`/product/${slug}`}>
            <H3
              title={title}
              fontSize="16px"
              fontWeight="600"
              className="title"
              color="#2B3445">
              {title}
            </H3>
          </Link>
          <p style={{ fontSize: '18px', color: '#50526B', fontWeight: '400',}}>
            {subTitle}
          </p>
        </Box>
      </ContentWrapper>
    </StyledBazaarCard>
  );
}
