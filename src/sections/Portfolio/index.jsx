import Button from "@/components/Button"
import "./Portfolio.scss"

export default () => {
  const projects = [
    {
      title: "U-Stipend",
      description:
        "A convenient scholarship calculation service for students Siberian Federal University (Krasnoyarsk, Russia)",
      date: "May 2025",
      tech: ["/src/assets/icons/html5.svg", "/src/assets/icons/sass.svg", "/src/assets/icons/javascript.svg"],
      image: "/src/assets/images/u-stipend.png",
      demo: "https://u-stipend.ru/",
      github: "https://github.com/IKIT-Group/u-stipend",
    },
    {
      title: "Stream Vibe",
      description: "A multi-page web application for a streaming service using a modern technology stack",
      date: "Febraury 2025",
      tech: ["/src/assets/icons/sass.svg", "/src/assets/icons/javascript.svg", "/src/assets/icons/minista.svg", "/src/assets/icons/postcss.svg", "/src/assets/icons/vite.svg"],
      image: "/src/assets/images/stream-vibe.png",
      demo: "https://dmitriystupin.github.io/stream-vibe/dist/",
      github: "https://github.com/DmitriyStupin/stream-vibe",
    },
    {
      title: "Future Tech",
      description: "A multi-page website using SCSS written with components in JS",
      date: "January 2025",
      tech: ["/src/assets/icons/html5.svg", "/src/assets/icons/sass.svg", "/src/assets/icons/javascript.svg"],
      image: "/src/assets/images/future-tech.png",
      demo: "https://dmitriystupin.github.io/FutureTech/",
      github: "https://github.com/DmitriyStupin/FutureTech",
    },
  ]

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner container">
        <h2 className="portfolio__title h2">Portfolio</h2>
        <ul className="portfolio__list">
          {projects.map(
            ({ title, description, date, tech, image, demo, github }, index) => (
              <li className="portfolio__item" key={index}>
                <img src={image} alt={title} className="portfolio__image" />
                <div className="portfolio__content">
                  <h3 className="portfolio__name">{title} ({date})</h3>
                  <p className="portfolio__description">{description}</p>
                  <ul className="portfolio__tech">
                    {tech.map((t, index) => (
                      <li key={index}>
                        <img src={t} className="portfolio__icon" />
                      </li>
                    ))}
                  </ul>
                  <div className="portfolio__links">
                    {demo && (
                      <Button
                        className="button"
                        href={demo}
                        label="Visit"
                        target="_blank"
                      />
                    )}
                    <Button
                        className="button button--black"
                        href={github}
                        label="GitHub"
                        target="_blank"
                      />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}
