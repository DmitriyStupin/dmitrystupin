import "./Skills.scss"

// Импорт всех иконок
import htmlIcon from "@/assets/icons/html5.svg"
import cssIcon from "@/assets/icons/css.svg"
import sassIcon from "@/assets/icons/sass.svg"
import jsIcon from "@/assets/icons/javascript.svg"
import reactIcon from "@/assets/icons/react.svg"
import viteIcon from "@/assets/icons/vite.svg"
import ministaIcon from "@/assets/icons/minista.svg"
import postcssIcon from "@/assets/icons/postcss.svg"
import gitIcon from "@/assets/icons/git.svg"
import npmIcon from "@/assets/icons/npm.svg"
import bemIcon from "@/assets/icons/bem.svg"

export default () => {
  const skills = [
    { label: "HTML5", icon: htmlIcon },
    { label: "CSS3", icon: cssIcon },
    { label: "SCSS", icon: sassIcon },
    { label: "JavaScript", icon: jsIcon },
    { label: "React (Basics)", icon: reactIcon },
    { label: "Vite", icon: viteIcon },
    { label: "Minista", icon: ministaIcon },
    { label: "PostCSS", icon: postcssIcon },
    { label: "Git / GitHub", icon: gitIcon },
    { label: "NPM", icon: npmIcon },
    { label: "BEM Methodology", icon: bemIcon },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills__inner container">
        <h2 className="skills__title h2">Skills</h2>
        <ul className="skills__list">
          {skills.map(({ label, icon }, index) => (
            <li className="skills__item" key={index}>
              <img
                src={icon}
                alt={label}
                className="skills__icon"
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}