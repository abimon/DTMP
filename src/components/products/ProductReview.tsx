import * as yup from "yup";
import { useFormik } from "formik";

import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Typography, { H2, H3, H5 } from "@component/Typography";

export default function ProductReview() {
  const initialValues = {
    rating: "",
    comment: "",
    date: new Date().toISOString()
  };

  const validationSchema = yup.object().shape({
    rating: yup.number().required("required"),
    comment: yup.string().required("required")
  });

  const handleFormSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    resetForm();
  };

  const {
    values,
    errors,
    touched,
    dirty,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit
  });

  return (
    <div>
      <FlexBox>
        <Box width="100%">
          <Grid>
            <Grid md={6}>
              <Typography>
                <FlexBox color="#736968" fontWeight={600} mt="1em" ml="1em" mb="1em">
                  1. Download the Blueprint. 
                </FlexBox>
                <FlexBox color="#736968" fontWeight={600} ml="1em" mb="1em">
                  2. Review the Blueprint.
                </FlexBox>
                <FlexBox color="#736968" fontWeight={600} ml="1em" mb="1em">
                  3. Align with stakeholders
                </FlexBox>
                <FlexBox color="#736968" fontWeight={600} ml="1em" mb="1em">
                  4. Begin Implementation
                </FlexBox>
              </Typography>

            </Grid>
          </Grid>
        </Box>
      </FlexBox>
    </div>
  );
}

