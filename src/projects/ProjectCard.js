import React from 'react';
import Projects from './resources/projectDetailsObject'

const ProjectCard = ({ project, toggled, handleClick, index }) => {
    console.log(project);
    console.log(toggled);
    console.log(index);

    let displayedContent = !toggled ? (
        <article className="single-project" data-id={index} onClick={(e) => handleClick(e, index)}>
            <div className="snakeLists project-title">{Projects[project.id].title}</div>
            <div className="single-project-clone-snake clone"></div>
        </article>
    ) : (
        <article className="selected-project" data-id={index} onClick={(e) => handleClick(e)}>
            <div className="description">
                <h2>{Projects[project.id].title}</h2>
                <p>{Projects[project.id].description.text}</p>
                <br></br><a href={Projects[project.id].description.link}><h2>check it out.</h2></a>
            </div>

            <div className="snippet">
                <img src={Projects[project.id].img.src} alt={Projects[project.id].img.alt}/>
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