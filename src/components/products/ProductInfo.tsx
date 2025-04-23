import * as yup from "yup";
import { useFormik } from "formik";

import Box from "@component/Box";
import Rating from "@component/rating";
import FlexBox from "@component/FlexBox";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import { SemiSpan, H6, H5 } from "@component/Typography";
import ProductComment from "./ProductComment";

export default function ProductInfo() {
  const initialValues = {
    rating: "",
    comment: "",
    date: new Date().toISOString(),
  };

  const validationSchema = yup.object().shape({
    rating: yup.number().required("required"),
    comment: yup.string().required("required"),
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
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div>
      <div style={{ paddingLeft: "30px" }}>
        <FlexBox mb="1em" mr="10px">
          <H5>Version: V1.2</H5>
        </FlexBox>

        <FlexBox mb="1em" mr="10px">
          <H5>Updated on 20/03/2025</H5>
        </FlexBox>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '790px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>
            Requirements for Customization
          </h2>
          <table
            style={{
              width: '100%',
              height: '156px',
              borderCollapse: 'collapse',
              marginBottom: '2em',
            }}
          >
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Customization</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Workflow Steps</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  Can customize transformation milestones
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  Check specific client needs
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Technology Stack</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  Adjustable tech stack to fit preference
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  Choose between MS Azure or AWS
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ textAlign: 'center' }}>
            <SemiSpan>
              Ensure prerequisites are met before blueprint deployment or configuration begins.
            </SemiSpan>
          </div>
        </div>
      </div>
    </div>
  );

}
