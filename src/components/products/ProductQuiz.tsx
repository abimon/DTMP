import * as yup from "yup";
import { useFormik } from "formik";

import Box from "@component/Box";
import { Button } from "@component/buttons";
import { H2, H5 } from "@component/Typography";
import ProductComment from "./ProductComment";
import Grid from "@component/grid/Grid";
import TextField from "@component/text-field";
import { SearchInputWithCategory } from "@component/search-box";
import QuizSearch from "@component/search-box/SearchQuiz";

export default function ProductQuiz() {
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
      <form onSubmit={handleSubmit}>
        <Grid container>
          {/* formfield */}
          <Grid item md={9}>
            <QuizSearch />
          </Grid>
          <Grid item md={3}>
            {/* blue button for ask Question */}
            <Box mt="10px">
              <Button
                variant="contained"
                color="primary"
                fullwidth
                size="large"
                borderRadius={"3px"}
                onClick={() => setFieldValue("rating", 1)}
              >
                Ask Question
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}


