import React from "react";
import { TextField, Typography, Box, Button } from "@mui/material/";
import { useFormik } from "formik";
import * as yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      message: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().required("First Name is required"),
      lastname: yup.string().required("Last Name is required"),
      phone: yup.string().required("phone is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <center>
        <Typography variant="h3" color="initial" mt={3} mb={3}>
          Contact Us
        </Typography>
      </center>
      <Box component={"form"} onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="First Name"
          type={"text"}
          variant="outlined"
          sx={{ width: "300px", m: 1 }}
          name="firstname"
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          type={"text"}
          variant="outlined"
          sx={{ width: "300px", m: 1 }}
          name="lastname"
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          type={"text"}
          variant="outlined"
          sx={{ width: "300px", m: 1 }}
          name="phone"
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          id="outlined-basic"
          label="Message "
          type={"text"}
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          sx={{ m: 1 }}
          name="message"
          onChange={formik.handleChange}
          error={formik.touched.phone && formik.errors.message}
          helperText={formik.touched.message && formik.errors.message}
          onBlur={formik.handleBlur}
        />
        <center>
          <Button size="large" variant="contained" type="submit" mt={5} mb={5}>
            send
          </Button>
        </center>
      </Box>
    </>
  );
};

export default ContactUs;
