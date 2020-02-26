/**
 * @version 1.0.0
 * @author Sergio - Trejocode
 * @description Componente del <Header />
*/

import React from 'react';
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Header = () => {
    return(
        <header className="justify-center">
            <div className="container">
                <div className="left row align-center auto">
                    <div className="logo">
                        <a href="/">
                            <img src="/img/logo.png" alt="Trejocode logo" title="Trejocode logo" className="wow fadeInLeft" />
                        </a>
                    </div>
                </div>
                <div className="right full">
                    <nav>
                        <a href="#home" className="color-secondary weight-semi wow fadeInLeft" data-wow-delay="200ms">
                            Inicio
                        </a>
                        <a href="#services" className="color-secondary weight-semi wow fadeInLeft" data-wow-delay="200ms">
                            Servicios
                        </a>
                        <a href="#about" className="color-secondary weight-semi wow fadeInLeft" data-wow-delay="250ms">
                            Cónoceme
                        </a>
                        <a href="#projects" className="color-secondary weight-semi wow fadeInLeft" data-wow-delay="250ms">
                            Proyectos
                        </a>
                        <a href="#contact" className="color-secondary weight-semi wow fadeInLeft" data-wow-delay="300ms">
                            Contáctame
                        </a>
                    </nav>
                    <div className="social auto wow fadeInLeft">
                        <a aria-label="LinkedIn" data-wow-delay="350ms" rel="noopener" target="_blank" className="wow fadeIn font-small"
                        href="https://www.linkedin.com/in/sergio-alejandro-trejo-cuxim-11b40a17a">
                            <AiFillLinkedin />
                        </a>
                        <a aria-label="Facebook" data-wow-delay="350ms" rel="noopener" target="_blank" className="wow fadeIn font-small"
                        href="https://www.facebook.com/TrejoCode/">
                            <AiFillFacebook />
                        </a>
                        <a aria-label="Youtube" data-wow-delay="400ms" rel="noopener" target="_blank" className="wow fadeIn font-small"
                        href="https://www.youtube.com/trejocode">
                            <AiFillYoutube />
                        </a>
                        <a aria-label="Instagram" data-wow-delay="400ms" rel="noopener" target="_blank" className="wow fadeIn font-small"
                        href="https://www.instagram.com/trejocode/" >
                            <AiFillInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;