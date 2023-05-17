import toggleBodyLock from './scrollLock'

const btnBurgerOpen = document.querySelector('.menu-burger')
const burgerMenu = document.querySelector('.burger')
const blurBurger = document.querySelector('.blur-burger-menu')

btnBurgerOpen.addEventListener('click', openBurger)

function openBurger() {
  burgerMenu.classList.add('burger--active')
  blurBurger.classList.add('blur--active-burger')
  toggleBodyLock(true)
}
