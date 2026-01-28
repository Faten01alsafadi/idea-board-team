import React from 'react';
import styles from './IdeaForm.module.css';
export default function IdeaForm() { 
    title = "Idea Board",subtitle="Capture, organize,and track your creative ideas in one place",
    formTitle ="Add New Idea",buttonText ="Add idea"}{
        const handleSubmit = (e) =>{e.preventDefault();
            if (onAddIdea) onAddIdea();
    return (
<div className={`${styles.container} container mt-5 text-white`}>
            <h1 className='fw-bold'>{title}</h1>
            <p className='text-secondary'>{subtitle}</p>
            <div className={`${styles.card} card-bg-dark border-secondary p-4 mt-4 shadow-sm `}>
                <h2 className=' h4 mb-4 fw-semibold text-white' >{formTitle}</h2>
                <form className={styles.formGroup} onSumbit={handlSubmit}>
                <div className='mb-3 text-start'>
                    <label className='form-lable small fw-bold text-uppercase'>Idea Title</label>
                    <input type="text" className="form-control bg-dark text-white border-secondary py-2" placeholder='Enter your idea..' />
                    <span className="text-secodary small mt-1 d-inline-block">100 charactres remaining</span>
                    </div>
                    <div className='mb-4 text-start'>
                    <label className='form-lable small fw-bold text-uppercase'>category (Optional)</label>
                  <select className='form-select bg-dark text-white border-secondary py-2' >
                    <option> General</option>
                    <option>Design</option>
                    <option>Coding</option>
                  </select></div>
           <button type='submit' className="btn btn-secondary w-100 py-2 fw-bold text-dark" style={{backgroundColor:'#6c757d',border:'none'}}
          >{buttonText}</button>
                </form>
            </div>
        </div>
    );
}}
