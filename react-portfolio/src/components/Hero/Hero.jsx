import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Josh!</h1>
        <div className={styles.description}>

        <p>Hey! I'm Josh Boyle, a software engineer who loves 
            using technology to unravel interesting puzzles!</p> 
          {/* 
          
          
            whether that's optimizing Pokémon team compositions 
            through machine learning or building scalable web 
            applications. With a foundation in Java and modern 
            web frameworks like React and Angular, 
            I bridge the gap between robust backend systems and 
            intuitive user experiences.</p>
        <p>Currently, I'm diving into the fascinating world of quantum computing 
            while pursuing my passion for data science and machine learning. 
            My goal? To harness these technologies to tackle real-world challenges 
            and eventually launch ventures that transform traditional industries. 
            When I'm not coding, you'll find me documenting my technical adventures 
            through dev logs and exploring new ways to apply AI to both practical 
            problems and fun side projects.</p>

        <p>Want to see what I'm building? Check out my latest projects below or join 
            me on my quantum computing journey through my dev logs.</p>
          */}
        </div>
        <a href="mailto:joshuarb917@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage1.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
     </section>
  );
};
