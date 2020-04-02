/**
 * @version 1.0.0
 * @author Sergio - Trejocode
 * @description Componente <Layout />
*/

import React    from 'react';
import Head     from 'next/head';
import Router       from 'next/router';
import Header   from '../components/header';
import Footer   from '../components/footer';
import NProgress    from 'nprogress';
import * as gtag    from '../utils/gtag';

// Hoja de estilos
import '../sass/style.scss';


/**
 * Escuchar los eventos del Router para controlar el Loader
*/
Router.events.on('routeChangeStart', () => NProgress.start() );
Router.events.on('routeChangeComplete', (url) => { 
    NProgress.done();
    gtag.pageview(url);
});
Router.events.on('routeChangeError', () => NProgress.done() ); 


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
                <meta name = "robots"         content="index" />
                <meta name = "author"         content="Trejocode" />
                <link rel  = "manifest"       href="/manifest.json" />
                <meta name = "theme-color"    content="#33c8a3" />
                <meta httpEquiv = "X-UA-Compatible" content = "ie=edge" />
                <title> { title ? title + " - Trejocode" : "Trejocode - Diseño y desarrollo Web"} </title>
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content = { keywords ? keywords : "Diseño Web, Desarrollo Web, Programación, Aplicaciones, Progressive Web App cancún" } />
                <meta name="description" content = { description ? description : "Diseño y desarrollo Web, Progressive Web Apps y desarrollo de Software en Cancún | Trejocode" } />
                {/* <!-- Open Graph --> */}
                <meta property="og:type"    content="website" />
                <meta property="og:url"     content="https://www.trejocode.com/" />
                <meta property="og:image"   content="https://res.cloudinary.com/trejocode/image/upload/v1585867983/Trejocode/og_ccf7n6.jpg" />
                <meta property="og:title"   content = { title ? title + " - Trejocode" : "Trejocode - Diseño y desarrollo Web" } />
                <meta property="og:description" content = { description ? description : "Diseño y desarrollo Web, Progressive Web Apps y desarrollo de Software en Cancún | Trejocode" } />
                {/* <!-- IOS Meta --> */}
                {/* -- IOS Meta -- */}
                <link rel  = "apple-touch-icon"                      href="/img/icons/icon-96.png" />
                <meta name = "apple-mobile-web-app-capable"          content="yes" />
                <meta name = "apple-mobile-web-app-title"            content = "Trejocode - Diseño y desarrollo Web" />
                <meta name = "apple-mobile-web-app-status-bar-style" content="black-translucent" />
                {/* --- Fonts --- */}
                <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,700&display=swap" rel="stylesheet" />
                {/* --- Twitter --- */}
                <meta name = "twitter:card"           content = "summary" />
                <meta name = "twitter:url"            content = "https://www.trejocode.com" />
                <meta name = "twitter:title"          content = { title ? title + " - Trejocode" : "Trejocode - Diseño y desarrollo Web" } />
                <meta name = "twitter:image"          content = "https://res.cloudinary.com/trejocode/image/upload/v1585867983/Trejocode/og_ccf7n6.jpg" />
                <meta name = "twitter:description"    content = { description ? description : "Diseño y desarrollo Web, Progressive Web Apps y desarrollo de Software en Cancún | Trejocode" } />
            </Head>
            <Header />
            { children }
            <Footer />
        </div>
    );

};

export default Layout;