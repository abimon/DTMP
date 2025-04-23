import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H2 } from "@component/Typography";
import { ProductCard1 } from "@component/product-cards";
import Product from "@models/product.model";
import ProductCard20 from "@component/product-cards/ProductCard20";
import { H1 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { ProductCard12, ProductCard16, } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";

// ============================================================
type Props = { products: Product[] };
// ============================================================

export default function RelatedProducts({ products }: Props) {
  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  return (
    <CategorySectionCreator>

      <Box my="-0.25rem"> 
      <H2 mb="1.5rem">Related Resources</H2>
        <Carousel responsive={responsive} slidesToShow={4}>
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard20
                id={item.id}
                slug={item.slug}
                //unit={item.unit}
                title={item.title}
                subTitle={item.subTitle}
                color={item.color}
                bg={item.bg}
                spec={item.spec}
                btnText={item.btnText}
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