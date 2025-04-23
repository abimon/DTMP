import Link from "next/link";

import Box from "@component/Box";
import Image from "@component/Image";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import AppStore from "@component/AppStore";
import Container from "@component/Container";
import Typography, { Paragraph } from "@component/Typography";

// STYLED COMPONENTS
import { StyledLink } from "./styles";
// CUSTOM DATA
import { aboutLinks, customerCareLinks, iconList } from "./data";

export default function Footer1() {
  return (
    <footer>
      <Box bg="#EBEBED">
        <Container color="white">
          <Box py="5rem" overflow="hidden">
            <Grid container spacing={2}>
              <div style={{ flex: "1 1 33%", padding: "0 15px" }}>
                <Link href="/">
                  <Image alt="logo" mb="1rem" src="/assets/images/logo.svg" />
                </Link>

                <Paragraph mb="1.25rem" color="gray.500" maxWidth="320px">
                  Stay updated with the latest business insights, opportunities, and services from Digital Qatalyst.
                </Paragraph>

                {/* Subscription Form */}
                <Box display="flex" flexDirection="row" alignItems="center" width={380}>
                  <input
                    type="email"
                    placeholder="Your email"
                    style={{
                      padding: "0.5rem 1rem",
                      flex: 1,
                      border: "1px solid #FFFFFF",  // Retain the border color
                      borderRadius: "8px 0 0 8px",
                      outline: "none",
                      fontSize: "1rem",
                      color: "#6B6B6B",  // Text color
                      background: "transparent",  // Make the input background transparent
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #FFFFFF",
                      borderRadius: "0 8px 8px 0",
                      color: "#D23F57",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    Subscribe
                  </button>
                </Box>
              </div>


              <div style={{ padding: "0 65px" }}>
                <Typography color="#000000" mb="1.25rem" lineHeight="1" fontSize={15} fontWeight="600">
                  Digital City Strategy
                </Typography>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </div>


              <div style={{ padding: "0 65px" }}>
                <Typography color="#000000" mb="1.25rem" lineHeight="1" fontSize={15} fontWeight="600">
                  Digital City Designs
                </Typography>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </div>


              <div style={{ padding: "0 65px" }}>
                <Typography color="#000000" mb="1.25rem" lineHeight="1" fontSize={15} fontWeight="600">
                  Digital City Roadmap
                </Typography>

                <Typography color="#000000" py="0.3rem">
                  Leaf page
                </Typography>

                <Typography color="#000000" py="0.3rem">
                  Leaf page
                </Typography>

                <Typography color="#000000" py="0.3rem" mb="1rem">
                  Leaf page
                </Typography>

                {/* Uncommented FlexBox section, assuming you want it inside the div */}
                {/* 
  <FlexBox className="flex" mx="-5px">
    {iconList.map((item) => (
      <a
        href={item.url}
        target="_blank"
        key={item.iconName}
        rel="noreferrer noopenner">
        <Box m="5px" p="10px" size="small" borderRadius="50%" bg="rgba(0,0,0,0.2)">
          <Icon size="12px" defaultcolor="auto">
            {item.iconName}
          </Icon>
        </Box>
      </a>
    ))}
  </FlexBox> 
  */}
              </div>

            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
