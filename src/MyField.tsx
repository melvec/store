import * as React from "react";
import { TextField , TextFieldProps} from "@mui/material";
import { FieldProps } from "formik";



export const MyField: React.FC<FieldProps & TextFieldProps> = ({ placeholder, field }) => {
  return <TextField  
  id="standard-basic" 
  variant="standard"  
  placeholder={placeholder} {...field} />;
};
