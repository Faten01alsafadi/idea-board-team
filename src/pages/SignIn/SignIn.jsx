// import React from 'react'
import React, { useState } from "react";

import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./SignIn.module.css";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa6";
function SignIn() {
  //   return (
  //     <div>
  //     <Link to= "/landing">
  //      <button>signin</button>
  //       </Link>

  //     </div>
  //   )
  // }

  // export default SignIn
  const purpleColor = "#9810fa";
  const blackColor = "#3e4044";
  return (
    <>
      <div className={styles.cardlogin}>
        <div
          className=" text-white  "
          style={{
            width: "480px",
            backgroundColor: "#080908",
            border: "1px solid #161716 ",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <div style={{ backgroundColor: "#3e4044", borderRadius: "10px" }}>
            <div className=" mb-4 px-1   ">
              <Link to="/signin">
                <button
                  className="flex-fill btn"
                  style={{
                    backgroundColor: purpleColor,
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0  0 15px #9810fa",
                    width: "50%",
                  }}
                >
                  Login
                </button>
              </Link>
              <Link to="/">
                <button
                  className="flex-fill btn "
                  style={{
                    backgroundColor: blackColor,
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    width: "49%",
                    height: "45px",
                  }}
                  // onClick={() => navigate("/SignUp")}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <Form >
            <Form.Group className="mb-3 ">
              <Form.Label className="text-white  ">Email address</Form.Label>
              <Form.Control
                className={styles.emailLogin}
                type="email"
                placeholder="you@example.com"
                id="email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                className={styles.emailLogin}
                type="password"
                placeholder="........"
                id="password"
              />
            </Form.Group>

            <div>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#9810fa",
                  display: "flex",
                  justifyContent: "end",
                  padding: "15px",
                }}
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              style={{
                backgroundColor: "#9810fa",
                color: "white",
                border: "none",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                width: "100%",
                boxShadow: "0  0 15px #9810fa",
              }}
            >
              Sign In
            </Button>
          </Form>

          <div className="mt-3 d-flex text-white justify-content-center m-auto">
            <span className="text-white"> Or continue with</span>
          </div>
          <div className="d-flex justify-content-center mt-2 gap-2  ">
            <button className="btn btn-dark w-50 d-flex align-items-center justify-content-center gap-2 ">
              <FaGoogle /> Google
            </button>
            <button className="btn btn-dark w-50 d-flex align-items-center justify-content-center gap-2">
              <FiGithub /> GitHub
            </button>
          </div>
        </div>
        <p
          style={{
            color: "white",
            marginTop: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          By continuing you agree to our{" "}
          <a style={{ textDecoration: "none", color: "#9810fa" }} href="#">
            {" "}
            Terms of Service{" "}
          </a>{" "}
          and{" "}
          <a style={{ textDecoration: "none", color: "#9810fa" }} href="#">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    </>
  );
}

export default SignIn;
