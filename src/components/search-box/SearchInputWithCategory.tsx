import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";

import Box from "@component/Box";
import Menu from "@component/Menu";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import MenuItem from "@component/MenuItem";
import { Span } from "@component/Typography";
import TextField from "@component/text-field";
import StyledSearchBox from "./styled";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@lib/queries";

export default function SearchInputWithCategory() {
  const [resultList, setResultList] = useState<string[]>([]);
  const [category, setCategory] = useState("All Categories");

  const { data: productsData } = useQuery(GET_PRODUCTS);

  const products = productsData?.products?.items || [];
  // console.log(products)

  const handleCategoryChange = (cat: string) => () => setCategory(cat);

  // const search = debounce((e) => {
  //   const value = e.target?.value;

  //   if (!value) setResultList([]);
  //   else setResultList(dummySearchResult);
  // }, 200);
  const search = debounce((e) => {
    const value = e.target?.value?.toLowerCase();

    if (!value) {
      setResultList([]);
      return;
    }

    const filtered = products
      .filter((product) =>
        product.name?.toLowerCase().includes(value)
      )
      .map((product) => product.name);

    setResultList(filtered);
  }, );

  const hanldeSearch = useCallback((event: any) => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <StyledSearchBox>
        <Icon className="search-icon" size="18px">
          search
        </Icon>

        <TextField
          fullwidth
          onChange={hanldeSearch}
          className="search-field"
          placeholder="Search and hit enter..."
        />

        <Menu
          direction="right"
          className="category-dropdown"
          handler={
            <FlexBox className="dropdown-handler" alignItems="center">
              <span>{category}</span>
              <Icon variant="small">chevron-down</Icon>
            </FlexBox>
          }>
          {categories.map((item) => (
            <MenuItem key={item} onClick={handleCategoryChange(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </StyledSearchBox>

      {!!resultList.length && (
        <Card position="absolute" top="100%" py="0.5rem" width="100%" boxShadow="large" zIndex={99}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>
                <Span fontSize="14px">{item}</Span>
              </MenuItem>
            </Link>
          ))}
        </Card>
      )}
    </Box>
  );
}

const categories = [
  "All Categories",
  "Car",
  "Clothes",
  "Electronics",
  "Laptop",
  "Desktop",
  "Camera",
  "Toys"
];

const dummySearchResult = ["Macbook Air 13", "Ksus K555LA", "Acer Aspire X453", "iPad Mini 3"];
