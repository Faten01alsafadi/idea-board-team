import React from 'react';
import styles from './Footer.module.css';
// import { MdOutlineEmail } from "react-icons/md";
// import { FiGithub } from "react-icons/fi";
// import { CiTwitter } from "react-icons/ci";
export default function Footer() {
    return (
        <footer className={styles.footer}>
             <div className={styles.container}>
            <div className={styles.logobar} >
                <div className={styles.logText}>
                            <img className={styles.logo} src="../../../src/assets/images/logo.png" alt="logo" />
                        <span>  IdeaBoard</span></div>
                          <p>Organize your creative ideas and turn them into reality</p> 
                        </div>
            <div className={styles.quickLinks}><h2>
                Quick Links
            </h2>
            <ul>
                <li>Features</li>
                <li>About</li>
                <li>Help</li>
            </ul>
                </div> 
                <div className={styles.contact}>
                    <h3>Connect</h3>
                    <ul>
                        <li><CiTwitter /></li>
                        <li><FiGithub /></li>
                        <li><MdOutlineEmail /></li>
                    </ul>
                </div>   
                </div>
                       
        </footer>
    );
}

        
    

