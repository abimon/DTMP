"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Box from "@component/Box";
import Image from "@component/Image";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H1, H2, H3, H4, H5, H6, SemiSpan } from "@component/Typography";
import { useAppContext } from "@context/app-context";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { StaticImageData } from "next/image";
import Rating from "@component/rating";

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
  product: ProductCardProps[]; // explicitly match the props needed
};
// ========================================

export default function ProductIntro({ product }: Props) {
  
  const param = useParams();
  const { state, dispatch } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const safeImages = [
    "/assets/images/products/Home & Garden/vida.png",
    "/assets/images/products/Home & Garden/2indoor.png",
    "/assets/images/products/Home & Garden/3Aloe.png",
    "/assets/images/products/Home & Garden/4Satin.png",
  ];
const prod = product["product"];
  return (
    <Box overflow="hidden" bg="white" borderRadius="12px" padding={"12px"}>
      <Grid container spacing={55}>
        <Grid item md={6} alignItems="top" justifyContent={"top"}>
          <FlexBox justifyContent={"top"}>
            <Box
              border={"2px #E0000 solid"}
              borderRadius={"12px"}
              padding={"5px"}
              ml={"10px"}
              mr={"10px"}
            >
              <Image
                src={safeImages[selectedImage]}
                width="655px;"
                height="369px"
              />
            </Box>
          </FlexBox>
        </Grid>
        <Grid item md={6} alignItems="center">
          <H2 mb="1rem" color="#2B3445">
            {prod.name}
          </H2>
          <FlexBox alignItems="center" mb="1rem">
            {/* <Box>
              <Rating color="warn" size="medium" value={prod.rating} outof={5} />
            </Box>
            <H6 mr="2px">(50)</H6>
            <Icon>vector</Icon> */}
            <SemiSpan color="#7D879C" style={{ fontSize: "16px" }}>
              {" "}
              Code:
            </SemiSpan>
            <H5 ml="8px" color="#2B3445">
              {prod.customFields.resourceCode}{" "}
            </H5>
          </FlexBox>
          {/* <Button
            mt="30px"
            size="small"
            color="#007AFF"
            bg="#007AFF26"
            variant="text"
          >
            BLUEPRINT
          </Button> */}
          <Box mb="45px" mt="30px">
            {prod.description}
          </Box>
          <Button
            bg="#D23F57"
            height="55px"
            width="323px"
            variant="contained"
            mt="15px"
            color={"#FFFFFF"}
          >
            <p>Download Blue</p>
          </Button>
          <FlexBox
            alignItems="center"
            mb="1rem"
            mt="1rem"
            justifyContent="space-between"
            width="65%"
          >
            {/* <Button width="175px" height="50px" bg={"#EBEFF4"}>
              <Icon>heart</Icon>
              &nbsp; Add Wishlist
            </Button> */}
            <FlexBox justifyContent="flex-end">
              <Button
                mr="10px"
                width="50px"
                height="50px"
                borderRadius="none"
                bg={"#EBEFF4"}
              >
                <Icon>recycle</Icon>
              </Button>
              <Button
                mr="10px"
                width="50px"
                height="50px"
                borderRadius="none"
                bg={"#EBEFF4"}
              >
                <Icon>share</Icon>
              </Button>
            </FlexBox>
          </FlexBox>
          <FlexBox mb="1em">
            <Icon ml={"10px"} color="#7D879C">
              clock-circular-outline
            </Icon>
            <H4 ml="8px" mr="8px" color="#2B3445">
              Estimated Completion:
            </H4>
            <SemiSpan color="#002180" fontWeight="w500">
              <H4 ml="2px" color="#7D879C">
                {prod.customFields.estimatedCompletionTime} days
              </H4>
            </SemiSpan>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
}
