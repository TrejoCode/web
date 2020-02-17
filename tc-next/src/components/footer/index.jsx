/**
 * @version 1.0.0
 * @author trejocode
 * @description Componente del Footer
*/

import React from 'react';

const Footer = () => {

    return(
        <footer className="column">
            <div className="footer-top justify-center">
                <div className="container">
                    <div className="row-responsive full">
                        <div className="column full">
                            <div className="white-space-24"></div>
                            <div className="logo justify-center align-center wow fadeInDown">
                                <a href="/" className="responsive-img">
                                    <img src="/img/logo-white.png" alt="trejocode logo blanco" title="trejocode logo blanco" />
                                </a>
                            </div>
                            <div className="white-space-24"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;