import React from "react";
import styles from "./Footer.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4">
            
            <div className="d-flex align-items-center mb-2">
              <img
                src="../../../src/assets/images/logo.png"
                alt="logo"
                width="40"
                height="40"
                className="me-2"
              />
              <span className="h5 mb-0 text-white">IdeaBoard</span>
            </div>
            <p>Organize your creative ideas and turn them into reality</p>
          </div>

          <div className="col-md-4 mb-4 ">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#features" className="text-muted text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#help" className="text-muted text-decoration-none">
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-white">Connect</h5>
            <div className="d-flex gap-3 fs-5 ">
              <a
                href="#"
                className="text-white p-2 rounded bg-secondary d-flex gap-3  align-items-center justify-content-center "
              >
                <CiTwitter />
              </a>
              <a
                href="#"
                className="text-white p-2  rounded bg-secondary d-flex gap-3  align-items-center justify-content-center"
              >
                <FiGithub />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-white p-2  rounded bg-secondary d-flex gap-3 align-items-center justify-content-center"
              >
                <MdOutlineEmail />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center mb-0  p-2">
          @ 2026 IdeaBoard. Built with React + Vite
        </p>
      </div>
    </footer>
  );
  // <footer className={styles.footer}>
  //      <div className={styles.container}>
  //     <div className={styles.logobar} >
  //         <div className={styles.logText}>
  //                     <img className={styles.logo} src="../../../src/assets/images/logo.png" alt="logo" />
  //                 <span>  IdeaBoard</span></div>
  //                   <p>Organize your creative ideas and turn them into reality</p>
  //                 </div>
  //     <div className={styles.quickLinks}><h2>
  //         Quick Links
  //     </h2>
  //     <ul>
  //         <li>Features</li>
  //         <li>About</li>
  //         <li>Help</li>
  //     </ul>
  //         </div>
  //         <div className={styles.contact}>
  //             <h3>Connect</h3>
  //             <ul>
  //                 <li><CiTwitter /></li>
  //                 <li><FiGithub /></li>
  //                 <li><MdOutlineEmail /></li>
  //             </ul>
  //         </div>
  //         </div>
  //         <p>@2026 IdeaBoard Buit with React+Vite</p>
  // </footer>
}
