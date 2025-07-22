import "./Footer.scss"

// Импорт иконок
import mailIcon from "@/assets/icons/socials/maildotru.svg"
import telegramIcon from "@/assets/icons/socials/telegram.svg"
import githubIcon from "@/assets/icons/socials/github.svg"
import vkIcon from "@/assets/icons/socials/vk.svg"

export default () => {
  const contacts = [
    {
      label: "Email",
      href: "mailto:dm.stup@mail.ru",
      icon: mailIcon,
    },
    {
      label: "Telegram",
      href: "https://t.me/stupin_dmitry",
      icon: telegramIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/DmitriyStupin",
      icon: githubIcon,
    },
    {
      label: "VK",
      href: "https://vk.com/dmitry.stupin",
      icon: vkIcon,
    },
  ]

  return (
    <footer className="footer" id="contacts">
      <div className="footer__inner container">
        <ul className="footer__socials">
          {contacts.map(({ label, href, icon }, index) => (
            <li className="footer__item" key={index}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label={label}
              >
                <img src={icon} alt={label} className="footer__icon" />
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Created by Dmitry Stupin with Love ^-^. All rights reserved.
        </p>
      </div>
    </footer>
  )
}