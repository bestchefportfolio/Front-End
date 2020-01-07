import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

const SignUpForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUser(user => [...user, status]);
  }, [status]);
  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <Form>
        <div>
          {touched.username && errors.username && (
            <p class="error">{errors.username}</p>
          )}
          <Field type="text" name="username" placeholder="Username" />
        </div>

        <div>
          {touched.password && errors.password && (
            <p class="error">{errors.password}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        {/* <div>
          {touched.confirm && errors.confirm && (
            <p class="error">{errors.confirm}</p>
          )}
          <Field
            type="password"
            name="confirm"
            placeholder="Confirm password"
          />
        </div> */}
        <div>
          {touched.name && errors.name && <p class="error">{errors.name}</p>}
          <Field type="text" name="name" placeholder="Name" />
        </div>
        <div>
          {touched.email && errors.email && <p class="error">{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <div className="isChef">
          <div>
            {touched.is_chef && errors.is_chef && (
              <p class="error">{errors.is_chef}</p>
            )}
            <Field type="checkbox" name="is_chef" checked={values.is_chef} />
            <span> Are you a chef?</span>
          </div>
          <div>
            {touched.location && errors.location && (
              <p class="error">{errors.location}</p>
            )}
            <Field
              type="text"
              name="location"
              placeholder="Location"
              disabled={!values.is_chef}
            />
          </div>
          <div>
            {touched.phone_number && errors.phone_number && (
              <p class="error">{errors.phone_number}</p>
            )}
            <Field
              type="number"
              name="phone_number"
              placeholder="Enter phone number"
              disabled={!values.is_chef}
            />
          </div>
          <div>
            {touched.business_name && errors.business_name && (
              <p class="error">{errors.business_name}</p>
            )}
            <Field
              type="text"
              name="business_name"
              placeholder="Business name"
              disabled={!values.is_chef}
            />
          </div>

          <div>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

const FormikOnboardForm = withFormik({
  mapPropsToValues({
    username,
    password,
    name,
    email,
    is_chef,
    location,
    phone_number,
    business_name
  }) {
    return {
      username: username || "",
      password: password || "",
      //   confirm: confirm || "",
      name: name || "",
      email: email || "",
      is_chef: is_chef || false,
      location: location || "",
      phone_number: phone_number || "",
      business_name: business_name || ""
    };
  },

  //====VALIDATION SCHEMA====
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    // confirm: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match")
    //   .required("Password confirm is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
  }),
  //===END VALIDATION SCHEMA===
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("Submitting!", values);
    if (values.is_chef === true)
      axios
        .post(`https://chef-portfolio-be.herokuapp.com/register/chef`, values)
        .then(res => {
          console.log("success", res);
          setStatus(res.data);
          resetForm();
        })
        .catch(err => console.log(err.response));
    else
      axios
        .post(`https://chef-portfolio-be.herokuapp.com/register`, values)
        .then(res => {
          console.log("success", res);
          setStatus(res.data);
          resetForm();
        })
        .catch(err => console.log(err.response));
  }
})(SignUpForm);

export default FormikOnboardForm;
