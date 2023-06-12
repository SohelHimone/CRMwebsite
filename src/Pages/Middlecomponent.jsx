import React from "react";
import styles from '../styles/middle.module.css';

const Middle=()=>{
    return(
        <>
        <div className={styles.middlecontainer}>
            <div className={styles.innermiddle}>
               <div className={styles.upper}>
                  <h1>Finding the Best CRM Software for Businesses in Dubai</h1>
                  <p>Are you looking for the best CRM software in Dubai? Dubai has no shortage of great CRM solutions that can help your business manage its customer relationships more effectively. We've compiled the features and benefits of the top-rated software, simplifying the decision-making process for you.</p>
               </div>
               <div className={styles.lower}>
                     <div className={styles.imagecontainer}>
                        <img src={require('../image/middleimage.webp')} alt="image"/>
                     </div>
               </div>
            </div>
        </div>
        </>
    )
}


export default Middle;