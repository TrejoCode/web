/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Página de error 404
*/

import React    from 'react';
import Link     from 'next/link';
import Layout   from '../components/Layout';
import { FcDeleteDatabase } from 'react-icons/fc';

const ErrorPage = () => {

	return(	
		<Layout title = "¡Oh no! La página no existe" description = "La página solicitada no existe">
            <div className="page-error justify-center align-center">
                <div className="column justify-center align-center">
                    <FcDeleteDatabase size = { 96 } />
                    <div className="white-space-16"></div>
                    <h2>
                        ¡Oh no! La página que solicitas no existe
                    </h2>
                    <div className="white-space-32"></div>
                    <div className="btn-container">
                        <Link href = "/">
                            <a className="btn btn-primary">
                                Regresar a inicio
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
    
};

export default ErrorPage;