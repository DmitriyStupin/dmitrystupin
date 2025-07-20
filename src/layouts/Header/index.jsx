import Logo from "@/components/Logo"
import "./Header.scss"
import SwitchThemeButton from "@/components/SwitchThemeButton"
import BurgerButton from "@/components/BurgerButton"

export default () => {
  const menuItems = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Contacts",
      href: "#contacts",
    },
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo">Dmitry Stupin</Logo>
        <div className="header__overlay" data-js-overlay>
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a href={href} className="header__menu-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header__actions">
          <SwitchThemeButton
            extraAttrs={{
              "data-js-switch-theme-button": "",
            }}
          />
          <BurgerButton
            className="header__burger-button visible-mobile"
            extraAttrs={{ "data-js-burger-button": "" }}
          />
        </div>
      </div>
    </header>
  )
}
