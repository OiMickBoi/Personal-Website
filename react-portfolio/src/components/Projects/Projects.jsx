import React from 'react';

import project from '../../data/projects.json';

export const Projects = () => {
  return (
    <section>
      <h2>
        <div>{ projects.map((project, id) =>{
          
          return (
              <div key={id}> 
                <img src={project.imageSrc} alt={`Image of ${project.title}`} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{
                  projects.skills.map((skill, id) => {
                    <li key={id}>{skill}</li>;
                  })
                
                }</ul>
                <div>
                  <img src={getImageUrl(project.imageSrc)} />
                  <a href={project.demo}>Demo</a>
                  <a href={project.source}>Source</a>

                </div>
              </div>
            );
          })}
        </div>
      </h2>
    </section>
  );
}
