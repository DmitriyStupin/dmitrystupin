import Button from "@/components/Button"
import "./About.scss"

export default () => {
  return (
    <section className="about" id="about">
      <div className="about__inner container">
        <h1 className="visually-hidden">Dmitry Stupin</h1>
        <div className="about__info">
          <div className="about__text">
            <p className="about__title h1">
              Hello! My name is <span>Dmitry Stupin.</span>
            </p>
            <p className="about__subtitle">And I'm a Frontend Developer</p>
          </div>
          <div className="about__actions">
            <Button
              className="about__button"
              label="View Portfolio"
              href="#portfolio"
            />
            <Button
              className="about__button about__button--white visually-hidden"
              label="My Resume"
              href="#portfolio"
            />
          </div>
        </div>

        <div className="about__image">
          <img src="/src/assets/images/bg.png" alt="" />
        </div>
      </div>
    </section>
  )
}
