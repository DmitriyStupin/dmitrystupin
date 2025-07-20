const switchThemeButton = document.querySelector(
  "[data-js-switch-theme-button]"
)
let darkmode = localStorage.getItem("darkmode")

const enableDarkMode = () => {
  document.body.classList.add("darkmode")
  localStorage.setItem("darkmode", "active")
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode")
  localStorage.setItem("darkmode", null)
}

switchThemeButton.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode")
  darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})

if (darkmode === "active") {
  enableDarkMode()
}
