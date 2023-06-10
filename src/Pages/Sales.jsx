import React from "react";
import styles from '../styles/sales.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Sales=()=>{
    return(
        <>
        <div className={styles.sales_conatiner}>
            <div className={styles.heading}>
                  <div className={styles.headingcontent}>
                    <span>Dubai's</span>
                     <h1>Best Sales Management CRM</h1>
                      <p>Easily organize and track your sales process with the best Sales Management CRM. Take control</p>
                      <p>of your business and increase efficiency with our platform!</p>
                  </div>
            </div>
            <div className={styles.innercontainer}>
                <div className={styles.left}>
                     <div className={styles.cardleft}>
                        <div className={styles.upperlayer}>
                           <span>Cityman Group</span>
                           <span className={styles.socialname}>Linkedin</span>
                        </div>
                        <div className={styles.cardcontent}>
                              <p>Excellent customer service,we are happy, Thanks for Providing the best solution.</p>
                              <span>April 19, 2022</span>
                        </div>

                     </div>


                     <div className={styles.cardleft}>
                        <div className={styles.upperlayer}>
                           <span>Precise Techno Tooling</span>
                           <span className={styles.socialname}>Google</span>
                        </div>
                        <div className={styles.cardcontent}>
                              <p>We recently purchased Sales CRM from Peniel Technology, Experienced Technical people, Definitely we will recommend them.</p>
                              <span>Aug 10, 2021</span>
                        </div>

                     </div>



                     <div className={styles.cardleft}>
                        <div className={styles.upperlayer}>
                           <span>Esan Radhakrishnan</span>
                           <span className={styles.socialname}>Facebook</span>
                        </div>
                        <div className={styles.cardcontent}>
                              <p>Excellent team, handles customer promptly will never key them down.</p>
                              <span>Oct 6, 2019</span>
                        </div>

                     </div>
                </div>
                <div className={styles.right}>
                      <div className={styles.cardright}>
                        <div className={styles.cardrightleft}>
                            <div className={styles.square}>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize:'30px' }} />
                            </div>
                            <div className={styles.line}>

                            </div>
                        </div>
                        <div className={styles.cardrightrirght}>
                             <div className={styles.cardrightcontent}>
                                 <span>Easy</span>
                                 <h3>1. Usability</h3>
                                 <p>CRM is the customer relationship management software in UAE you can keep track of your clients and offer ongoing support as needed.</p>
                             </div>
                        </div>

                      </div>


                      <div className={styles.cardright}>
                        <div className={styles.cardrightleft}>
                            <div className={styles.square}>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize:'30px' }} />
                            </div>
                            <div className={styles.line}>

                            </div>
                        </div>
                        <div className={styles.cardrightrirght}>
                             <div className={styles.cardrightcontent}>
                                 <span>Highly</span>
                                 <h3>2. Scalable</h3>
                                 <p>It is the best CRM software for both small and large organizations, and it will assist you in establishing a loyal clientele and boosting your revenue.</p>
                             </div>
                        </div>

                      </div>



                      <div className={styles.cardright}>
                        <div className={styles.cardrightleft}>
                            <div className={styles.square}>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize:'30px' }} />
                            </div>
                            <div className={styles.line}>

                            </div>
                        </div>
                        <div className={styles.cardrightrirght}>
                             <div className={styles.cardrightcontent}>
                                 <span>Advanced</span>
                                 <h3>3. Reporting and Analytics</h3>
                                 <p>This software uses the information you give it to create real-time insight that can be used.</p>
                             </div>
                        </div>

                      </div>



                      <div className={styles.cardright}>
                        <div className={styles.cardrightleft}>
                            <div className={styles.square}>
                            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize:'30px' }} />
                            </div>
                            <div className={styles.line}>

                            </div>
                        </div>
                        <div className={styles.cardrightrirght}>
                             <div className={styles.cardrightcontent}>
                                 <span>Possible</span>
                                 <h3>4. Integration</h3>
                                 <p>The highly integrable software Elate CRM may be quickly and simply connected with any other tool.</p>
                             </div>
                        </div>

                      </div>
                </div>

            </div>
        </div>
        </>
    )
}


export default Sales;