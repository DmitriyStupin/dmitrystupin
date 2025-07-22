import "./Skills.scss"

export default () => {
  const skills = [
    { label: "HTML5", icon: "/src/assets/icons/html5.svg"},
    { label: "CSS3", icon: "/src/assets/icons/css.svg"},
    { label: "SCSS", icon: "/src/assets/icons/sass.svg"},
    { label: "JavaScript", icon: "/src/assets/icons/javascript.svg"},
    { label: "React (Basics)", icon: "/src/assets/icons/react.svg"},
    { label: "Vite", icon: "/src/assets/icons/vite.svg"},
    { label: "Minista", icon: "/src/assets/icons/minista.svg"},
    { label: "PostCSS", icon: "/src/assets/icons/postcss.svg"},
    { label: "Git / GitHub", icon: "/src/assets/icons/git.svg"},
    { label: "NPM", icon: "/src/assets/icons/npm.svg"},
    { label: "BEM Methodology", icon: "/src/assets/icons/bem.svg"},
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills__inner container">
        <h2 className="skills__title h2">Skills</h2>
        <ul className="skills__list">
          {skills.map(({ label, icon, color }, index) => (
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
