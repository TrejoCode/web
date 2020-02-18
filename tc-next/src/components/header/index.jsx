/**
 * @version 1.1.0
 * @author trejocode
 * @description Componente del Header
*/

import React from 'react';
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

const Header = () => {
    return(
        <header className="justify-center">
            <div className="container">
                <div className="left align-center auto">
                    <div className="logo">
                        <a href="/">
                            <img src="/img/logo.png" alt="trejocode logo" title="trejocode logo" className="wow fadeInLeft" />
                        </a>
                    </div>
                </div>
                <div className="right full">
                    <nav>
                        <a href="#home" className="wow fadeInLeft" data-wow-delay="0.2s">
                            INICIO
                        </a>
                        <a href="#services" className="wow fadeInLeft" data-wow-delay="0.2s">
                            SERVICIOS
                        </a>
                        <a href="#about" className="wow fadeInLeft" data-wow-delay="0.3s">
                            CÓNOCEME
                        </a>
                        <a href="#projects" className="wow fadeInLeft" data-wow-delay="0.3s">
                            PROYECTOS
                        </a>
                        <a href="#contact" className="wow fadeInLeft" data-wow-delay="0.4s">
                            CONTÁCTAME
                        </a>
                    </nav>
                    {/* <div className="social auto wow fadeInLeft" data-wow-delay="0.3s">
                        <a aria-label="LinkedIn" href=" https://www.linkedin.com/in/sergio-alejandro-trejo-cuxim-11b40a17a" rel="noopener" target="_blank">
                            <AiFillLinkedin />
                        </a>
                        <a aria-label="Facebook" href="https://www.facebook.com/TrejoCode/" rel="noopener" target="_blank">
                            <AiFillFacebook />
                        </a>
                        <a aria-label="Youtube" href="https://www.youtube.com/trejocode" rel="noopener" target="_blank">
                            <AiFillYoutube />
                        </a>
                        <a aria-label="Instagram" href="https://www.instagram.com/trejocode/" rel="noopener" target="_blank">
                            <AiFillInstagram />
                        </a>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;