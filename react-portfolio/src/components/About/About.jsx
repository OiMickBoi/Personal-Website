import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
     <section className={styles.container} id="about">
       <h2 className={styles.title}>About</h2>
       <div className={styles.content}>
         <img
           src={getImageUrl("about/aboutImage.png")}
           alt="Sitting with a laptop"
           className={styles.aboutImage}
         />
           
         <ul className={styles.aboutItems}>
           <li className={styles.aboutItem}>
             <img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />

               
             <div className={styles.aboutItemText}>
               <h3>FrontEnd Developer</h3>
               <p>I'm a frontend developer with experience in building 
                 responsive and optmized sites</p>
             </div>
           </li>

           <li className={styles.aboutItem}>
             <img src={getImageUrl("about/serverIcon.png")} alt="ServerIcon"/>
             <div className={styles.aboutItemText}>
               <h3>Backend Developer</h3>
               <p>I have experience developing fast and optimised APIs</p>
             </div>
           </li>

           <li className={styles.aboutItem}>
             <img src={getImageUrl("about/uiIcon.png")} alt="uiIcon"/>
             <div className={styles.aboutItemText}>
               <h3>UI Designer</h3>
               <p>I have designed multiple landing pages and systems as well</p>
             </div>
           </li>
         
         </ul>
       </div>
     </section>
  );
};
