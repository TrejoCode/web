/**
 * @version 1.2.0
 * @author Trejocode - Sergio
 * @description Página /index
 */

import { useState } from "react";
import Link from "next/link";
import Layout from "components/Layout";
import CardProjects from "components/cards/Project";
import projects from "../../public/data/projects.json";
import cogoToast from "cogo-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { post } from "api";
import Img from "react-cool-img";

const PageIndex = () => {
  const [captcha, setCaptcha] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (captcha) {
      const form = event.target;
      const payload = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      const { error } = await post("/email/contact/single", payload);

      if (error) {
        cogoToast.error(error, {
          heading: "No fue posible enviar el mensaje",
          hideAfter: 5,
        });
        return false;
      }

      cogoToast.success("Gracias por comunicarte", {
        heading: "Mensaje Enviado",
        hideAfter: 4,
      });
    } else {
      cogoToast.error("¡Oh no! Verifica que no seas un robot", {
        heading: "¿Eres un humano?",
        hideAfter: 3,
      });
    }
  };

  return (
    <Layout>
      <div className="page-home column">
        <div className="banner justify-center wow fadeIn">
          <div className="container row-responsive">
            <div className="left column">
              <h1 className="color-secondary">
                ¡Hola, i'm <span className="color-primary">trejocode!</span>{" "}
                <span role="img" aria-label="Emoji de Saludos">
                  👋
                </span>
              </h1>
              <div className="white-space-24"></div>
              <div className="column">
                <h2 className="color-secondary-alt font-medium weight-semi">
                  Diseño y desarrollo sitios Web increíbles <br />
                  responsivos, rápidos y autoadministrables
                </h2>
              </div>
              <div className="white-space-24"></div>
              <div className="btn-container full">
                <a
                  href="#services"
                  className="btn btn-medium btn-primary text-center"
                >
                  CONOCER MÁS
                </a>
              </div>
            </div>
            <div className="right align-center justify-center">
              <div
                className="reponsive-img justify-center align-center wow fadeIn"
                data-wow-delay="300ms"
              >
                <Img
                  placeholder="/img/placeholders/banner-devices.png"
                  src="https://res.cloudinary.com/trejocode/image/upload/v1606613481/Trejocode/portfolio/banner-devices_us28ew.png"
                  alt="Web y Apps"
                  title="Web y Apps"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="services justify-center wow fadeIn" id="services">
          <div className="container row-responsive row-responsive-ipad">
            <div className="left column">
              <h2 className="color-secondary-alt">
                <span className="color-secondary-alt weight-bold">{"{ "}</span>
                SERVICIOS
              </h2>
              <div className="white-space-16"></div>
              <p className="text-justify weight-semi">
                Concepto <b>+</b> Diseño <b>+</b> Desarrollo <b>+</b> high techs{" "}
                <b>=</b> ¡Proyectos éxitosos y asombrosos!
              </p>
              <div className="white-space-8"></div>
              <p className="text-justify weight-semi">
                ¡Trabajemos juntos! Mi pasión es desarrollar la Web, cuénteme su
                idea y haré todo lo demás.
              </p>
              <div className="white-space-32"></div>
              <h3 className="color-secondary-alt">PROCESO</h3>
              <div className="white-space-16"></div>
              <p className="weight-medium">
                <b>1.- Idea</b>
              </p>
              <p className="weight-medium">
                Escucho tus ideas y juntos encontramos el mejor producto.
              </p>
              <div className="white-space-16"></div>
              <p className="weight-medium">
                <b>2.- Análisis y Desarrollo</b>
              </p>
              <p className="weight-medium">
                Concepto, especificaciones establecidas para iniciar la creación
                del proyecto.
              </p>
              <div className="white-space-16"></div>
              <p className="weight-medium">
                <b>3.- Testing y Liberación</b>
              </p>
              <p className="weight-medium">
                Pruebas funcionales, paso a paso, tras garantizar el correcto
                funcionamiento se publicará el proyecto.
              </p>
            </div>
            <div className="right column">
              <div className="card-container row-responsive">
                <div className="card column wow fadeIn" data-wow-delay="100ms">
                  <div className="card-head justify-center align-center">
                    <div className="responsive-img">
                      <Img
                        placeholder="/img/placeholders/design.jpg"
                        src="https://res.cloudinary.com/trejocode/image/upload/v1606613478/Trejocode/portfolio/design_a8thbs.jpg"
                        alt="Diseño Web"
                        title="Diseño Web"
                        className="holder-image"
                      />
                    </div>
                  </div>
                  <div className="card-body column">
                    <div className="white-space-8"></div>
                    <p className="text-center card-title">
                      <strong>Diseño Web</strong>
                    </p>
                    <div className="white-space-8"></div>
                    <p className="text-center font-tiny card-description">
                      Para que el sitio Web sobresalga entre las demás, debe
                      contar con un diseño innovador y atrayente, con ello
                      transmitirá de la mejor forma lo grandioso del proyecto.
                    </p>
                    <div className="white-space-8"></div>
                    <div className="card-footer column">
                      <p className="text-center font-mini footer-content">
                        Adobe Photoshop, Adobe XD, HTML, CSS y JS serán las
                        herramientas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card column wow fadeIn" data-wow-delay="0.2s">
                  <div className="card-head justify-center align-center">
                    <div className="responsive-img">
                      <Img
                        placeholder="/img/placeholders/develop.jpg"
                        src="https://res.cloudinary.com/trejocode/image/upload/v1606613478/Trejocode/portfolio/develop_bdfqut.jpg"
                        alt="Desarrollo Web"
                        title="Desarrollo Web"
                        className="holder-image"
                      />
                    </div>
                  </div>
                  <div className="card-body column">
                    <div className="white-space-8"></div>
                    <p className="text-center card-title">
                      <strong>Desarrollo Web</strong>
                    </p>
                    <div className="white-space-8"></div>
                    <p className="text-center font-tiny card-description">
                      Maquetación, programación, testing, DevOps, mantenimiento
                      y SEO, son actividades obligatorias para un desarrollo Web
                      exitoso, acompañado de las mejores tecnologías.
                    </p>
                    <div className="white-space-8"></div>
                    <div className="card-footer column">
                      <p className="text-center font-mini footer-content">
                        HTML, CSS, React, Next.js, Node.js, MSSQL, MySQL, Jest,
                        Git, G. Analitycs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="white-space-32"></div>
              <div className="card-container row-responsive">
                <div className="card column wow fadeIn" data-wow-delay="100ms">
                  <div className="card-head justify-center align-center">
                    <div className="responsive-img">
                      <Img
                        placeholder="/img/placeholders/apps.jpg"
                        src="https://res.cloudinary.com/trejocode/image/upload/v1606613481/Trejocode/portfolio/apps_law2ya.jpg"
                        alt="Progressive Web Apps"
                        title="Progressive Web Apps"
                        className="holder-image"
                      />
                    </div>
                  </div>
                  <div className="card-body column">
                    <div className="white-space-8"></div>
                    <p className="text-center card-title">
                      <strong>Progressive Web App</strong>
                    </p>
                    <div className="white-space-8"></div>
                    <p className="text-center font-tiny card-description">
                      Las PWA combinan lo mejor de una Web y lo mejor de una
                      aplicación móvil nativa, adaptándose al dispositivo el
                      cual se ejecuta y reduciendo tiempos de desarrollo.
                    </p>
                    <div className="white-space-8"></div>
                    <div className="card-footer column">
                      <p className="text-center font-mini footer-content">
                        HTML, CSS, JS, React, Jest, Lighthouse, Push
                        Notifications
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card column wow fadeIn" data-wow-delay="200ms">
                  <div className="card-head justify-center align-center">
                    <div className="responsive-img">
                      <Img
                        placeholder="/img/placeholders/cursos.jpg"
                        src="https://res.cloudinary.com/trejocode/image/upload/v1606613482/Trejocode/portfolio/cursos_u10dt0.jpg"
                        alt="Cursos y Capacitaciones"
                        title="Cursos y Capacitaciones"
                        className="holder-image"
                      />
                    </div>
                  </div>
                  <div className="card-body column">
                    <div className="white-space-8"></div>
                    <p className="text-center card-title">
                      <strong>Cursos y Capacitaciones</strong>
                    </p>
                    <div className="white-space-8"></div>
                    <p className="text-center font-tiny card-description">
                      Domina tecnologías Web, desde 0 hasta
                      diseñador/desarrollador Web y Android, capacitaciones
                      presenciales o en línea, próximamente más cursos.
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
                  <Img
                    placeholder="/img/placeholders/me.jpg"
                    src="https://res.cloudinary.com/trejocode/image/upload/v1606613481/Trejocode/portfolio/me_qighks.jpg"
                    alt="trejocode perfil"
                    title="trejocode perfil"
                  />
                  <div className="white-space-8"></div>
                  <p className="text-center">Me, feliz porque visitas mi Web</p>
                </div>
              </div>
            </div>
            <div className="right column">
              <div className="white-space-64"></div>
              <h2 className="color-primary-alt">
                <span className="color-primary weight-bold">{"{ "}</span>
                Me: Sergio Alejandro Trejo
                <span className="color-primary weight-bold">{" }"}</span>
              </h2>
              <div className="white-space-16"></div>
              <p>
                <b>
                  Ingeniero en Software, entusiasta del desarrollo Web, desde
                  Cancún, México{" "}
                  <span role="img" aria-label="Emoji de playa">
                    🏖️
                  </span>
                </b>
              </p>
              <div className="white-space-8"></div>
              <p>
                Cursé en la Universidad Politécnica de Quintana Roo la
                Ingeniería en Software en generación 2015 - 2018, durante mi
                formación adquirí conocimiento en desarrollo Web, apps móviles,
                sistemas operativos y desarrollo de Software en general, mi
                proyecto de titulación:
                <b>
                  <a
                    href="http://new.upqroo.edu.mx/"
                    rel="noopener"
                    target="_blank"
                  >
                    {" "}
                    new.upqroo.com
                  </a>
                </b>
                , sitio Web de la Universidad.
              </p>
              <div className="white-space-8"></div>
              <p>
                Mi primera formación fue en técnico en programación, en CBTis N°
                111, participé en diferentes concursos durante mi preparación
                siendo el representante estatal en fotografía y ganador en
                innovación en el concurso estatal de ciencia y tecnología junto
                con mis compañeros.
              </p>
              <div className="white-space-16"></div>
              <p>
                <span className="color-primary weight-bold">{"{"}</span>
                <b> Empleos </b>
                <span className="color-primary weight-bold">{"}"}</span>
              </p>
              <div className="white-space-8"></div>
              <p>
                - <b>ACTUAL:</b> Desarrollador Web Fullstack:
                <b>
                  <a rel="noopener" target="_blank" href="https://www.jako.mx/">
                    &nbsp; Grupo Jako
                  </a>
                </b>
              </p>
              <p>
                - Desarrollador Web:
                <b>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://absolemarketing.com/"
                  >
                    {" "}
                    Absolem Marketing
                  </a>
                </b>
              </p>
              <p>
                - Desarrollador Fullstack Web:
                <b>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="http://www.dwitmexico.com/"
                  >
                    {" "}
                    Dwit México
                  </a>
                </b>
              </p>
              <div className="white-space-16"></div>
              <p>
                <span className="color-primary weight-bold">{"{"}</span>
                <b> Freelance </b>
                <span className="color-primary weight-bold">{"}"}</span>
              </p>
              <div className="white-space-8"></div>
              <p>
                - Desarrollo de aplicaciones Android: OrtoControl y Bomberos App
                (Aplicaciones privadas), para Brasil y Colombia
              </p>
              <p>
                - Desarrollador Web:
                <b>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.bestlinecancun.com/"
                  >
                    {" "}
                    Best Line Cancún
                  </a>
                </b>
              </p>
              <div className="white-space-64"></div>
            </div>
          </div>
        </div>
        <div className="portfolio justify-center" id="projects">
          <div className="container column">
            <div className="white-space-64"></div>
            <h2 className="color-secondary-alt">
              <span className="color-secondary-alt weight-bold">{"{"}</span>{" "}
              PROYECTOS
            </h2>
            <div className="white-space-16"></div>
            <p className="weight-medium">
              Aquí una increíble colección de proyectos profesionales y de
              código abierto en los que he trabajado durante de mi trayectoria
              profesional como ingeniero en Software, algunos se encuentran aún
              en desarrollo.
            </p>
            <div className="white-space-32"></div>
            <div className="project-container wrap">
              <CardProjects projects={projects} index={0} limit={9} />
            </div>
            <div className="white-space-32"></div>
            <div className="btn-container justify-center">
              <Link href="/portafolio">
                <a
                  className="btn btn-primary btn-large weight-bold text-center"
                  id="view-all"
                >
                  VER TODOS LOS PROYECTOS
                </a>
              </Link>
            </div>
            <div className="white-space-64"></div>
          </div>
        </div>

        <div className="contact justify-center wow fadeIn" id="contact">
          <div className="container column">
            <div className="white-space-64"></div>
            <h2 className="color-primary-alt text-center">
              <span className="color-primary weight-bold">{"{"}</span>{" "}
              CONTÁCTAME
            </h2>
            <div className="white-space-8"></div>
            <p className="text-center">
              Cuéntame tu idea, pregúntame o platiquemos
            </p>
            <div className="white-space-32"></div>
            <div className="justify-center align-center">
              <form method="POST" className="column" onSubmit={handleSubmit}>
                <div className="row justify-between">
                  <div className="input-group column">
                    <label
                      htmlFor="name"
                      className="color-darkgray weight-semi"
                    >
                      Nombre:
                    </label>
                    <div className="white-space-4"></div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      minLength="6"
                      maxLength="60"
                      className="input input-radius"
                      required
                    />
                  </div>
                  <div className="input-group column">
                    <label
                      htmlFor="email"
                      className="color-darkgray weight-semi"
                    >
                      Correo:
                    </label>
                    <div className="white-space-4"></div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      minLength="8"
                      maxLength="100"
                      className="input input-radius"
                      required
                    />
                  </div>
                </div>
                <div className="white-space-16"></div>
                <div className="column">
                  <label
                    htmlFor="message"
                    className="color-darkgray weight-semi"
                  >
                    Redacta tu mensaje:
                  </label>
                  <div className="white-space-4"></div>
                  <textarea
                    name="message"
                    rows="10"
                    minLength="25"
                    maxLength="600"
                    className="input input-radius textarea"
                    required
                  ></textarea>
                </div>
                <div className="white-space-16"></div>
                <div className="justify-center">
                  <Link href="/politicas">
                    <a>
                      Al enviar aceptas la política de privacidad del sitio Web,
                      puedes consultarlo con un click.
                    </a>
                  </Link>
                </div>
                <div className="white-space-16"></div>
                <div className="justify-center align-center">
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA}
                    onVerify={(token) => setCaptcha(token)}
                    onExpire={() => setCaptcha(false)}
                    onError={() => setCaptcha(false)}
                  />
                </div>
                <div className="white-space-16"></div>
                <div className="btn-container justify-center">
                  <button
                    type="submit"
                    className="btn btn-large btn-primary color-white weight-bold"
                  >
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
};

export default PageIndex;
