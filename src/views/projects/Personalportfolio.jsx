import "./Personalportfolio.scss";
import "./Projects.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import User from "../../components/User/user";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import Download from "../../components/icons/download/download";
import Mail from "../../components/icons/mail/mail";

function Personalportfolio() {
  return (
    <>
      <Topbar url="/portafolio" link="←Archivo" />
      <main className="project-main">
        <div className="project__header">
          <h2 className="h2">Portafolio personal</h2>
          <ProjectInfo
            role="Diseñador UI, Desarrollador"
            typology="Web"
            technologies="React.js"
            tools="Figma, Illustrator, Blender, Vs Code, Git"
            agency="Proyecto personal"
            client="Proyecto personal"
            year="2023"
            link="juantamarit.com"
          />
          <div class="project__header--intro">
            <span class="h5">Introducción</span>
            <p>
              Este portafolio se diseñó con el objetivo de mostrar mi trabajo
              como diseñador y desarrollador. A nivel estético se buscó la
              originalidad esquivando las tendencias, y con la diferenciación
              como objetivo, y para ello me inspiré ligeramente en la ciencia
              ficción y el retrofuturismo. No obstante, el objetivo principal
              fue propiciar una buena usabilidad y experiencia al usuario. A
              continuación, se muestra el proceso que ha dado lugar a esta
              interfaz, el cual ejemplifica, a grandes rasgos, mi proceso de
              diseño en general, con el que abordaría cualquier proyecto.
            </p>
          </div>
        </div>
        <div class="project__content">
          {/* <div className="project__image-container">
            <img src="src/assets/img/maslow_logo.jpg" alt="" />
          </div> */}

          <div class="project__content--goals">
            <span class="h5">Entendiendo el problema</span>
            <p>
              Este proyecto nace de la problemática o la necesidad de tener una
              plataforma que sirva para darme a conocer profesionalmente y poder
              exponer y explicar mis trabajos. A su vez, aprovechando la
              oportunidad, se busca que la plataforma en sí misma sirva de
              ejemplo de trabajo bien realizado. Parte del problema, sería
              diferenciarse de algún modo y transmitir una propuesta de valor
              única, dado el alto nivel de competencia del sector.
            </p>
          </div>

          <div class="project__content--target">
            <span class="h5">Elaborando una hipótesis o solución</span>
            <p>
              La mejor solución encontrada consiste en la creación de una página
              web a modo de portafolio, que permita explicar procesos de diseño
              completos, y que tenga una calidad notable a nivel de UX y UI. A
              su vez, se buscará un toque llamativo y original que llame la
              atención, y que transmita la capacidad de plantear soluciones de
              diseño particularizadas para cada caso. Si bien se pueden utilizar
              las tendencias estéticas para diseñar, en esta ocasión, se
              considera mejor optar por una estética en cierto modo atemporal.
            </p>
          </div>
          <User />
          <div class="project__content--conclusion">
            <span class="h5">Definiendo la estructura básica</span>
            <p>
              Una vez sentadas las bases del proyecto, es momento de empezar a
              materializarlo. Para ello realizamos los siguientes pasos:
            </p>
            <p>
              1. Obtener el contenido
              <p>
                Es necesario listar el contenido de la web, independientemente
                de si lo realizamos nosotros o proviene de un compañero o
                compañera que se encarguen de él. Esto nos permitirá empezar a
                organizarlo y empezar a definir una AI (Arquitectura de
                información), que elaboraremos a posteriori ayudados de esquemas
                o diferentes técnicas, como por ejemplo la de card sorting. El
                sitemap, es el resultado de este proceso de organización. Para
                este caso, nuestro sitemap sería muy sencillo. Esencialmente, el
                core de nuestro proyecto se podría resumir en el siguiente
                esquema de páginas.
              </p>
            </p>
          </div>
          <div class="">
            <span class="h5">Diseñando una solución</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eleifend, urna eu pellentesque blandit, nisl purus facilisis nisi,
              non rutrum nulla velit a orci. Mauris nec tortor at tellus dapibus
              eleifend vel ut velit. Donec vitae risus eget quam mollis
              ultrices. Vestibulum ac risus risus.
            </p>
          </div>
          <div class="">
            <span class="h5">Fase de desarrollo y comprobación</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eleifend, urna eu pellentesque blandit, nisl purus facilisis nisi,
              non rutrum nulla velit a orci. Mauris nec tortor at tellus dapibus
              eleifend vel ut velit. Donec vitae risus eget quam mollis
              ultrices. Vestibulum ac risus risus.
            </p>
          </div>
          <div class="project__nav">
            <Link className="h6">
              <span>←Anterior</span>
            </Link>
            <Link className="h6">
              <span>Siguiente→</span>
            </Link>
          </div>
          <section className="buttons-section">
            <span className="text-default">¿Has visto suficiente?</span>
            <div className="buttons">
              <Button
                icon={<Download />}
                buttonType="secondary"
                text="CV detallado"
              />
              <Button
                buttonType="primary"
                url="/portafolio"
                icon={<Mail />}
                text="Contactar"
                showIcon="show-icon"
              />
            </div>
            <Link to="/home" className="text-default project__home-link">
              <span className="project__home-link-arrow">←</span>Volver a la
              Home
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Personalportfolio;
