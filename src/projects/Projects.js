import React, { useState, useRef, useEffect } from 'react';

import './resources/projects.css';
import { projectDetails } from './resources/projectDetailsObject';
import ProjectCard from './ProjectCard';


const offset = (el) => {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}



const Projects = () => {
    const projectsArray = Object.keys(projectDetails);

    const initialState = new Array(projectsArray.length).fill(false);

    const [toggleArray, setToggleArray] = useState(initialState);
    const [scrollY, setScrollY] = useState(0);

    const projectsRef = useRef([]);

    const scrollTo = (index) => {
        const rect = projectsRef.current[index].getBoundingClientRect();
       
        setScrollY(rect.y - 74 * index - 72); //size of collapsed projects + padding & gap - 4.5 rem
    }

    //
    useEffect(() => {
        // const ratio = window.devicePixelRatio;
        
        window.scrollTo(0, scrollY);
        
    }, [scrollY, toggleArray]);

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
        scrollTo(index);
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