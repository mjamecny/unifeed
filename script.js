const hamburgerElement = document.querySelector(".hamburger")
const navElement = document.querySelector(".nav")

console.log(hamburgerElement)

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("hidden")
})
