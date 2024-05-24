import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apple, facebook, google } from "../imagepath";
import { Active_Mode, User_roleID } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { CreateAuths } from "../../redux/Auth/Slice";
import { setloadertrue } from "../../redux/Auth/Slice";
import ButtonLoder from "../common/ButtonLoder";
import { handleToast } from "../../../toast";
 
const SignUp = ({loading}) => {
  const [passwordType, setPasswordType] = useState("password");
  const {error} = useSelector((state) => state.Auth);
 
const dispatch =useDispatch()
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    contact_number: Yup.string().min(10, "Phone must be at least 10 characters").required("Phone is required")

  });

  const initialValues = {
    mode:Active_Mode,
    fullname: "",
    email: "",
    password: "",
    contact_number:"",
    gender:"male",
    role:User_roleID
  };

  const onSubmit =async (values) => {
    console.log("Form data", values);
    dispatch(setloadertrue())

   const res =  await dispatch(CreateAuths(values))
 
   if (res?.payload?.isSuccess ===true) {
    
          dispatch(handleToast('User Create success', 'success'));
    }
    else{

      dispatch(handleToast(  'An error occurred', 'error'))
  }
};

useEffect(() => {
    if (error?.isSuccess === false && loading) {
        if (error.message) {
        dispatch(handleToast(error.message[0] ||  'An error occurred', 'error'))
            
        }
    else{

        dispatch(handleToast(error.error|| 'An error occurred', 'error'))
    }
    


  
    }
  }, [error]);

  return (
    <>
      <div className="login-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 mx-auto">
              <div className="login-wrap register-form">
                <div className="login-header">
                  <h3>Create an Account</h3>
                  <p>Let's start with <span>New</span></p>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <div className="form-group group-img">
                      <div className="group-img">
                        <i className="feather-user" />
                        <Field
                          type="text"
                          name="fullname"
                          className="form-control"
                          placeholder="Full Name"
                        />
                        <ErrorMessage name="fullname" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="form-group group-img">
                      <div className="group-img">
                        <i className="feather-phone" />
                        <Field
                          type="text"
                          name="contact_number"
                          className="form-control"
                          placeholder="Phone no."
                        />
                        <ErrorMessage name="contact_number" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="form-group group-img">
                      <div className="group-img">
                        <i className="feather-mail" />
                        <Field
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="pass-group group-img">
                        <i className="feather-lock" />
                        <Field
                          type={passwordType}
                          name="password"
                          className="form-control pass-input"
                          placeholder="Password"
                        />
                        <span
                          className={`toggle-password ${passwordType === "password" ? "feather-eye" : "feather-eye-off"}`}
                          onClick={togglePassword}
                        ></span>
                        <ErrorMessage name="password" component="div" className="error-message" />
                      </div>
                    </div>
                    <button className="btn btn-primary w-100 login-btn" type="submit">
                    {loading ?<ButtonLoder/>:  'Create Account'}
                    </button>
                  </Form>
                </Formik>
                <div className="register-link text-center">
                  <p>
                    Already have an account?{" "}
                    <Link className="forgot-link" to="/login">
                      Sign In
                    </Link>
                  </p>
                </div>
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">
                    Sign in with Social Media Accounts
                  </span>
                </div>
                <div className="social-login">
                  <Link to="#" className="btn btn-apple w-100">
                    <img src={apple} className="me-1" alt="img" />
                    Sign in with Apple
                  </Link>
                </div>
                <div className="social-login">
                  <Link to="#" className="btn btn-google w-100">
                    <img src={google} className="me-1" alt="img" />
                    Sign in with Google
                  </Link>
                </div>
                <div className="social-login">
                  <Link to="#" className="btn btn-facebook w-100 mb-0">
                    <img src={facebook} className="me-2" alt="img" />
                    Continue with Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
