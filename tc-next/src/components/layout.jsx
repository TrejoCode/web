/**
 * @author trejocode
 * @version 1.0.0
 * @description Template general para todos las páginas
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

    const { children } = props;
    return(
        <div className="flex main column">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="robots" content="index" />
                <meta name="author" content="Trejocode" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#33c8a3" />
                <title>Trejocode - Diseño y desarrollo Web</title>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Diseño y desarrollo Web, Progressive Web Apps en Cancún || Sergio Alejandro Trejo | trejocode" />
                <meta name="keywords" content="Diseño Web, Desarrollo Web, Programación, Aplicaciones, Progressive Web App cancún" />
                {/* <!-- Open Graph --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.trejocode.com/" />
                <meta property="og:title" content="Trejocode - Diseño y Desarrollo Web en Cancún" />
                <meta property="og:image" content="https://www.trejocode.com/og.jpg" />
                <meta property="og:description" content="Diseño y desarrollo Web, Progressive Web Apps en Cancún || Sergio Alejandro Trejo | trejocode" />
                {/* <!-- IOS Meta --> */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                {/* <link rel="apple-touch-icon" href="./app/img/icons/icon-96.png" /> */}
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                {/* --- Fonts --- */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />
            </Head>
            <Header />
            { children }
            <Footer />
        </div>
    );

};

export default Layout;