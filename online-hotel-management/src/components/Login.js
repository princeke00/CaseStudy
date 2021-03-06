import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useContext, useState, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import * as Yup from "yup";
import _get from "lodash.get";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("username is required!"),
});

const Login = () => {

  /**To Show Add Toastify Text */

  const notify = () => {

    toast.success("Admin LoggedIn Successfully!!!", {

      position: "top-center",

      autoClose: 2000,

    });

  };



  /**To Show Error Toastify Text */

  const error = () => {

    toast.error("Invalid Credentials!!!", {

      position: "top-center",

      autoClose: 2000,

    });

  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();
  const fromUrl = _get(location, "state.from.pathname");
  const signInSuccess = (userData) => {
    if (fromUrl) {
      history.push(fromUrl);
    } else {
      history.push("/middle");
    }
  };


  const signInFailure = (userData) => {
    if (fromUrl) {
      history.push(fromUrl);
    } else {
      history.push("/login");
    }
  };



  const login = (userData) => {
    fetch("http://localhost:9007/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert("your userId and password is not correct");
        } else {
          const userData = {
            token: response,
            name: username,
          };

          if (response.response === ' Invalid Credentials..!') {

            signInFailure(userData);

            error();

          }

          else {

            signInSuccess(userData);

            notify();

          }
          console.log(response);

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const userData = { ...values };
          resetForm();
          login(userData);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      {() => (
         <section className='showcase login'>
        <Form>
          <div className='showcase-overlay'>
            <h1 className="booking">ADMIN LOGIN</h1>
            <hr></hr>
            <div className="inner">
              <label><b>UserName</b></label>&nbsp;
              <Field name="username" type="text" placeholder="Enter username" />
              <br></br><br></br>
              <label><b>Password</b></label>&nbsp;
              <Field name="password" type="password" placeholder="Password" />
              <br></br><br></br>
              <button
                className="btn btn-success"
                type="submit"
                onClick={() => { }}
              >
                Sign In
              </button>
            </div>
          </div>
        </Form>
        </section>
      )}
    </Formik>
  );
};
export default Login;