"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import { Chip } from "@component/Chip";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button, IconButton } from "@component/buttons";
import NextImage from "@component/NextImage";
import { H3, SemiSpan } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import ProductQuickView from "@component/products/ProductQuickView";
import { useAppContext } from "@context/app-context";
import { calculateDiscount, currency, getTheme } from "@utils/utils";
import { StaticImageData } from "next/image";

// STYLED COMPONENT
const Wrapper = styled(Card)`
  margin: auto;
  height: 400px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms ease-in-out;

  &:hover {
    .details {
      .add-cart {
        display: flex;
      }
    }
    .image-holder {
      .extra-icons {
        display: flex;
      }
    }
  }

  .image-holder {
    text-align: center;
    position: relative;
    display: inline-block;
    height: 250px;
    object-fit: cover;
    .extra-icons {
      z-index: 2;
      bottom: 0.75rem;
      display: none;
      right: 7rem;
      cursor: pointer;
      position: absolute;
      flex-direction: column;
    }

    @media only screen and (max-width: ${deviceSize.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1rem;
    height: 150px;

    .title,
    .categories {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .icon-holder {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${getTheme("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      margin-top: auto;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`;

type ProductCustomFields = {
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
  steps: string[]; // Array of strings
  relatedResources: string[]; // Array of strings
  serviceInput: string[]; // Array of strings
  serviceThroughput: string[]; // Array of strings
  serviceOutput: string[]; // Array of strings
  estimatedCompletionTime: string;
};

type ProductCard10Props = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  imgUrl: string | StaticImageData;
  customFields: ProductCustomFields;
};

export default function ProductCard10(props: ProductCard10Props) {
  const { id, slug, name, description, createdAt, imgUrl, customFields } = props;

  const [open, setOpen] = useState(false);
  const [discountPrice, setDiscountPrice] = useState<string>("");

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date";
    return date.toLocaleDateString();
  };

  const maxLength = 30;

  const truncatedDescription =
    description && typeof description === "string" && description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description || "";

  // Ensure customFields exists and has resourceCategory and resourceVersion
  const resourceCategory = customFields?.resourceCategory || "N/A";
  const resourceVersion = customFields?.resourceVersion || "N/A";

  const { state, dispatch } = useAppContext();
  const cartItem = state.cart.find((item) => item.id === id);

  const toggleDialog = useCallback(() => setOpen((open) => !open), []);

  return (
    <Wrapper borderRadius={10}>
      <div className="image-holder">
        <FlexBox className="extra-icons">
          <IconButton padding=".5rem">
            <Icon color="secondary" variant="small">
              eye-alt
            </Icon>
          </IconButton>
        </FlexBox>

        <Link href={`/product/${slug}`}>
          <NextImage src={imgUrl} alt={name} />
        </Link>
      </div>

      <div className="details">
        <FlexBox>
          <Box>
            <div>
              <div
                style={{
                  marginBottom: "3px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  height: "30px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    color: "rgba(0, 0, 255, 0.7)",
                    borderRadius: "8px",
                    fontWeight: "500",
                  }}
                >
                  {resourceCategory}
                </p>
                <p style={{ margin: "0", padding: "0" }}>{resourceVersion}</p>
              </div>
              <div>
                <p style={{ margin: "0", padding: "0", fontSize: "10px" }}>
                  Created: {formatDate(createdAt)}
                </p>
              </div>
            </div>
            <Link href={`/product/${slug}`}>
              <H3
                mb="6px"
                title={name}
                fontSize="14px"
                textAlign="left"
                fontWeight="600"
                color="text.secondary"
              >
                {name}
              </H3>
            </Link>

            <SemiSpan>{truncatedDescription}</SemiSpan>
          </Box>
        </FlexBox>
      </div>
    </Wrapper>
  );
}
