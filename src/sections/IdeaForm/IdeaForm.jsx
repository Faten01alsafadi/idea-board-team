import React from 'react';
import styles from './IdeaForm.module.css';
export default function IdeaForm() {
    return (
        <div className={styles.container}>
            <h1>Idea Board</h1>
            <p>Capture, organize,and track your creative ideas in one place</p>
            <div className={styles.card}>
                <h2>Add New Idea </h2>
                {/* <h3>Idea Title</h3> */}
                <form className={styles.formGroup}>
                    <label>Idea Title</label>
                    <input type="text" placeholder='Enter your idea..' />
                    <span className={styles.inform}>100 charactres remaining</span>
                    <label>category (Optional)</label>
                  <select >
                    <option> General</option>
                  </select>
           <button className={styles.actionBtn}>Add idea</button>
                </form>
            </div>
        </div>
    );
}
