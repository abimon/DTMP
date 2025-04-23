import Box from "@component/Box";
import { H2 } from "@component/Typography";
import Product from "@models/product.model";
import { Carousel } from "@component/carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import ProductCard21 from "@component/product-cards/ProductCard21";

// ============================================================
type Props = { products: Product[] };
// ============================================================

export default function RelatedProducts({ products }: Props) {
  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];
  const prods = products['products']['items'];

console.log(products["products"]['items']);
  return (
    <CategorySectionCreator>

      <Box my="-0.25rem"> 
      <H2 mb="1.5rem">Other Services</H2>
        <Carousel responsive={responsive} slidesToShow={4}>
          {prods.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard21
                id={item.id}
                name={item.name}
                slug={item.slug}
                description={item.description}
                imgURL={item.imgURL}
                price={item.price}
                customFields={item.customFields}
                createdAt={item.createdAt}
                stock={item.stock}
                discount={item.discount}
                thumbnail={item.thumbnail}
                spec={item.spec}
                categories={item.categories}
                rating={item.rating}
                reviews={item.reviews}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}