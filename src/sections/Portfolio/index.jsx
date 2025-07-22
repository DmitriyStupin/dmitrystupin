import Button from "@/components/Button"
import "./Portfolio.scss"

// Импорт иконок для технологий
import html5Icon from "@/assets/icons/html5.svg"
import sassIcon from "@/assets/icons/sass.svg"
import jsIcon from "@/assets/icons/javascript.svg"
import ministaIcon from "@/assets/icons/minista.svg"
import postcssIcon from "@/assets/icons/postcss.svg"
import viteIcon from "@/assets/icons/vite.svg"

// Импорт изображений проектов
import uStipendImg from "@/assets/images/u-stipend.png"
import streamVibeImg from "@/assets/images/stream-vibe.png"
import futureTechImg from "@/assets/images/future-tech.png"

export default () => {
  const projects = [
    {
      title: "U-Stipend",
      description:
        "A convenient scholarship calculation service for students Siberian Federal University (Krasnoyarsk, Russia)",
      date: "May 2025",
      tech: [html5Icon, sassIcon, jsIcon],
      image: uStipendImg,
      demo: "https://u-stipend.ru/",
      github: "https://github.com/IKIT-Group/u-stipend",
    },
    {
      title: "Stream Vibe",
      description: "A multi-page web application for a streaming service using a modern technology stack",
      date: "February 2025",
      tech: [sassIcon, jsIcon, ministaIcon, postcssIcon, viteIcon],
      image: streamVibeImg,
      demo: "https://dmitriystupin.github.io/stream-vibe/dist/",
      github: "https://github.com/DmitriyStupin/stream-vibe",
    },
    {
      title: "Future Tech",
      description: "A multi-page website using SCSS written with components in JS",
      date: "January 2025",
      tech: [html5Icon, sassIcon, jsIcon],
      image: futureTechImg,
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
                    {tech.map((icon, idx) => (
                      <li key={idx}>
                        <img src={icon} alt="" className="portfolio__icon" />
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
