// import React from 'react'
import React, { useState } from "react";

import { Link } from "react-router";
import styles from "./SignUp.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa6";

function SignUp() {
  const purpleColor = "#9810fa";
  const blackColor = "#3e4044";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const userData = { name, email, password };

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          userData
        ),
      });

      if (response.ok) {
        alert("Account created successfully!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        const error = await response.json();
        alert("Error: " + (error.message || "Failed to create account"));
      }
    } 
    catch (err) {
      alert("Network error: " + err.message);
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.cardsignup}>
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
            <div className="mb-4">
              <Link to="/signin">
                <button
                  className="flex-fill btn"
                  style={{
                    backgroundColor: blackColor,
                    color: "white",
                    borderRadius: "0.375rem 0 0 0.375rem",
                    border: "none",
                    width: "49%",

                    height: "45px",
                  }}
          
                >
                  Login
                </button>
              </Link>
              <Link to="/">
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
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Label className="text-white  ">Name</Form.Label>
              <Form.Control
                className={styles.emailSignup}
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label className="text-white  ">Email address</Form.Label>
              <Form.Control
                className={styles.emailSignup}
                type="email"
                placeholder="you@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                className={styles.emailSignup}
                type="password"
                placeholder="........"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              type="submit"
              disabled={loading}
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
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Form>

          <div className=" mt-3 d-flex text-white justify-content-center m-auto ">
            <span className="text-white"> Or continue with</span>
          </div>
          <div className="d-flex justify-content-center mt-2 gap-2  ">
            <button onClick={()=>window.open("https://www.google.com","-blank")} className="btn btn-dark w-50 d-flex align-items-center justify-content-center gap-2 ">
              <FaGoogle /> Google
            </button>
            <button onClick={()=>window.open("https://github.com","-blank")} className="btn btn-dark w-50 d-flex align-items-center justify-content-center gap-2">
              <FiGithub />GitHub
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
export default SignUp;
