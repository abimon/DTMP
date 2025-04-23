"use client";

import styled from "styled-components";
import { useState } from "react";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";
import { H5, Span } from "components/Typography";
import Scrollbar from "@component/Scrollbar";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../lib/queries";

const SidebarContainer = styled(Card)`
  width: 250px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 8px;
`;

const Wrapper = styled(FlexBox)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionTitle = styled(H5)`
  margin-bottom: 8px;
  font-weight: 600;
  margin-top: 20px;
`;

const Divider = styled.div`
  height: 2px;
  background: #f8d7da;
  margin-bottom: 12px;
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  padding-left: ${(props) => (props.isSub ? "20px" : "0")};
`;

const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default function CustomSidebar({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { data: categoriesData } = useQuery(GET_CATEGORIES);

  const toggleCategory = (category) => {
    const isSelected = selectedCategories.some((item) => item.id === category.id);
    const updated = isSelected
      ? selectedCategories.filter((item) => item.id !== category.id)
      : [...selectedCategories, category];

    setSelectedCategories(updated);
    onFilterChange(updated);
  };

  const handleAllServices = () => {
    setSelectedCategories([]);
    onFilterChange([]); // Clear filters and show all services
  };

  const handlePopularServices = () => {
    // Placeholder logic: You can customize this
    onFilterChange("popular"); // Pass a flag or handle differently in parent
  };

  return (
    <Scrollbar autoHide={false} sx={{ maxHeight: "100vh" }}>
      <SidebarContainer>
        <SectionTitle>Top Categories</SectionTitle>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={handleAllServices}>
            <Wrapper>
              <Icon size="14px">home</Icon>
              <Span fontSize="14px">All Services</Span>
            </Wrapper>
          </div>
          <div style={{ cursor: "pointer" }} onClick={handlePopularServices}>
            <Wrapper>
              <Icon size="14px">star</Icon>
              <Span fontSize="14px">Popular Services</Span>
            </Wrapper>
          </div>
        </div>

        <SectionTitle>Categories</SectionTitle>
        <Divider />
        {categoriesData?.collections?.items
          ?.filter(
            (category) =>
              !categoriesData.collections.items.some((parent) =>
                parent.children?.some((child) => child.id === category.id)
              )
          )
          .map((category) => (
            <div key={category.id}>
              <FilterOption>
                <StyledCheckbox
                  type="checkbox"
                  checked={selectedCategories.some((item) => item.id === category.id)}
                  onChange={() => toggleCategory(category)}
                />
                {category.name}
              </FilterOption>

              {category.children?.map((sub) => (
                <FilterOption key={sub.id} isSub>
                  <StyledCheckbox
                    type="checkbox"
                    checked={selectedCategories.some((item) => item.id === sub.id)}
                    onChange={() => toggleCategory(sub)}
                  />
                  {sub.name}
                </FilterOption>
              ))}
            </div>
          ))}

        <SectionTitle>Streams</SectionTitle>
        <Divider />
        {[
          { title: "Digital Enablers", icon: "star" },
          { title: "Digital Front-end", icon: "star" },
          { title: "Digital Core", icon: "star" },
          { title: "Coming Soon", icon: "star" },
        ].map((stream) => (
          <NavLink key={stream.title} href="#">
            <Wrapper>
              <Icon size="14px">{stream.icon}</Icon>
              <Span fontSize="14px">{stream.title}</Span>
            </Wrapper>
          </NavLink>
        ))}
      </SidebarContainer>
    </Scrollbar>
  );
}
