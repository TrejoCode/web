/**
 * @version 1.0.0
 * @author Sergio - Trejocode
 * @description Página /portafolio
*/

import React from 'react';
import Layout from '../components/layout';
import projects from '../../public/data/projects';

const PagePortafolio = () => {

	return(	
		<Layout title = "Portafolio" description = "Explora todos los proyectos que realicé o participé">
            <div className="page-portafolio justify-center">
                <div className="container column">
                    <div className="white-space-48"></div>
                    <h2 className="color-primary-alt">
                        <span className="color-primary weight-bold">{`{`}</span> PORTAFOLIO
                    </h2>
                    <div className="white-space-16"></div>
                    <p className="weight-medium">
                        Esta es una colección de proyectos en los que he trabajado a lo largo de mis años como desarrollador y estudiante, esto es lo que hago y amo hacer.
                    </p>
                    <div className="white-space-16"></div>
                    <div className="portfolio">
                            { projects.map((collection, key) =>
                                <div className="column" key = { key }>
                                    <div className="white-space-16"></div>
                                    <h2 className="color-primary-alt">
                                        <span className="color-primary weight-bold">{"{"}</span> { collection.title }
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
                            )}
                    </div>
                    <div className="white-space-48"></div>
                </div>
            </div>
        </Layout>
    );

};

export default PagePortafolio;