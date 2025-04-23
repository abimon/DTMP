"use client";

import Box from "@component/Box";
import { H1 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import {  ProductCard12, ProductCard16,} from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Product from "@models/product.model";
import ProductCard20 from "@component/product-cards/ProductCard20";
// STYLED COMPONENT

// =====================================================
type Props = { products: Product[] };
// =====================================================

export default function Section6({ products }: Props) {
  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <CategorySectionCreator>

      <Box my="-0.25rem"> 
      <H1 mb="1.5rem">Featured Resources</H1>
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
