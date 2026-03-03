
import React , {useState} from'react';
import styles from './IdeaForm.module.css';
export default function IdeaForm({
title = "Idea Board",
subtitle = "Capture, organize,and track your creative ideas in one place",
formTitle = "Add New Idea",
buttonText = "Add Idea"}){
const [ideaTitle, setIdeaTitle] = useState('');
const [category, setCategory] = useState('General');
const handleSubmit = async (e) => {
    e.preventDefault();
    const ideaData ={title:ideaTitle,type:category,status:'active'};
    try{
        const response = await 
        fetch('http://localhost:3001/ideas' ,{
            method:'post', headers:{'Content-Type':' application/json'},
            body: JSON.stringify(ideaData)});
    
        if (response.ok){
            const result = await response.json();
            console.log('Success:',result);
            setIdeaTitle('');
            setCategory('General');
            alert('Idea added successfuly!');}
        else{
            console.error('Submission failed')}}
        catch (error){
            console.error('Error:',error)
        }}
    
    return (
        <div className={`${styles.container} container-fluid bg-black min-vh-100 py-5 text-white text-center m-auto`}>
            <h1>{title}</h1>
            <p className={`${styles.par} text-#ededd mb-4`}>{subtitle}</p>
            <div className={`${styles.card} card-bg-black  p-4 rounded-4 shadow-sm mx-500 m-5-auto text-start`}>
                <h2 className={`${styles.h2} text-white`}>{formTitle}</h2>
                <form onSubmit={handleSubmit} className={`${styles.formGroup} mb-3 text-start g-2 d-flex flex-column text-white `}>
                    <label className={`${styles.lable} form-lable small text-secondary fw-bold text-white`}>Idea Title</label>
                    <input type="text" className='form-control bg-dark text-white border-secondary py-2 rounded-2 ps-2' placeholder='Enter your idea..' value={ideaTitle} onChange ={(e)=>setIdeaTitle(e.target.value)}
                    required/>
                    <span className={`${styles.inform} form-text text- small d-block mt-1 mb-2`}>100 characters remaining</span>
                    <label>category (Optional)</label>
                  <select className={`${styles.select}form-contorl bg-dark text-white border-secondary py-2 rounded-2 mb-3 ps-2`}value={category} 
                  onChange={(e) => setCategory(e.target.value)}>
                    <option value="General"> General</option>
                     <option value="Work"> Work</option>
                      <option value="Personal"> Personal</option>
                      <option value="Learning"> Learning</option>
                      <option value="Creative"> Creative</option>
                  </select>
           <button type="submit" className={`${styles.actionBtn} btn btn-secondary w-100 py-2 fw-bold border-none bg-dark`}>{buttonText}</button>
                </form>
            </div>
        </div>
    );
}
