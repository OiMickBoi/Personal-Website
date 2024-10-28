import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
     <section className={styles.container} id="about">
       <h2 className={styles.title}>About</h2>
       <div className={styles.content}>
         <img
           src={getImageUrl("about/aboutImage1.png")}
           alt="Sitting with a laptop"
           className={styles.aboutImage}
         />
           
         <ul className={styles.aboutItems}>
           <li className={styles.aboutItem}>
             <img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />

               
             <div className={styles.aboutItemText}>
               <h3>FrontEnd Developer</h3>
               <p>I'm a frontend developer with experience in building 
                 responsive and optmized sites for companies like Micron</p>
             </div>
           </li>

           <li className={styles.aboutItem}>
             <img src={getImageUrl("about/serverIcon.png")} alt="ServerIcon"/>
             <div className={styles.aboutItemText}>
               <h3>Backend Developer</h3>
               <p>With a B.S. from Boise I have experience developing fast and optimised backend
                 apps in Java</p>
             </div>
           </li>

           <li className={styles.aboutItem}>
             <img src={getImageUrl("about/uiIcon.png")} alt="uiIcon"/>
             <div className={styles.aboutItemText}>
               <h3>Quantum Computing</h3>
               <p>I am currently teaching myself quantum computing and developing an app to visualize quantum states</p>
             </div>
           </li>
         
         </ul>
       </div>
     </section>
  );
};
