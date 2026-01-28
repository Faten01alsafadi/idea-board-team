import React from 'react'
import styles from "./SignUp.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CgEnter } from 'react-icons/cg';
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa6";

export default function SignUp() {
  return (
    <>
    <div  className={styles.card} >
     

    <div className=" text-white  " style={{ width:"480px", backgroundColor:"#080908",border:"1px solid #080908 ",borderRadius:"10px", padding:"20px"}}>
     

  <Form >
      <Form.Group className="mb-3 " >
        <Form.Label className='text-white  '>Email address</Form.Label>
        <Form.Control  className={styles.email} type="email" placeholder="you@example.com" />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='text-white'>Password</Form.Label>
        <Form.Control className={styles.email}  type="password" placeholder="........" />
      </Form.Group>

      <div><a href="#" style={{textDecoration:"none",color:"#9810fa",display:"flex",justifyContent:"end",padding:"15px"}}>Forgot password?</a></div>

      <Button  type="submit" style={{  backgroundColor:"#9810fa" , color: "white", border:"none",display:'flex',justifyContent:'center',margin:"auto",width:"100%"}}>
        Sign in
      </Button>
    </Form>
    <div className=" mt-3 d-flex text-white justify-content-center m-auto ">
      
          <small className="text-white"> Or continue with 
          </small>
    
          
        </div>
           <div className="d-flex justify-content-center mt-2 gap-2  ">
          <button className="btn btn-dark w-50 d-flex align-items-center justify-content-center gap-2 ">
           <FaGoogle />  Google
          </button>
          <button className="btn btn-dark w-50 d-flex align-items-center justify-content-center gap-2">
            <FiGithub /> GitHub
          </button>
        </div>

    </div>
    <p style={{color:"white",marginTop:"10px",width:"100%",display:'flex',justifyContent:"center"}}> By continuing you agree to our <a style={{textDecoration:"none",color:"#9810fa"}} href="#"> Terms of Service </a> and <a style={{textDecoration:"none",color:"#9810fa"}} href="#"> Privacy Policy</a></p>
    </div>
    </>
  );
}

 
