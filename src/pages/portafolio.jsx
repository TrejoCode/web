/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Página /portafolio
*/

import React    from 'react';
import Layout   from '../components/Layout';
import projects from '../../public/data/projects.json';
import CardProjects	from '../components/cards/Project';

const PagePortafolio = () => {

	return(	
		<Layout title = "Portafolio" description = "Explora todos los proyectos que realicé o participé como desarrollador">
            <div className="page-portafolio justify-center">
                <div className="container column">
                    <div className="white-space-48"></div>
                    <h2 className="color-secondary-alt">
                        <span className="color-secondary-alt weight-bold">{`{`}</span> PORTAFOLIO
                    </h2>
                    <div className="white-space-16"></div>
                    <p className="weight-medium">
                        Esta es una colección de proyectos en los que he trabajado a lo largo de mis años como desarrollador y estudiante, esto es lo que hago y amo hacer.
                    </p>
                    <div className="white-space-16"></div>
                    <div className="portfolio">
                        <CardProjects projects = { projects } />
                    </div>
                    <div className="white-space-48"></div>
                </div>
            </div>
        </Layout>
    );

};

export default PagePortafolio;