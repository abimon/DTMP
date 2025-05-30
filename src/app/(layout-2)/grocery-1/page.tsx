import { Fragment } from "react";
// API FUNCTIONS
import api from "@utils/__api__/grocery-1";
// GLOBAL CUSTOM COMPONENTS
import { Footer1 } from "@component/footer";
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

export default async function GroceryOne() {
  const FIXED_ID = "services-area";
  const blogLists = await api.getBlogLists();
  const popularProducts = await api.getPopularProducts();
  const trendingProducts = await api.getTrendingProducts();
  const grocery1NavList = await api.getGrocery1Navigation();

  return (
    <Fragment>
      
      {/* HERO AREA */}
      <Section1 />

      {/* SERVICES AREA */}
      <Section2 id={FIXED_ID} />

      {/* POPULAR PRODUCTS CAROUSEL AREA */}
      <Section3 title="Explore resources tailored to your transformation needs" products={popularProducts} />

      {/* TRENDING PRODUCTS CAROUSEL AREA */}
      <Section6 products={trendingProducts} />

      {/* DISCOUNT BANNER AREA */}
      <Section5 />

      {/* BLOGS AREA */}
      <Section7 blogs={blogLists} />

      {/* FOOTER AREA */}
      <Footer1 />

    </Fragment>
  );
}
