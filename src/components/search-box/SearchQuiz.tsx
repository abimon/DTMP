import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";

import Box from "@component/Box";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import MenuItem from "@component/MenuItem";
import { Span } from "@component/Typography";
import TextField from "@component/text-field";
import StyledSearchBox from "./styled";
import QuizField from "@component/quiz-field";

export default function QuizSearch() {
  const [resultList, setResultList] = useState<string[]>([]);
  const [category, setCategory] = useState("All Categories");

  const search = debounce((e) => {
    const value = e.target?.value;

    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);

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
    <Box position="relative" flex="1 1 0"  mx="auto">
      <StyledSearchBox>
        <Icon className="quiz-icon" size="18px">
          search
        </Icon>

        <QuizField
          className="quiz-field"
          placeholder="Search and hit enter..." fullwidth
          padding="10px"
        />
      </StyledSearchBox>
    </Box>
  );
}


const dummySearchResult = ["Macbook Air 13", "Ksus K555LA", "Acer Aspire X453", "iPad Mini 3"];
