import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import DirectionsIcon from '@material-ui/icons/Directions';

const ProjectCard = React.forwardRef(({ project, toggled, handleClick, index }, ref) => {

    const matches = useMediaQuery('(max-width:480px)');

    let displayedContent = !toggled ? (
        <article ref={ref} className="single-project" onClick={(e) => handleClick(e, index)}>
            <div className="snakeLists project-title">{project.title}</div>
            <div className="clone" style={{ backgroundImage: `url(${project.codesnip})` }}></div>
        </article>
    ) : !matches ? (
        <article ref={ref} className="selected-project"  onClick={(e) => handleClick(e, index)}>
            <div className="description">
                <div>
                    <div className="selected-project-header"><h2>{project.title}</h2><a href={project.description.link}><DirectionsIcon /></a></div>
                    <p>{project.description.text}</p>
                </div>
            </div>

            <div className="snippet">
                <img src={project.img.src} alt={project.img.alt} />
            </div>
        </article>
    ) : (
        <article ref={ref} className="selected-project"  onClick={(e) => handleClick(e, index)}>
            <div className="snippet">
                <img src={project.img.src} alt={project.img.alt} />
            </div>

            <div className="description">             
                    <div className="selected-project-header"><h2>{project.title}</h2><a href={project.description.link}><DirectionsIcon /></a></div>
                    <p>{project.description.text}</p>
            </div>

            
        </article>
    );

    return (
        <>
            {displayedContent}
        </>
    );
});

export default ProjectCard;