import * as yup from "yup";

export const FormSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phonenumber: yup
    .number()
    .min(8, "Phonenumer must be at least 8 characters")
    .required("Phone number is required"),
  subject: yup
    .string()
    .min(3, "Subject must be at least 2 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(3, "Message must be at least 2 characters")
    .required("Message is required"),
  userEmail: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is a required field"),
});
