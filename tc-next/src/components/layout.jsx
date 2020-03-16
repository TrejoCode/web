/**
 * @version 1.0.0
 * @author Sergio - Trejocode
 * @description Componente <Layout />
*/

import React    from 'react';
import Head     from 'next/head';
import Header   from '../components/header';
import Footer   from '../components/footer';

// Hoja de estilos
import '../sass/style.scss';

/**
 *  @param: {String} title: "Título"
 *  @param: {String} description: "Descripción de la página"
 *  @param: {String} keywords: "Etiquetas, para, SEO"
*/

const Layout = (props) => {

    const { title, description, keywords, children } = props;

    return(
        <div className="flex main column">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="robots" content="index" />
                <meta name="author" content="Trejocode" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#33c8a3" />
                <title> { title ? title + " - Trejocode" : "Trejocode - Diseño y desarrollo Web"} </title>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content = { keywords ? keywords : "Diseño Web, Desarrollo Web, Programación, Aplicaciones, Progressive Web App cancún" } />
                <meta name="description" content = { description ? description : "Diseño y desarrollo Web, Progressive Web Apps y desarrollo de Software en Cancún | Trejocode" } />
                {/* <!-- Open Graph --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.trejocode.com/" />
                <meta property="og:image" content="https://www.trejocode.com/og.jpg" />
                <meta property="og:title" content = { title ? title + " - Trejocode" : "Trejocode - Diseño y desarrollo Web"} />
                <meta property="og:description" content = { description ? description : "Diseño y desarrollo Web, Progressive Web Apps y desarrollo de Software en Cancún | Trejocode" } />
                {/* <!-- IOS Meta --> */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                {/* <link rel="apple-touch-icon" href="./app/img/icons/icon-96.png" /> */}
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                {/* --- Fonts --- */}
                <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,700&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            { children }
            <Footer />
        </div>
    );

};

export default Layout;