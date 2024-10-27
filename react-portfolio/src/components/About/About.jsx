import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
     <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>About</h2>
          <img src={getImageUrl("about/aboutImage.png")}/>
        </div>
        <div className={styles.rightCol}>
          <ul className={styles.listItems}> 
            <li>
              <img src={getImageUrl("about/cursorIcon.png")}/>
              <div className={styles.aboutText}>
                <h4>Frontend Developer</h4>
                <p>I'm a front-end developer with experince in 
                  building responsive and optimized sites</p>
              </div>
            </li>
            
            <li>
              <img src={getImageUrl("about/serverIcon.png")}/>
              <div className={styles.aboutText}>
                <h4>Frontend Developer</h4>
                <p>I have experience developing fast and optimzed 
                  back-end systems and API</p>
              </div>
            </li>
            
            <li>
              <img src={getImageUrl("about/uiIcon.png")}/>
              <div className={styles.aboutText}>
                <h4>Frontend Developer</h4>
                <p>I have designed multiple landing pages 
                  and have created design systems as well</p>
              </div>
            </li>

            
            
          </ul>
        </div>
      </div>
     </section>
  );
};
