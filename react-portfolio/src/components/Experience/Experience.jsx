import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";


export const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        <ul>
          <li>
            <img src={getImageUrl("skills/html.png")} />
            <h4>HTML</h4>
          </li>

          <li>
            <img src={getImageUrl("skills/css.png")} />
            <h4>HTML</h4>
          </li>

          <li>
            <img src={getImageUrl("skills/react.png")} />
            <h4>HTML</h4>
          </li>

          <li>
            <img src={getImageUrl("skills/node.png")} />
            <h4>HTML</h4>
          </li>

          <li>
            <img src={getImageUrl("skills/mongodb.png")} />
            <h4>HTML</h4>
          </li>

        
          <li>
            <img src={getImageUrl("skills/figma.png")} />
            <h4>HTML</h4>
          </li>

        </ul>

        <ul>
          <li>
            <img src={getImageUrl("history/medspa.jpg")} />
            <h3>Software Developer, Medspa Genius</h3>
            <p>Jan 2024 - May 2024</p>
          </li>

          <li>
            <img src={getImageUrl("history/bsu.png")} />
            <h3>UnderGraduate Researcher, Boise State University</h3>
            <p>Sept 2023 - Jan 2024</p>
          </li>

          <li>
            <img src={getImageUrl("history/bsu.png")} />
            <h3>Web Developer, Boise State University</h3>
            <p>May 2023 - May 2024</p>
          </li>

        </ul>
      </div>
      
    </section>
  );
};

