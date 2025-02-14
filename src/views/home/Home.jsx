import Topbar from "../../components/topbar/Topbar";
import Skill from "../../components/skills/Skill";
import Button from "../../components/buttons/button";
import "./Home.scss";
import "../../scss/_images.scss";
import Credits from "../../components/credits/Credits";
import Cube from "../../components/Cube/Cube";
import Sphere from "../../components/Sphere/Sphere";
import Cone from "../../components/Cone/Cone";
import Cubeempty from "../../components/CubeEmpty/Cubeempty";
import Coneempty from "../../components/ConeEmpty/Coneempty";
import Sphereempty from "../../components/Sphereempty/Sphereempty";
import Download from "../../components/icons/download/download";

export default function Home() {
  return (
    <>
      <Topbar url="/portafolio" link="→Portafolio" />
      <main className="home-main">
        <section className="hero-section">
          <Cube />
          <Sphere />
          <Cone />
          <div className="hero-section__main-text">
            <span className="h1">Juan Tamarit</span>
            <div>
              <h2 className="text-default hero-section__profession-text">
                diseñador UX/UI
              </h2>
              <h2 className="text-default hero-section__profession-text">
                diseñador gráfico
              </h2>
              <h2 className="text-default hero-section__profession-text">
                desarrollador web
              </h2>
            </div>
          </div>
          <Credits />
          <div className="hero-section__floor-container">
            <img
              className="hero-section__floor"
              src="/floor-mobile-optimized.svg"
              alt="decorative image"
            />
          </div>
        </section>
        <section className="content-section">
          <section className="bio-section text-regular">
            <p>
              Soy una persona apasionada, amante del aprendizaje y del
              crecimiento constante. Mi historial académico es bastante
              singular, me formé como pianista de jazz antes de meterme de lleno
              en el diseño gráfico, el diseño UX/UI y el desarrollo.
            </p>
            <br />
            <p>
              Este bagaje me ha permitido obtener valiosas habilidades como:
              capacidad de trabajo en equipo, capacidad de escucha, creatividad,
              proactividad, o pensamiento lateral, entre otras.
            </p>
            <br />
            <p>
              Como diseñador y desarrollador, estoy muy interesado en la
              usabilidad, puesto que es el factor diferenciador entre un diseño
              “bonito” y un diseño realmente valioso.
            </p>
            <br />
            <p>
              Y en definitiva, es a esto a lo que quiero aspirar, a aportar
              valor. Para ello, estoy deseoso de poder trabajar con un buen
              equipo de creativos y/o desarrolladores, así que espero que te
              guste mi trabajo y encajar en tu equipo.
            </p>
            <br />
            <p>¡Gracias por tu tiempo!</p>
          </section>
          <section className="skills-section">
            <Cubeempty />
            <div className="skills-section__knowledges-container">
              <span className="h3">Conocimientos</span>
              <div className="skills-section__skills-group--knowledges">
                <Skill type="straight" text="Diseño gráfico" />
                <Skill type="rounded" text="UX/UI" />
                <Skill type="straight" text="Desarrollo web" />
                <Skill type="rounded" text="Identidad" />
                <Skill type="straight" text="Wordpress" />
                <Skill type="rounded" text="Marketing" />
                <Skill type="straight" text="Fotografía" />
                <Skill type="rounded" text="Motion Graphics" />
                <Skill type="straight" text="Diseño sonoro" />
                <Skill type="rounded" text="Vídeo" />
              </div>
            </div>
            <Sphereempty />
            <div className="skills-section__tools-container">
              <span className="h3">Herramientas</span>
              <div className="skills-section__skills-group--tools">
                <Skill type="rounded" text="Adobe creative suite" />
                <Skill type="straight" text="Figma" />
                <Skill type="rounded" text="Visual Studio Code" />
                <Skill type="straight" text="Git" />
                <Skill type="rounded" text="Logic Pro" />
              </div>
            </div>
            <div className="skills-section__technologies-container">
              <span className="h3">Tecnologías</span>
              <div className="skills-section__skills-group--Technologies">
                <Skill type="straight" text="Html" />
                <Skill type="rounded" text="Css" />
                <Skill type="straight" text="Scss" />
                <Skill type="rounded" text="Javascript" />
                <Skill type="straight" text="React.js" />
              </div>
            </div>
            <Coneempty />
          </section>
          <section className="buttons-section">
            <span className="text-default">¿Quieres saber más?</span>
            <div className="buttons">
              <Button
                buttonType="secondary"
                icon={<Download />}
                text="CV detallado"
              />
              <Button
                buttonType="primary"
                url="/portafolio"
                text="↗ Portafolio"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
