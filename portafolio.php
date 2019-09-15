<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="robots" content="index" />
    <meta name="author" content="trejocode" />
    <link rel="manifest" href="./manifest.json" />
    <meta name="theme-color" content="#33c8a3" />
    <title>Trejocode - Portafolio</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
    <link rel="stylesheet" href="app/css/style.min.css" media="screen" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Diseño y desarrollo Web, Progressive Web Apps en Cancún || Sergio Alejandro Trejo | trejocode" />
    <meta name="keywords" content="Diseño Web, Desarrollo Web, Programación, Aplicaciones, Progressive Web App cancún" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trejocode.com/" />
    <meta property="og:title" content="Trejocode - Diseño y Desarrollo Web en Cancún" />
    <meta property="og:image" content="https://www.trejocode.com/og.jpg" />
    <meta property="og:description" content="Diseño y desarrollo Web, Progressive Web Apps en Cancún || Sergio Alejandro Trejo | trejocode" />
    <!-- IOS Meta -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="./app/img/icons/icon-96.png /">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</head>

<body>

    <!-- Cargar Facebook SDK  -->
    <div id="fb-root"></div>
    <script defer>
        window.fbAsyncInit = function() {
            FB.init({
                xfbml: true,
                version: 'v3.2'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>

    <!-- Messenger Chat -->
    <div class="fb-customerchat" attribution=setup_tool page_id="664372843657624" theme_color="#33c8a3" logged_in_greeting="Hola, ¿cómo puedo ayudarte? 👋" logged_out_greeting="Hola, ¿cómo puedo ayudarte? 👋">
    </div>

    <div class="main flex">
        <div class="column">
            <header class="justify-center">
                <div class="container">
                    <div class="left align-center auto">
                        <div class="logo">
                            <a href="/">
                                <img src="./app/img/logo.png" alt="trejocode logo" title="trejocode logo" class="wow fadeInLeft" />
                            </a>
                        </div>
                    </div>
                    <div class="right align-center">
                        <nav>
                            <a href="/" class="wow fadeInLeft" data-wow-delay="0.2s">
                                REGRESAR A INICIO
                            </a>
                            <a href="#contact" class="wow fadeInLeft" data-wow-delay="0.4s">
                                CONTÁCTAME
                            </a>
                        </nav>
                        <div class="social auto wow fadeInLeft" data-wow-delay="0.3s">
                            <a href=" https://www.linkedin.com/in/sergio-alejandro-trejo-cuxim-11b40a17a" rel="follow" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/TrejoCode/" rel="follow" target="_blank">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://www.youtube.com/trejocode" rel="follow" target="_blank">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/trejocode/" rel="follow" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div class="full-portfolio justify-center">
                <div class="container column">
                    <div class="white-space-64"></div>
                    <h2 class="color-darkAqua">
                        <span class="color-aqua weight-bold">{</span> PORTAFOLIO
                    </h2>
                    <div class="white-space-16"></div>
                    <p>
                        <b>Esta es una colección de proyectos en los que he trabajado a lo largo de mis años como desarrollador y estudiante, esto es lo que hago y amo hacer.</b>
                    </p>
                    <div class="white-space-64"></div>
                    <h2 class="color-darkAqua">
                        <span class="color-aqua weight-bold">{</span> DISEÑO WEB
                    </h2>
                    <div class="white-space-32"></div>
                    <div class="project-container row-responsive">
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/em.png" alt="EM-Sistemas" title="EM-Sistemas" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        EM-Sistemas
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.em-sistemas.net/" target="_blank" rel="nofollow">
                                        www.em-sistemas.net
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/bece.png" alt="BéCé Online" title="BéCé Online" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        BéCé Online
                                    </h2>
                                    <a class="color-gray font-tiny" href="http://test.dwitmexico.com/" target="_blank" rel="nofollow">
                                        www.beceonlie.com
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Responsive Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                    </div>
                    <div class="project-container row-responsive">
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s" id="upqroo">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/upqroo.png" alt="Universidad Politécnica de Quintana Roo" title="Universidad Politécnica de Quintana Roo" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Universidad Politécnica de Quinana Roo
                                    </h2>
                                    <a class="color-gray font-tiny" href="http://new.upqroo.edu.mx/" target="_blank" rel="nofollow">
                                        new.upqroo.edu.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s" id="california">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/LogoCF.png" alt="California Fitness" title="California Fitness" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        California Fitness
                                    </h2>
                                    <a class="color-gray font-tiny" href="http://www.californiafitness.com.mx/" target="_blank" rel="nofollow">
                                        www.californiafitness.com.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Diseño Responsivo
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                    </div>
                    <div class="project-container row-responsive">
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.2s" id="chicle">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/chicle.png" alt="Universidad Politécnica de Quintana Roo" title="Universidad Politécnica de Quintana Roo" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Chicle y Pega
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.chicleypegacreativo.com/" target="_blank" rel="nofollow">
                                        www.chicleypegacreativo.com
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Responsivo
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s" id="upqroo">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/delaluz.png" alt="Universidad Politécnica de Quintana Roo" title="Universidad Politécnica de Quintana Roo" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Tecnologías de la Luz
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.tecnologiasdelaluz.com.mx/" target="_blank" rel="nofollow">
                                        www.tecnologiasdelaluz.com.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                    </div>
                    <div class="white-space-64"></div>
                    <h2 class="color-darkAqua">
                        <span class="color-aqua weight-bold">{</span> DESARROLLO WEB
                    </h2>
                    <div class="white-space-32"></div>
                    <div class="project-container row-responsive">
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/buenosdias.png" alt="Buenos días México" title="Buenos días México" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Buenos días México
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://buenosdiasmexico.mx/" target="_blank" rel="nofollow">
                                        www.buenosdiasmexico.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-16"></div>
                        </div>
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/bece.png" alt="BéCé Online" title="BéCé Online" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        BéCé Online
                                    </h2>
                                    <a class="color-gray font-tiny" href="http://test.dwitmexico.com/" target="_blank" rel="nofollow">
                                        www.beceonlie.com
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Responsive Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                    </div>
                    <div class="project-container row-responsive">
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s" id="elfos">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/elfos.png" alt="Elfos Gourmet" title="Elfos Gourmet" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Elfos Gourmet
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.elfosgourmet.eu/" target="_blank" rel="nofollow">
                                        www.elfosgourmet.eu
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Web administrable
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s" id="pardi">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/pardi.png" alt="Pardi Distribución" title="Pardi Distribución" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Pardi Distribución
                                    </h2>
                                    <a class="color-gray font-tiny" href="http://pardi.mx/" target="_blank" rel="nofollow">
                                        www.pardi.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                    <h5 class="color-gray">
                                        React.js
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                    </div>
                    <div class="project-container row-responsive">
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s" id="elfos">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/bestlinecancun.png" alt="Best Line Cancún" title="Best Line Cancún" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Best Line Cancún
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.bestlinecancun.com/" target="_blank" rel="nofollow">
                                        www.bestlinecancun.com
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Web administrable
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s" id="pardi">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/goworkers.png" alt="Go Workers" title="Go Workers" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Go Workers
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.goworkers.es/" target="_blank" rel="nofollow">
                                        www.goworkers.es
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Desarrollo Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Web API
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>                        
                    </div>

                    <div class="white-space-64"></div>
                    <h2 class="color-darkAqua">
                        <span class="color-aqua weight-bold">{</span> ANDROID
                    </h2>
                    <div class="white-space-32"></div>
                    <div class="project-container row-responsive">
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/orto.JPG" alt="OrtoControl" title="OrtoControl" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Inspecciones Colombia
                                    </h2>
                                    <a class="color-gray font-tiny" href="#" target="_blank" rel="nofollow">
                                        Sin Web
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        App Android, IOS
                                    </h5>
                                    <h5 class="color-gray">
                                        Web API
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-16"></div>
                        </div>
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/igate.jpg" alt="OrtoControl" title="OrtoControl" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        iGate
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.igate.mx" target="_blank" rel="nofollow">
                                        www.igate.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        App Android
                                    </h5>
                                    <h5 class="color-gray">
                                        API
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-16"></div>
                        </div>
                    </div>
                    <div class="white-space-64"></div>
                    <h2 class="color-darkAqua">
                        <span class="color-aqua weight-bold">{</span> WORDPRESS
                    </h2>
                    <div class="white-space-32"></div>
                    <div class="project-container row-responsive">
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s" id="soarch">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/soarch.png" alt="SOarch" title="SOarch" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Sergio Orduña
                                    </h2>
                                    <a class="color-gray font-tiny" href="http://soarch.mx/" target="_blank" rel="nofollow">
                                        www.soarch.mx
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Administración Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-16"></div>
                        </div>
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s" id="eat">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/eat.png" alt="Eat Copper Branch" title="Eat Copper Branch" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Eat Copper Branch
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://eatcopperbranch.com/" target="_blank" rel="nofollow">
                                        www.eatcopperbranch.com
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Administración Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Contenido Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                    </div>
                    <div class="project-container row-responsive">
                        <div class="project column green-card wow fadeInLeft" data-wow-delay="0.2s" id="balcon">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/balcon.png" alt="Balcón del zócalo" title="Balcón del zócalo" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Balcón del zócalo
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://www.balcondelzocalo.com/" target="_blank" rel="nofollow">
                                        www.balcondelzocalo.com
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Administración Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Contenido Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-24"></div>
                        </div>
                        <div class="project column blue-card wow fadeInLeft" data-wow-delay="0.1s" id="soarch">
                            <div class="image responsive-img justify-center align-center">
                                <img src="./app/img/dolcezzza.png" alt="Dolcezzza" title="Dolcezzza" />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="information align-center">
                                <div class="title column">
                                    <h2 class="color-darkAqua">
                                        Dolcezzza
                                    </h2>
                                    <a class="color-gray font-tiny" href="https://dolcezza.ca/" target="_blank" rel="nofollow">
                                        www.dolcezza.ca
                                    </a>
                                </div>
                                <div class="description column">
                                    <h5 class="color-gray">
                                        Administración Web
                                    </h5>
                                    <h5 class="color-gray">
                                        Diseño Web
                                    </h5>
                                </div>
                            </div>
                            <div class="white-space-16"></div>
                        </div>
                    </div>
                    <div class="white-space-64"></div>
                </div>
            </div>
            <!-- Contact -->
            <div class="contact portfolio-contact justify-center wow fadeIn" id="contact">
                <div class="container column">
                    <div class="white-space-64"></div>
                    <h2 class="color-darkAqua text-center">
                        <span class="color-aqua weight-bold">{</span> CONTÁCTAME
                    </h2>
                    <div class="white-space-8"></div>
                    <p class="text-center">
                        Cuéntame tu idea, pregúntame o platiquemos
                    </p>
                    <div class="white-space-32"></div>
                    <div class="justify-center align-center">
                        <form method="POST" action="./app/php/email.php" class="column">
                            <div class="row justify-between">
                                <input type="text" name="name" minlength="6" maxlength="60" class="input input-radius" placeholder="Nombre" required />
                                <input type="email" name="email" minlength="8" maxlength="100" class="input input-radius" placeholder="Correo electrónico" required />
                            </div>
                            <div class="white-space-16"></div>
                            <div class="row">
                                <textarea name="message" rows="10" minlength="25" maxlength="600" class="input input-radius textarea" placeholder="Redacta tu mensaje, proyecto o seamos amigos :)" required></textarea>
                            </div>
                            <div class="white-space-16"></div>
                            <div class="justify-center">
                                <a href="/privacidad">
                                    Al enviar aceptas la política de privacidad del sitio Web, puedes consultarlo con un click.
                                </a>
                            </div>
                            <div class="white-space-16"></div>
                            <div class="btn-container justify-center">
                                <button type="submit" class="btn btn-large btn-aqua btn-radius color-white weight-bold">
                                    ENVIAR
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="white-space-64"></div>
                </div>
            </div>
            <!-- End Contact -->
            <!-- Footer -->
            <footer class="column">
                <div class="footer-top justify-center">
                    <div class="container">
                        <div class="row-responsive">
                            <div class="column">
                                <div class="white-space-24"></div>
                                <div class="logo justify-center align-center wow fadeInDown">
                                    <a href="/" class="responsive-img">
                                        <img src="./app/img/logo-white.png" alt="trejocode logo blanco" title="trejocode logo blanco" />
                                    </a>
                                </div>
                                <div class="white-space-24"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- End Footer -->

        </div>
    </div>


    <script src="./app/js/front.js"></script>
    <script src="./app/js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116751036-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-116751036-1');
    </script>
</body>

</html>