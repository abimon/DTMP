// import Box from "@component/Box";
// PAGE SECTION COMPONENTS
// import Footer from "@sections/landing/footer";
// import Section1 from "@sections/landing/Section1";
// import Section2 from "@sections/landing/Section2";
// import Section3 from "@sections/landing/Section3";
// import Section4 from "@sections/landing/Section4";
// import Section5 from "@sections/landing/Section5";

// export default function Home() {
//   return (
//     <Box id="top" overflow="hidden" bg="gray.white">
//       HEADER & BANNER SECTION
//       <Section1 />

//       FEATURES SECTION
//       <Section2 />

//       PRODUCT MODEL & REST API SECTION
//       <Section5 />

//       DEMOS & PAGES SECTION
//       <Section3 />

//       TECHNOLOGY USED SECTION
//       <Section4 />

//       FOOTER SECTION
//       <Footer />
//     </Box>
//   );
// }
'use client';

import { Fragment, useEffect, useState } from "react";
// API FUNCTIONS
import api from "@utils/__api__/grocery-1";
// GLOBAL CUSTOM COMPONENTS
import { Footer1 } from "@component/footer";
import Sticky from "@component/sticky";
import { Header, HeaderTwo } from "@component/header";
import SideNavbar from "@component/sidenav/SideNavbar";
import SidenavContainer from "@component/SidenavContainer";
// PAGE SECTION COMPONENTS
import Section1 from "@sections/grocery-1/section-1";
import Section2 from "@sections/grocery-1/section-2";
import Section3 from "@sections/grocery-1/section-3";
import Section4 from "@sections/grocery-1/section-4";
import Section5 from "@sections/grocery-1/section-5";
import Section6 from "@sections/grocery-1/section-6";
import Section7 from "@sections/gadget-shop/section-7";
import { GET_PRODUCTS } from "@lib/queries";
import { useQuery } from "@apollo/client";
import products from "@utils/__api__/products";

export default  function GroceryOne() {
  const { data: prods,loading,error } = useQuery(GET_PRODUCTS);
  const [products, setSlug] = useState([]);
    useEffect(() => {
      if(!loading && prods?.products?.items) {
        setSlug(prods.products.items);
      }
    }, [prods]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <Fragment>
      <Sticky fixedOn={0} scrollDistance={300}>
        <HeaderTwo />
      </Sticky>

      {/* HERO AREA */}
      <Section1 />

      {/* SERVICES AREA */}
      <Section2 products={products} />

      {/* POPULAR PRODUCTS CAROUSEL AREA */}
      <Section3 title="Explore resources tailored to your transformation needs" products={products} />

      {/* TRENDING PRODUCTS CAROUSEL AREA */}
      <Section6 products={products} />

      {/* DISCOUNT BANNER AREA */}
      <Section5 />

      {/* BLOGS AREA */}
      {/* <Section7 blogs={blogLists} /> */}

      {/* FOOTER AREA */}
      <Footer1 />

    </Fragment>
  );
}
