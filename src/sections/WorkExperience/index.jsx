import Button from "@/components/Button"
import "./WorkExperience.scss"

// Импорт логотипов
import piterskiyLogo from "@/assets/icons/piterskiy-mostik.svg"
import kritbiLogo from "@/assets/icons/kritbi.svg"

export default () => {
  const experience = [
    {
      company: "Piterskiy Mostik",
      position: "The Intern",
      logo: piterskiyLogo,
      period: "June - July (2024)",
      description:
        "Creating a BookStack knowledge base using a Virtual Machine and Red Hat Enterprise Linux OS",
      color: "#EE3A43",
    },
    {
      company: "Digital Sky Innovations Engineering Hackathon",
      position: "Frontend Developer",
      logo: kritbiLogo,
      period: "17 - 18 April (2025)",
      description:
        "UAS mobile configurator for UAV configuration selection for the client's tasks with cost calculation and request generation",
      color: "#3FB6A3",
      certificateUrl: "/public/kritbi.pdf",
      github: "https://github.com/DmitriyStupin/CRITBY-HACKATON_17-18.04.2025",
    },
  ]

  return (
    <section className="experience" id="experience">
      <div className="experience__inner container">
        <h2 className="experience__title h2">Experience</h2>
        <ul className="experience__list">
          {experience.map(
            (
              {
                company,
                position,
                period,
                description,
                logo,
                color,
                certificateUrl,
                github
              },
              index
            ) => (
              <li
                className="experience__item"
                key={index}
                style={{ borderLeftColor: color }}
              >
                <div className="experience__company">
                  <h3 className="experience__company-title">{company}</h3>
                  <img className="experience__company-logo" src={logo} alt="" />
                </div>
                <div className="experience__meta">
                  <span className="experience__position">{position}</span>
                  <span className="experience__period">{period}</span>
                </div>
                <p className="experience__description">{description}</p>
                <div className="experience__actions">
                  {certificateUrl && (
                    <Button
                      href={certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button experience__button"
                      label="View Certificate"
                    />
                  )}
                  {github && (
                    <Button
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--black experience__button"
                      label="GitHub"
                    />
                  )}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}