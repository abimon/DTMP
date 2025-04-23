import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import Typography, { H3 } from "@component/Typography";

export default function ProductDescription() {
  return (
    <div>
      <Typography color="#4B566B" fontSize="16px" p="20px 100px 0px 30px">
      This blueprint provides a clear roadmap for creating a comprehensive 
      enterprise solution, emphasizing IT infrastructure, process automation, 
      and system integrations. It includes practical frameworks, actionable 
      guidelines, and detailed specifications to ensure seamless implementation. 
      Designed to drive scalability, operational efficiency, and future-ready 
      operations, it empowers organizations to adapt, innovate, and thrive in 
      an ever-evolving digital landscape.
      </Typography>
      <FlexBox>
        <Box width="100%" mb="1rem" mt="2em" ml="30px">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Typography>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Data-informed</FlexBox>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Streamlined Automation</FlexBox>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Seamless System Integration</FlexBox>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Legal compliance & document processing</FlexBox>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Actionable Guidelines</FlexBox>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Scalable Solutions</FlexBox>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>
                <FlexBox color="#4B566B" fontSize="16px" mt="1em">✔ Future-Proof Design</FlexBox>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </FlexBox>

    </div>
  );
}
