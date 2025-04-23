"use client";

import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import { ProductCard16, } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Product from "@models/product.model";
// STYLED COMPONENT
import { SubTitle } from "./styles";

// =====================================================
type Props = { title: string; products: Product[] };
// =====================================================

export default function Section3({ title, products }: Props) {
  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <CategorySectionCreator title={title}>

      <Box my="-0.25rem">
        <Box display="flex" justifyContent="space-between" width="100%">
          {products.slice(0, 3).map((item, ind) => (
            <Box py="0.25rem" key={ind} width="30%">
              <ProductCard16
                id={item.id}
                slug={item.slug}
                //unit={item.unit}
                subTitle={item.subTitle}
                title={item.title}
                price={item.price}
                off={item.discount}
                rating={item.rating}
                images={item.images}
                imgUrl={item.thumbnail}
              />
            </Box>
          ))}
        </Box>

      </Box>
    </CategorySectionCreator>
  );
}
