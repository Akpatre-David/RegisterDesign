import * as Yup from "yup";

export const designValidation = Yup.object().shape({
  firstName: Yup.string().max(12).required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Gender must be either male or female")
    .required("Gender is a required field"),
  age: Yup.number().required("Age is required"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is required"),
});
