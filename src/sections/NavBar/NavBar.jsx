import React from 'react';
import styles from './NavBar.module.css';
// import { FiHome } from "react-icons/fi";
// import { IoIosInformationCircleOutline } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBar() {
    return (
      
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto bg-dark">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
{/*         
             <div className={styles.logobar} >
                <img className={styles.logo} src="../../../src/assets/images/logo.png" alt="logo" />
              <h2> IdeaBoard</h2> 
            </div>
            <ul >
                <li><FiHome /><a href="">Home</a></li>
                <li><IoIosInformationCircleOutline /><a href="#">About</a></li>
                <li><MdOutlineEmail /><a href="#">Contact</a></li>
            </ul>  */}
             
        
        
    
}
