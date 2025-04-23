import * as yup from "yup";
import { useFormik } from "formik";

import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Typography, { H2, H3, H5 } from "@component/Typography";
type Props = {
  // shops: Shop[];
  steps: String[];
};
export default function ProductSteps({steps}: Props) {
  return (
    <div>
      <FlexBox>
        <Box width="100%">
          <Grid>
            <Grid md={6}>
              <Typography>
                {steps.map((item, ind) => (
                <FlexBox color="#736968" fontWeight={600} key={ind} mt="1em" ml="1em" mb="1em">
                  {ind+1}. {item} 
                </FlexBox>
              ))}
              </Typography>

            </Grid>
          </Grid>
        </Box>
      </FlexBox>
    </div>
  );
}

