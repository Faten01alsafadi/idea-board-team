import React from 'react';
import styles from './IdeaForm.module.css';
export default function IdeaForm() {
    return (
        <div className={`${styles.container} container-fluid bg-black min-vh-100 py-5 text-white text-center m-auto`}>
            <h1>Idea Board</h1>
            <p className={`${styles.par} text-#ededd mb-4`}>Capture, organize,and track your creative ideas in one place</p>
            <div className={`${styles.card} card-bg-black  p-4 rounded-4 shadow-sm mx-500 m-5-auto text-start`}>
                <h2 className={`${styles.h2} text-white`}>Add New Idea </h2>
                <form className={`${styles.formGroup} mb-3 text-start g-2 d-flex flex-column text-white `}>
                    <label className={`${styles.lable} form-lable small text-secondary fw-bold text-white`}>Idea Title</label>
                    <input type="text" className='form-contorl bg-dark text-white border-secondary py-2 rounded-2 ps-2' placeholder='Enter your idea..' />
                    <span className={`${styles.inform} form-text text- small d-block mt-1 mb-2`}>100 charactres remaining</span>
                    <label>category (Optional)</label>
                  <select className={`${styles.select}form-contorl bg-dark text-white border-secondary py-2 rounded-2 mb-3 ps-2`} >
                    <option> General</option>
                     <option> About</option>
                      <option> Service</option>
                  </select>
           <button className={`${styles.actionBtn} btn btn-secondary w-100 py-2 fw-bold border-none bg-dark`}>Add idea</button>
                </form>
            </div>
        </div>
    );
}
