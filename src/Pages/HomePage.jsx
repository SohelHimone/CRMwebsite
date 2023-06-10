import React from "react";
import styles from '../styles/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Home=()=>{
    return(
        <>
        <div className={styles.home_contaimer}>
            <div className={styles.innercontainer}>
               <div className={styles.homecontent}>
                <div className={styles.content}>
                <span>Best CRM Software in Dubai - 2023</span>
                 <p>Are you looking for the best CRM software in Dubai?
                     Our CRM solutions have satisfied over 1000
                     customers in the region, making us a top-rated
                     choice. Discover our features and pricing to see 
                     why we stand out among the competition as the best CRM 
                     software in Dubai.</p>
                     <ul>
                        <li> <FontAwesomeIcon icon={faCheckCircle} style={{ color: "60a5e6" ,marginRight:"4px"}}/> Lead/Pipeline Management</li>
                        <li> <FontAwesomeIcon icon={faCheckCircle} style={{ color: "60a5e6" ,marginRight:"4px"}}/> Customization</li>
                        <li> <FontAwesomeIcon icon={faCheckCircle} style={{ color: "60a5e6" ,marginRight:"4px"}}/>Tracks prospects, clients & deals</li>
                     </ul>
                     <button className={styles.homebtn}>BOOK FREE DEMO NOW!<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} /></button>
                </div>
                 
               </div>
               <div className={styles.animation}>
                     
               </div>
            </div>

        </div>

        </>
    )
}

export default Home;