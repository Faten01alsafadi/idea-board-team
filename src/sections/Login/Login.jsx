import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Login.module.css";
import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  //   const navigate = useNavigate();
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
          <Form>
            <div className="d-flex mb-3">
              <button
                className="flex-fill btn"
                style={{
                  backgroundColor: purpleColor,
                  color: "white",
                  borderRadius: "0.375rem 0 0 0.375rem",
                  border: "none",
                  boxShadow: "0  0 15px #9810fa",
                }}
              >
                Login
              </button>

              <button
                className="flex-fill btn"
                style={{
                  backgroundColor: blackColor,
                  color: "white",
                  borderRadius: "0 0.375rem 0.375rem 0",
                  border: "none",
                }}
                onClick={() => navigate("/SignUp")}
              >
                Sign Up
              </button>
              
            </div>

            <Form.Group className="mb-3 ">
              <Form.Label className="text-white  ">Email address</Form.Label>
              <Form.Control
                className={styles.emailLogin}
                type="email"
                placeholder="you@example.com"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                className={styles.emailLogin}
                type="password"
                placeholder="........"
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
              Login
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

export default Login;
