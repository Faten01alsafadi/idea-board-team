import React from "react";
import styles from "./NavBar.module.css";

import { FiHome } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
          <Nav.Link href="#home">
            <FiHome />
            Home
          </Nav.Link>
          <Nav.Link href="#features">
            <IoIosInformationCircleOutline />
            About
          </Nav.Link>
          <Nav.Link href="#pricing">
            <MdOutlineEmail />
            Contact
          </Nav.Link>
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

