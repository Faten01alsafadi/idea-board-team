import React from 'react';
import styles from './NavBar.module.css';
import { FiHome } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function NavBar() {
    return (
        <nav className={styles.container}>
            
            <div className={styles.logobar} >
                <img className={styles.logo} src="../../../src/assets/images/logo.png" alt="logo" />
              <h2> IdeaBoard</h2> 
            </div>
            <ul >
                <li><FiHome /><a href="">Home</a></li>
                <li><IoIosInformationCircleOutline /><a href="#">About</a></li>
                <li><MdOutlineEmail /><a href="#">Contact</a></li>
            </ul>
             
        </nav>
        
    );
}
