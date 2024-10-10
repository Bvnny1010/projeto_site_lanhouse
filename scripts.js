// Inicialização do AOS
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1200,
    once: false,
  })

  const menuToggle = document.querySelector(".menu-toggle")
  const menuOverlay = document.querySelector(".menu-overlay")

  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.toggle("active")
  })
})

// Responsividade do menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".header-menu").classList.toggle("active")
})
