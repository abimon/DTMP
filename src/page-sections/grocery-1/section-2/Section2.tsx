import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H4, SemiSpan } from "@component/Typography";
// API FUNCTIONS
import api from "@utils/__api__/grocery-1";
import { StaticImageData } from "next/image";

// ===============================================
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
  products: ProductCardProps[];
};
// ===============================================

export default  function Section2({ products }: Props) {

  return (
    <Container py={84} >
      <Grid container spacing={6}>
        {products.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <FlexBox
              p="1.5rem"
              shadow={2}
              borderRadius={8}
              alignItems="center"
              backgroundColor="white">
              <Box color="text.muted" mr="1rem">
                <Icon size="44px" defaultcolor="currentColor">
                  code
                </Icon>
              </Box>

              <div>
                <H4 color="gray.900" fontSize="1rem" fontWeight="700" ellipsis>
                  {item.name}
                </H4>

                <SemiSpan>{item.description}</SemiSpan>
              </div>
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
