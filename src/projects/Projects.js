import React, { useState, useRef, useEffect } from 'react';

import './resources/projects.css';
import { projectDetails } from './resources/projectDetailsObject';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsArray = Object.keys(projectDetails);

    const initialState = new Array(projectsArray.length).fill(false);

    const [toggleArray, setToggleArray] = useState(initialState);

    const projectsRef = useRef([]);

    useEffect(() => {
        
        const index = toggleArray.indexOf(true);
        if (index !== -1) {
            const rect = projectsRef.current[index].getBoundingClientRect();
            const y = rect.y;
            
            window.scrollTo({ left: 0, top: y - 67 + window.scrollY, behavior: 'smooth' });//appBar height + 8
            projectsRef.current[index].scrollTo(0,0);
        } else {
            window.scrollTo(0,0);
        }
    
    }, [toggleArray]);

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
                    if (i === index) {
                        
                        newToggles.push(true);
                        
                    }
                    else newToggles.push(false);
                }
                
                
            }
            
            return newToggles;
        });
        
    }
    
    return (
        
            <section className="projects">
                {projectsArray.map((project, index) => (
                    <ProjectCard
                        ref={element => {
                            projectsRef.current[index] = element;
                        }}
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