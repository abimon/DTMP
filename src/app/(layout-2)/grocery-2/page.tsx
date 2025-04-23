"use client"

// API FUNCTIONS
import api from "@utils/__api__/grocery-2";
import api2 from "@utils/__api__/gift";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import { Footer2 } from "@component/footer";
// PAGE SECTION COMPONENTS
import Wrapper from "@sections/grocery-2/Wrapper";
import SidenavBar from "@sections/grocery-2/SidenavBar";
import Section4 from "@sections/grocery-2/section-4";
import SideNavbar from "@component/sidenav/SideNavbar";
import Icon from "@component/icon/Icon";
import { GridView, List } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CustomSidebar from "@component/sidenav/SideNavbar3";
import { GET_PRODUCTS } from "@lib/queries";
import { useQuery } from "@apollo/client";

export default function GroceryTwo() {
 
  // const [featuredProducts, setFeaturedProducts] = useState([]);
  // // const categoryNavigation = await api2.getCategoryNavigation();
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [selectedFilters, setSelectedFilters] = useState([]);
  // const { data: productsData } = useQuery(GET_PRODUCTS);

  // // Fetch products & categories
  // useEffect(() => {
  //   async function fetchData() {
  //     const products = await api.getFeaturedProducts();
  //     setFeaturedProducts(products);
  //     setFilteredProducts(products); // Initially, show all products
  //   }
  //   fetchData();
  // }, []);

  // // Function to update filters
  // const handleFilterChange = (filters) => {
  //   setSelectedFilters(filters);

  //   if (filters.length === 0) {
  //     setFilteredProducts(featuredProducts); // Show all if no filters
  //     return;
  //   }

  //   const filtered = featuredProducts.filter((product) =>
  //     // filters.includes(product.categories) // Assuming each product has a `category` field
  //     product.categories?.some((cat) => filters.includes(cat))
  //   );
  //   setFilteredProducts(filtered);
  // };
  const { data: productsData, loading, error } = useQuery(GET_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (productsData?.products?.items) {
      setFilteredProducts(productsData.products.items);
    }
  }, [productsData]);

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);

    if (!productsData?.products?.items) return;

    if (filters.length === 0) {
      setFilteredProducts(productsData.products.items);
      return;
    }

    // Filter products based on customFields.resourceCategory
    const filtered = productsData.products.items.filter((product) =>
      product?.customFields?.resourceCategory?.some((category) =>
        filters.includes(category.name) // Assuming `name` is the field to match
      )
    );

    setFilteredProducts(filtered);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
// console.log(productsData);
  return (
    <div>

      {/* SORT AND VIEW SECTION */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="2rem" padding="10px" backgroundColor="white" margin="20px">
        <p>
          Explore all the resources you need for your digital transformation
        </p>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <label htmlFor="">Sort by: </label>
          <select style={{ padding: "8px", borderRadius: "10px" }}>
            <option value="Relevance">Upload Date</option>
            <option value="Price Low to High">Latest to older</option>
            <option value="Price High to Low">Older to Latest</option>
          </select>
        </div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <label htmlFor="">View: </label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p >
                {/* <Icon color="secondary" variant="small">
                  eye-alt
                </Icon> */}
                <GridView style={{ fontSize: 24, color: "red" }} />
              </p>
              <p>
                {/* <Icon color="secondary" variant="small">
                  eye-alt
                </Icon> */}
                <List style={{ fontSize: 30, color: "black" }} />
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Wrapper>
        {/* SIDEBAR NAVIGATION AREA */}
        <Box className="sidenav" pt="1.5rem">
          <CustomSidebar onFilterChange={handleFilterChange}
          />
        </Box>

        <Box className="content" pt="1.5rem">
          {/* FEATURED PRODUCTS AREA */}
          <Box mb="3rem">
            <Section4 title="Featured Items" products={filteredProducts} />
          </Box>

          {/* FOOTER AREA */}

        </Box>
      </Wrapper>
      {/* <Footer2 /> */}
    </div>
  );
}
