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
            <a href="#portfolio" className="about__button">View Portfolio</a>
            <a href="#portfolio" className="about__button about__button--white">Resume</a>
          </div>
        </div>

        <div className="about__image">
          <img src="/src/assets/images/bg.png" alt="" />
        </div>
      </div>
    </section>
  )
}
