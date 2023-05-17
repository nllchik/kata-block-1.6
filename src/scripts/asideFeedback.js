import closeBurger from './closeBurger'
import toggleBodyLock from './scrollLock'

const btnFeedbackOpen = document.querySelectorAll('.button--massage')
const btnFeedbackClose = document.querySelector('.feedback__btn-close')
const feedbackMenu = document.querySelector('.feedback')
const blurFeedback = document.querySelector('.blur-feedback-menu')

for (let i = 0; i < btnFeedbackOpen.length; i++) {
  btnFeedbackOpen[i].addEventListener('click', function () {
    closeBurger()
    openFeedback()
  })
}

function openFeedback() {
  feedbackMenu.classList.add('feedback--active')
  blurFeedback.classList.add('blur--active-feedback')
  toggleBodyLock(true)
}
function closeFeedback() {
  feedbackMenu.classList.remove('feedback--active')
  blurFeedback.classList.remove('blur--active-feedback')
  toggleBodyLock(false)
}

btnFeedbackClose.addEventListener('click', closeFeedback)
blurFeedback.addEventListener('click', closeFeedback)

btnFeedbackClose.addEventListener('click', closeFeedback)
