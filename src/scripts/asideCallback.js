import closeBurger from './closeBurger'
import toggleBodyLock from './scrollLock'

const btnCallbackOpen = document.querySelectorAll('.button--phone')
const btnCallbackClose = document.querySelector('.callback__button-close')
const callBackMenu = document.querySelector('.callback')
const blurCallback = document.querySelector('.blur-callback-menu')

function openCallback() {
  callBackMenu.classList.add('callback--active')
  blurCallback.classList.add('blur--active-callback')
  toggleBodyLock(true)
}

function closeCallback() {
  callBackMenu.classList.remove('callback--active')
  blurCallback.classList.remove('blur--active-callback')
  toggleBodyLock(false)
}

for (let i = 0; i < btnCallbackOpen.length; i++) {
  btnCallbackOpen[i].addEventListener('click', function () {
    closeBurger()
    openCallback()
  })
}
blurCallback.addEventListener('click', closeCallback)

btnCallbackClose.addEventListener('click', closeCallback)
