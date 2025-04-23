"use client";

import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import {  ProductCard12, ProductCard16,} from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Product from "@models/product.model";
// STYLED COMPONENT

// =====================================================
type Props = { title: string; products: Product[] };
// =====================================================

export default function Section6({ title, products }: Props) {
  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <CategorySectionCreator title={title}>

      <Box my="-0.25rem">
        <Carousel responsive={responsive} slidesToShow={4}>
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard12
                id={item.id}
                slug={item.slug}
                //unit={item.unit}
                title={item.title}
                subTitle={item.subTitle}
                price={item.price}
                off={item.discount}
                rating={item.rating}
                images={item.images}
                imgUrl={item.thumbnail}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
