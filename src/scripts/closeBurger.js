import toggleBodyLock from './scrollLock'

const btnBurgerClose = document.querySelector('.burger-header__btn--close')
const burgerMenu = document.querySelector('.burger')
const blurBurger = document.querySelector('.blur-burger-menu')

btnBurgerClose.addEventListener('click', closeBurger)
blurBurger.addEventListener('click', closeBurger)
function closeBurger() {
  burgerMenu.classList.remove('burger--active')
  blurBurger.classList.remove('blur--active-burger')
  toggleBodyLock(false)
}

export default closeBurger
