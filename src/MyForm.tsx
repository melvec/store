import * as React from "react";
import {  Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { MyField } from "./MyField";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values, {resetForm}) => {
       onSubmit(values);
resetForm();
      
        
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="firstName"
              placeholder="First name"
              component={MyField}
            />
          </div>

          <div>
            <Field
              name="lastName"
              placeholder="Last name"
              component={MyField}
            />
          </div>

          <div>
            <Field placeholder="Email" name="email" component={MyField} />
          </div>
          <div>
            <Button type="submit" variant="text">Submit</Button>
          </div>

          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
