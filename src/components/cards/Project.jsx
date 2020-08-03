/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Componente <CardProjects />
*/

import React from 'react';

const CardProjects = ({projects, index = null, limit}) => {

    if (index === 0 || index) {
        return (
            projects[index].projects.map((project, key) => key < limit &&
                <div className="project project-aqua column wow fadeInLeft" data-wow-delay="100ms" key = { key }>
                    <div className="image responsive-img justify-center align-center">
                        <img src = { project.img } alt = { project.name } title = { project.name } />
                    </div>
                    <div className="white-space-16"></div>
                    <div className="information column align-center">
                        <div className="title full column">
                            <div className="web full justify-center">
                                <a className="color-primary-alt text-center font-large weight-semi" href= { project.url } target="_blank" rel="noopener">
                                    { project.name }
                                </a>
                            </div>
                        </div>
                        <div className="description full">
                            { project.services.map((service, index) =>
                                <h5 className="color-gray font-tiny" key = { index }>
                                    { service }
                                </h5>
                            )}
                        </div>
                    </div>
                    <div className="white-space-16"></div>
                </div>
            )
        );
    } else {
        return(
            projects.map((collection, key) =>
                <div className="column" key = { key }>
                    <div className="white-space-16"></div>
                    <h2 className="color-secondary-alt">
                        <span className="color-secondary-alt weight-bold">{"{"}</span> { collection.title }
                    </h2>
                    <div className="white-space-16"></div>
                    <div className="project-container wrap"> 
                        { collection.projects.map((project, index) => 
                            <div className="project project-aqua column wow fadeInLeft" data-wow-delay="100ms" key = { index }>
                                <div className="image responsive-img justify-center align-center">
                                    <img src = { project.img } alt = { project.title } title = { project.title } />
                                </div>
                                <div className="white-space-16"></div>
                                <div className="information column align-center">
                                    <div className="title full column">
                                        <div className="web full justify-center">
                                            <a className="color-primary-alt text-center font-large weight-semi" href= { project.url } target="_blank" rel="noopener">
                                                { project.name }
                                            </a>
                                        </div>
                                    </div>
                                    <div className="description full">
                                        { project.services.map((service, index) =>
                                            <h5 className="color-gray font-tiny" key = { index }>
                                                { service }
                                            </h5>
                                        )}
                                    </div>
                                </div>
                                <div className="white-space-16"></div>
                            </div>   
                        )}
                    </div>
                </div>
            )
        );
    }

};

export default CardProjects;