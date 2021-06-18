import React from 'react';

const ProjectCard = ({ project, toggled, handleClick, index }) => {

    let displayedContent = !toggled ? (
        <article className="single-project" onClick={(e) => handleClick(e, index)}>
            <div className="snakeLists project-title">{project.title}</div>
            <div className="clone" style={{ backgroundImage: `url(${project.codesnip})` }}></div>
        </article>
    ) : (
        <article className="selected-project"  onClick={(e) => handleClick(e, index)}>
            <div className="description">
                <h2>{project.title}</h2>
                <p>{project.description.text}</p>
                <br></br><h2><a href={project.description.link}>check it out.</a></h2>
            </div>

            <div className="snippet">
                <img src={project.img.src} alt={project.img.alt}/>
            </div>
        </article>
    );

    return (
        <>
            {displayedContent}
        </>
    );
}

export default ProjectCard;