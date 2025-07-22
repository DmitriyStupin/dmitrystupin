const burgerButton = document.querySelector("[data-js-burger-button]")
const overlay = document.querySelector("[data-js-overlay]")
const menuItems = document.querySelectorAll("[data-js-menu-item]")

burgerButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("is-lock")
  burgerButton.classList.toggle("is-active")
  overlay.classList.toggle("is-active")
})

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    if (overlay.classList.contains("is-active")) {
      overlay.classList.remove("is-active")
      burgerButton.classList.remove("is-active")
      document.documentElement.classList.remove("is-lock")
    }
  })
})

console.log(menuItems)