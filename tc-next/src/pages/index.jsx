/**
 * @version 1.0.0
 * @author Sergio - Trejocode
 * @description Página /index
*/

import React from 'react';
import Layout from '../components/layout';

const PageIndex = () => {
	
	return(	
		<Layout>
			<div className="home column" id="home">
				<div className="banner justify-center wow fadeIn" data-wow-delay="200ms">
					<div className="container row-responsive">
						<div className="left column">
							<h1 className="color-secondary">
								¡Hola, i'm <span className="color-primary">trejocode!</span> 👋
							</h1>
							<div className="white-space-24"></div>
							<div className="column">
								<h3 className="color-secondary-alt">
									Diseño y desarrollo sitios Web increíbles
								</h3>
								<div className="white-space-4"></div>
								<h3 className="color-secondary-alt">
									responsivos, rápidos y autoadministrables
								</h3>
							</div>
							<div className="white-space-24"></div>
							<div className="btn-container full">
								<a href="#services" className="btn btn-medium btn-primary text-center">
									CONOCER MÁS
								</a>
							</div>
						</div>
						<div className="right align-center justify-center">
							<div className="reponsive-img justify-center align-center wow fadeIn" data-wow-delay="300ms">
								<img src="/img/banner-devices.png" alt="Web and Apps" title="Web and Apps" />
							</div>
						</div>
					</div>
				</div>
				<div className="services justify-center wow fadeIn" id="services">
					<div className="container row-responsive row-responsive-ipad">
						<div className="left column">
							<div className="white-space-64"></div>
							<h2 className="color-primary-alt">
								<span className="color-primary weight-bold">{"{"}</span> SERVICIOS
							</h2>
							<div className="white-space-16"></div>
							<p className="text-justify weight-semi">
								Concepto <b>+</b> diseño atractivo <b>+</b> desarrollo preciso <b>+</b> ultimas tecnologías <b>=</b> ¡Proyectos éxitosos y asombrosos!
							</p>
							<div className="white-space-8"></div>
							<p className="text-justify weight-semi">
								¡Trabajemos juntos! me encanta desarrollar Web, cuénteme su idea y haré todo lo demás.
							</p>
							<div className="white-space-8"></div>
							<p className="weight-medium">
								<b> Pasa el mouse sobre el servicio para observar un cool efecto ✨</b>
							</p>
							<div className="white-space-32"></div>
							<h3 className="color-primary-alt">
								PROCESO
							</h3>
							<div className="white-space-16"></div>
							<p className="weight-medium">
								<b>1.- Idea</b>
							</p>
							<p className="weight-medium">
								Escucho tus ideas y juntos encontramos cómo hacerlas realidad.
							</p>
							<div className="white-space-16"></div>
							<p className="weight-medium">
								<b>2.- Análisis / Desarrollo</b>
							</p>
							<p className="weight-medium">
								Análisis y seguimiento a tu proyecto para darte la mejor solución. Después, iniciará la creación de tu proyecto.
							</p>
							<div className="white-space-16"></div>
							<p className="weight-medium">
								<b>3.- Testing y Liberación</b>
							</p>
							<p className="weight-medium">
								Pruebas funcionales, paso a paso, de usuarios, una vez garantizado el correcto funcionamiento se publicará tu proyecto.
							</p>
							<div className="white-space-64"></div>
						</div>
						<div className="right column">
							<div className="white-space-64"></div>
							<div className="card-container row-responsive">
								<div className="card column wow fadeIn" data-wow-delay="0.1s">
									<div className="card-head justify-center align-center">
										<div className="responsive-img">
											<img src="/img/design.jpg" alt="Diseño Web" title="Diseño Web" className="holder-image" />
										</div>
									</div>
									<div className="card-body column">
										<div className="white-space-8"></div>
										<p className="text-center card-title">
											<strong>
												Diseño Web
											</strong>
										</p>
										<div className="white-space-8"></div>
										<p className="text-center font-tiny card-description">
											Para que una página web sobresalga entre las demás, debe tener un diseño innovador y atrayente, además,
											transmita de forma clara y precisa lo que se ofrece.
										</p>
										<div className="white-space-8"></div>
										<div className="card-footer column">
											<p className="text-center font-mini footer-content">
												Adobe Photoshop, Adobe XD, HTML, CSS y JS serán las herramientas
											</p>
										</div>
									</div>
								</div>

								<div className="card column wow fadeIn" data-wow-delay="0.2s">
									<div className="card-head justify-center align-center">
										<div className="responsive-img">
											<img src="/img/develop.jpg" alt="Desarrollo Web" title="Desarrollo Web" className="holder-image" />
										</div>
									</div>
									<div className="card-body column">
										<div className="white-space-8"></div>
										<p className="text-center card-title">
											<strong>
												Desarrollo Web
											</strong>
										</p>
										<div className="white-space-8"></div>
										<p className="text-center font-tiny card-description">
											Maquetación, programación, testing, DevOps, mantenimiento y S.E.O. son actividades de un desarrollo Web exitoso, utilizando las mejores tecnologías actuales.
										</p>
										<div className="white-space-8"></div>
										<div className="card-footer column">
											<p className="text-center font-mini footer-content">
												HTML, CSS, React, Next.js, Node.js, MSSQL, MySQL, Jest, Git, G. Analitycs, Trello
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="white-space-32"></div>
							<div className="card-container row-responsive">
								<div className="card column wow fadeIn" data-wow-delay="0.1s">
									<div className="card-head justify-center align-center">
										<div className="responsive-img">
											<img src="/img/apps.jpg" alt="Progressive Web Apps" title="Progressive Web Apps" className="holder-image" />
										</div>
									</div>
									<div className="card-body column">
										<div className="white-space-8"></div>
										<p className="text-center card-title">
											<strong>
												Progressive Web app
											</strong>
										</p>
										<div className="white-space-8"></div>
										<p className="text-center font-tiny card-description">
											Las PWA integran lo mejor de una web y lo mejor de una aplicación móvil nativa, adaptándose por completo al dispositivo el cual se ejecuta.
										</p>
										<div className="white-space-8"></div>
										<div className="card-footer column">
											<p className="text-center font-mini footer-content">
												HTML, CSS, JS, React, Jest, Lighthouse, Push Notifications
											</p>
										</div>
									</div>
								</div>
								<div className="card column wow fadeIn" data-wow-delay="0.2s">
									<div className="card-head justify-center align-center">
										<div className="responsive-img">
											<img src="/img/cursos.jpg" alt="Cursos y Capacitaciones" title="Cursos y Capacitaciones" className="holder-image" />
										</div>
									</div>
									<div className="card-body column">
										<div className="white-space-8"></div>
										<p className="text-center card-title">
											<strong>
												Cursos y Capacitaciones
											</strong>
										</p>
										<div className="white-space-8"></div>
										<p className="text-center font-tiny card-description">
											Domina tecnologías Web, desde 0 hasta diseñador/desarrollador Web y Android, capacitaciones presenciales o en línea, próximamente más cursos.
										</p>
										<div className="white-space-8"></div>
										<div className="card-footer column">
											<p className="text-center font-mini footer-content">
												HTML, CSS, JS, React, Next.js, React Native, Diseño Web
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="white-space-32"></div>
						</div>
					</div>
				</div>			                
				<div className="about justify-center wow fadeIn" id="about">
					<div className="container row-responsive">
						<div className="left column">
							<div className="white-space-64"></div>
							<div className="me-picture">
								<div className="responsive-img column">
									<img src="/img/me.jpg" alt="trejocode perfil" title="trejocode perfil" />
									<div className="white-space-8"></div>
									<p className="text-center">
										Me, feliz porque visitas mi Web
									</p>
								</div>
							</div>
						</div>
						<div className="right column">
							<div className="white-space-64"></div>
							<h2 className="color-primary-alt">
								<span className="color-primary weight-bold">{"{"}</span> Me: Sergio Alejandro Trejo <span className="color-primary weight-bold">}</span>
							</h2>
							<div className="white-space-16"></div>
							<p>
								<b>Ingeniero en Software y apasionado del desarrollo Web, desde Cancún, México 🏖️</b>
							</p>
							<div className="white-space-8"></div>
							<p>
								Mi primera formación en técnico en programación, en bachiller, participé en diferentes concursos durante mi preparación siendo el representante estatal en fotografía y ganador en el innovación en el concurso estatal de ciencia y tecnología con mis compañeros.
							</p>
							<div className="white-space-8"></div>
							<p>
								Cursé en la Universidad Politécnica de Quintana Roo la Ingeniería en Software en la generación 2015 - 2018, durante mi formación adquirí conocimiento en desarrollo Web, apps móviles, sistemas operativos y desarrollo de Software en general, mi proyecto de titulación:
								<b><a href="http://new.upqroo.edu.mx/" rel="noopener" target="_blank">new.upqroo.com</a></b>, sitio Web de la Universidad.
							</p>
							<div className="white-space-16"></div>
							<p>
								<span className="color-primary weight-bold">{"{"}</span><b> Empleos </b><span className="color-primary weight-bold">}</span>
							</p>
							<div className="white-space-8"></div>
							<p>
								- Desarrollador Fullstack Web: 
								<b><a rel="noopener" target="_blank" href="http://www.dwitmexico.com/"> Dwit México</a></b>
							</p>
							<p>
								- Desarrollador Web: 
								<b><a rel="noopener" target="_blank" href="https://absolemarketing.com/"> Absolem Marketing</a></b>
							</p>
							<p>
								- <b>ACTUAL</b> Desarrollador Fullstack Web: 
								<b><a rel="noopener" target="_blank" href="https://www.moonpalacecancun.com/"> Moon Palace</a></b>
							</p>
							<div className="white-space-16"></div>
							<p>
								<span className="color-primary weight-bold">{"{"}</span><b> Freelance </b><span className="color-primary weight-bold">}</span>
							</p>
							<div className="white-space-8"></div>
							<p>
								- Desarrollo de aplicaciones Android: OrtoControl y Bomberos App (Aplicaciones privadas), para Brasil y Colombia
							</p>
							<p>
								- Desarrollador Web:
								<b><a rel="noopener" target="_blank" href="https://www.bestlinecancun.com/"> Best Line Cancún</a></b>
							</p>
							<div className="white-space-64"></div>
						</div>
					</div>
				</div>						
				<div className="portfolio justify-center" id="projects">
					<div className="container column">
						<div className="white-space-64"></div>
						<h2 className="color-primary-alt">
							<span className="color-primary weight-bold">{"{"}</span> PROYECTOS
						</h2>
						<div className="white-space-16"></div>
						<p className="weight-medium">
							Esta es una pequeña colección de proyectos profesionales en los que he trabajado a lo largo de mi trayectoria profesional como ingeniero en Software, algunos se encuentran en desarrollo.
						</p>
						<div className="white-space-32"></div>
						<div className="project-container row-responsive">
							<div className="project project-aqua column wow fadeInLeft" data-wow-delay="100ms" >
								<div className="image responsive-img justify-center align-center">
									<img src="/img/bestlinecancun.png" alt="Best Line Cancún" title="Best Line Cancún" />
								</div>
								<div className="white-space-16"></div>
								<div className="information align-center">
									<div className="title column">
										<h2 className="color-primary-alt">
											Best Line Cancún
										</h2>
										<a className="color-gray font-tiny" href="https://www.bestlinecancun.com/" target="_blank" rel="noopener">
											www.bestlinecancun.com
										</a>
									</div>
									<div className="description full column">
										<h5 className="color-gray">
											Diseño Web
										</h5>
										<h5 className="color-gray">
											Desarrollo Web
										</h5>
									</div>
								</div>
								<div className="white-space-16"></div>
							</div>
							<div className="project project-green column wow fadeInLeft" data-wow-delay="200ms">
								<div className="image responsive-img justify-center align-center">
									<img src="/img/buenosdias.png" alt="Buenos días México" title="Buenos días México" />
								</div>
								<div className="white-space-16"></div>
								<div className="information align-center">
									<div className="title column">
										<h2 className="color-primary-alt">
											Buenos días México
										</h2>
										<a className="color-gray font-tiny" href="https://buenosdiasmexico.mx/" target="_blank" rel="noopener">
											www.buenosdiasmexico.mx
										</a>
									</div>
									<div className="description full column">
										<h5 className="color-gray">
											Responsive Web
										</h5>
										<h5 className="color-gray">
											Desarrollo Web
										</h5>
									</div>
								</div>
								<div className="white-space-16"></div>
							</div>
						</div>
						<div className="white-space-32"></div>
						<div className="project-container row-responsive">
							<div className="project project-aqua column wow fadeInLeft" data-wow-delay="100ms">
								<div className="image responsive-img justify-center align-center">
									<img src="/img/delaluz.png" alt="EM-Sistemas" title="EM-Sistemas" />
								</div>
								<div className="white-space-16"></div>
								<div className="information align-center">
									<div className="title column">
										<h2 className="color-primary-alt">
											De la Luz
										</h2>
										<a className="color-gray font-tiny" href="http://www.delaluz.com.mx/" target="_blank" rel="noopener">
											www.delaluz.com.mx
										</a>
									</div>
									<div className="description full column">
										<h5 className="color-gray">
											Diseño Web
										</h5>
										<h5 className="color-gray">
											Desarrollo Web
										</h5>
									</div>
								</div>
								<div className="white-space-16"></div>
							</div>
							<div className="project project-green column wow fadeInLeft" data-wow-delay="200ms">
								<div className="image responsive-img justify-center align-center">
									<img src="/img/igate.jpg" alt="OrtoControl" title="OrtoControl" />
								</div>
								<div className="white-space-16"></div>
								<div className="information align-center">
									<div className="title column">
										<h2 className="color-primary-alt">
											iGate
										</h2>
										<a className="color-gray font-tiny" href="https://igate.mx/" target="_blank" rel="noopener">
											www.igate.mx
										</a>
									</div>
									<div className="description full column">
										<h5 className="color-gray">
											App Android, IOS
										</h5>
										<h5 className="color-gray">
											Web API
										</h5>
									</div>
								</div>
								<div className="white-space-16"></div>
							</div>
						</div>
						<div className="white-space-32"></div>
						<div className="btn-container justify-center">
							<a href="/portafolio" className="btn btn-primary btn-large weight-bold text-center" id="view-all">
								VER TODOS LOS PROYECTOS
							</a>
						</div>
						<div className="white-space-64"></div>
					</div>
				</div>						
				<div className="contact justify-center wow fadeIn" id="contact">
					<div className="container column">
						<div className="white-space-64"></div>
						<h2 className="color-primary-alt text-center">
							<span className="color-primary weight-bold">{"{"}</span> CONTÁCTAME
						</h2>
						<div className="white-space-8"></div>
						<p className="text-center">
							Cuéntame tu idea, pregúntame o platiquemos
						</p>
						<div className="white-space-32"></div>
						<div className="justify-center align-center">
							<form method="POST" action="/php/email.php" className="column">
								<div className="row justify-between">
									<input type="text" name="name" minLength="6" maxLength="60" className="input input-radius" placeholder="Nombre" required />
									<input type="email" name="email" minLength="8" maxLength="100" className="input input-radius" placeholder="Correo electrónico" required />
								</div>
								<div className="white-space-16"></div>
								<div className="row">
									<textarea name="message" rows="10" minLength="25" maxLength="600" className="input input-radius textarea" placeholder="Redacta tu mensaje, proyecto o seamos amigos :)" required></textarea>
								</div>
								<div className="white-space-16"></div>
								<div className="justify-center">
									<a href="/privacidad">
										Al enviar aceptas la política de privacidad del sitio Web, puedes consultarlo con un click.
									</a>
								</div>
								<div className="white-space-16"></div>
								<div className="btn-container justify-center">
									<button type="submit" className="btn btn-large btn-primary color-white weight-bold">
										ENVIAR
									</button>
								</div>
							</form>
						</div>
						<div className="white-space-64"></div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
export default PageIndex;
