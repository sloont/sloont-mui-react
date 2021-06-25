import React, { useState } from 'react';

import './resources/projects.css';
import { projectDetails } from './resources/projectDetailsObject';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsArray = Object.keys(projectDetails);

    const initialState = new Array(projectsArray.length).fill(false);
   
    console.log(initialState);

    const [toggleArray, setToggleArray] = useState(initialState);

    const handleClick = (e, index) => {
        setToggleArray((prevState) => {
            const newToggles = [];
            if (prevState[index]) {
                for (let i = 0; i < toggleArray.length; i++) {
                    newToggles.push(false);
                }
            }

            else {
                for (let i = 0; i < toggleArray.length; i++) {
                    if (i === index) newToggles.push(true);
                    else newToggles.push(false);
                }
                
                
            }
            return newToggles;
        });
        
        console.log(index)
    }
    console.log(toggleArray);
    return (
        
            <section className="projects">
                {projectsArray.map((project, index) => (
                    <ProjectCard 
                        toggled={toggleArray[index]} 
                        key={index} 
                        project={projectDetails[project]}
                        handleClick={handleClick}
                        index={index}
                    />)
                )}
            </section>
                
    
    )
}

export default Projects;