import React from "react";
import styles from "./NavBar.module.css";

import { FiHome } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";

// import"./NavBar.module.css";
export default function NavBar() {
  return (
    <Navbar data-bs-theme="dark" className={styles.custom}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            width="40"
            height="40"
            className=" p-1"
            src="../../../src/assets/images/logo.png"
            alt=""
          />
          ideaBoard
        </Navbar.Brand>
        <Nav className={styles.help}>
          <Nav.Link className={styles.link} href="#home">
            <FiHome />
            Home
          </Nav.Link>
          <Nav.Link className={styles.link} href="#features">
            <IoIosInformationCircleOutline />
            About
          </Nav.Link>
          <Nav.Link className={styles.link} href="#pricing">
            <MdOutlineEmail />
            Contact
          </Nav.Link>

            <Link  to="/signin">
                          <button
                            className={`flex-fill btn ${styles.loginBtn}`}
                            style={{
                              backgroundColor:"#9810fa",
                              color: "white",
                              borderRadius: "10px",
                              border: "none",
                              boxShadow: "0  0 15px #9810fa",
                              width: "100%",
                            }}
                          >
                            Login
                          </button>
                        </Link>
        </Nav>
      </Container>
    </Navbar>
  );
  {
    /*         
             <div className={styles.logobar} >
                <img className={styles.logo} src="../../../src/assets/images/logo.png" alt="logo" />
              <h2> IdeaBoard</h2> 
            </div>
            <ul >
                <li><FiHome /><a href="">Home</a></li>
                <li><IoIosInformationCircleOutline /><a href="#">About</a></li>
                <li><MdOutlineEmail /><a href="#">Contact</a></li>
            </ul>  */
  }
}

