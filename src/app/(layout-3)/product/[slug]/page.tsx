// import { Fragment } from "react";

// import api from "@utils/__api__/products";
// import ProductIntro from "@component/products/ProductIntro";
// import ProductView from "@component/products/ProductView";
// // ==============================================================
// interface Props {
//   params: Promise<{ slug: string }>;
//   // prod:Product;
// }
// // ==============================================================

// export default async function ProductDetails({ params }: Props) {
//   const { slug } = await params;
//   // console.log(slug);
//   const shops = await api.getAvailableShop();
//   const relatedProducts = await api.getRelatedProducts();
//   const frequentlyBought = await api.getFrequentlyBought();
//   // const product = await useQuery(GET_PRODUCT, { variables: { slug } });
//   const product = await api.getSlugs();
//   console.log(product);
//   return (
//     <Fragment>
//       {/* <ProductIntro
//         // product={product}
//       /> */}

//       <ProductView
//         shops={shops}
//         relatedProducts={relatedProducts}
//         frequentlyBought={frequentlyBought}
//       />
//     </Fragment>
//   );
// }

"use client";

// API FUNCTIONS
import { Fragment, useEffect, useState } from "react";
import { GET_PRODUCT, GET_PRODUCTS} from "@lib/queries";
import { useQuery } from "@apollo/client";
import ProductView from "@component/products/ProductView";
import shops from "@utils/__api__/shops";
import api from "@utils/__api__/products";
import FlexBox from "@component/FlexBox";

import { relatedProducts } from "__server__/__db__/related-products/data";
import ProductIntro from "@component/products/ProductIntro";
import Shop from "@models/shop.model";
import Product from "@models/product.model";

interface Props {
  params: Promise<{ slug: string }>;
  
}
export default function ProductDetails({ params }: Props) {
  const [slug, setSlug] = useState("");
  const [RELATED_CODES, setCode] = useState("");
  useEffect(() => {
    const fetchSlug = async () => {
      const { slug } = await params;
      setSlug(slug);
      // console.log(slug);
    };
    fetchSlug();
  }, [params]);
  const {
    data: productData,
    loading,
    error,
  } = useQuery(GET_PRODUCT, { variables: { slug } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  // console.log({ productData });
  return (
    <Fragment>
      <ProductIntro product={productData} />

      {/* <ProductView
        shops={shops}
        relatedProducts={relatedProducts}
        frequentlyBought={frequentlyBought}
      /> */}
    </Fragment>
  );
}
