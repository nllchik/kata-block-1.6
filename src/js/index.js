import '../scss/style.scss'

//----------------------------Разворачивает текст-------------------------------------------------------------
const body = document.body
const btnReadMore = body.querySelector('.about__read-more-btn')
const aboutText = body.querySelector('.about__text')

btnReadMore.addEventListener('click', function () {
  btnReadMore.classList.toggle('about__read-more-btn--open')
  aboutText.classList.toggle('about__text--read-more')
  if (btnReadMore.classList.contains('about__read-more-btn--open')) {
    btnReadMore.textContent = 'Свернуть'
  } else {
    btnReadMore.textContent = 'Читать далее'
  }
})
//----------------------------------------------------------------------------------------------------------//

//------------------------------Обработчик событий при нажатии на элементы в списке services------------------
const servicesItem = body.querySelectorAll('.services__item')

for (let i = 0; i < servicesItem.length; i++) {
  servicesItem[i].addEventListener('click', function () {
    for (let j = 0; j < servicesItem.length; j++) {
      if (j !== i) {
        servicesItem[j].classList.remove('services__item--active')
      }
    }
    if (!servicesItem[i].classList.contains('services__item--active')) {
      servicesItem[i].classList.add('services__item--active')
    }
  })
}
//----------------------------------------------------------------------------------------------------------//

//---------------------------------------Раскрывает список брендов--------------------------------------------
const btnShowMore = body.querySelector('.brands__btn-show-more')
const btnListShowMore = body.querySelector('.brands__list')

btnShowMore.addEventListener('click', function () {
  btnShowMore.classList.toggle('brands__btn-show-more--open')
  btnListShowMore.classList.toggle('brands__list--show-all')
  if (btnShowMore.classList.contains('brands__btn-show-more--open')) {
    btnShowMore.textContent = 'Скрыть'
  } else {
    btnShowMore.textContent = 'Показать всё'
  }
})

const repairBtnShow = body.querySelector('.repair__btn-show-more')
const repairListShow = body.querySelector('.repair__list')

repairBtnShow.addEventListener('click', function () {
  repairBtnShow.classList.toggle('repair__btn-show-more--open')
  repairListShow.classList.toggle('repair__list--show-all')
  if (repairBtnShow.classList.contains('repair__btn-show-more--open')) {
    repairBtnShow.textContent = 'Скрыть'
  } else {
    repairBtnShow.textContent = 'Показать всё'
  }
})
//----------------------------------------------------------------------------------------------------------//

//---------------------------SLIDER-------------------------------------------------------------------------

let sliders
const breakpointSwiper = window.matchMedia('(max-width: 768px)')
const swiper = body.querySelector('.swiper')
function createSlider() {
  if (breakpointSwiper.matches) {
    sliders = new Swiper('.swiper', {
      slidesPerView: 'auto',
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  } else {
    if (swiper.classList.contains('swiper-initialized')) {
      for (let slider of sliders) {
        slider.destroy()
      }
    }
  }
}
createSlider()

breakpointSwiper.addEventListener('change', createSlider)
//----------------------------------------------------------------------------------------------------------//

//-------------------------Функция для запрета скролла, когда меню открыто------------------------------------
function toggleBodyLock() {
  if (
    burgerMenu.classList.contains('burger--active') ||
    callBackMenu.classList.contains('callback--active') ||
    feedbackMenu.classList.contains('feedback--active')
  ) {
    document.body.classList.add('lock')
  } else {
    document.body.classList.remove('lock')
  }
}
//----------------------------------------------------------------------------------------------------------//

//--------------------------------Отвечает за открытие/закрытие menu Burger-----------------------------------
let btnBurgerOpen = document.querySelector('.menu-burger')
let btnBurgerClose = document.querySelector('.burger-header__btn--close')
let burgerMenu = document.querySelector('.burger')
let blurBurger = document.querySelector('.blur-burger-menu')

btnBurgerOpen.addEventListener('click', toggleBurger)
btnBurgerClose.addEventListener('click', toggleBurger)
blurBurger.addEventListener('click', toggleBurger)

function toggleBurger() {
  burgerMenu.classList.toggle('burger--active')
  blurBurger.classList.toggle('blur--active-burger')
  toggleBodyLock()
}
//----------------------------------------------------------------------------------------------------------//

//------------------Обработчик событий при нажатии на элементы в меню Burger-----------------------------------
let burgerLinks = body.querySelectorAll('.burger-main__item')

for (let i = 0; i < burgerLinks.length; i++) {
  burgerLinks[i].addEventListener('click', function () {
    blurBurger.classList.remove('blur--active-burger')
    burgerMenu.classList.remove('burger--active')
    for (let j = 0; j < burgerLinks.length; j++) {
      if (i !== j) {
        burgerLinks[j].classList.remove('burger-main__item--active')
      }
    }
    burgerLinks[i].classList.add('burger-main__item--active')
  })
}
//----------------------------------------------------------------------------------------------------------//

//--------------------Отвечает за открытие/закрытие Feedback menu---------------------------------------------
let btnFeedbackOpen = document.querySelectorAll('.button--massage')
let btnFeedbackClose = document.querySelector('.feedback__btn-close')
let feedbackMenu = document.querySelector('.feedback')
let blurFeedback = document.querySelector('.blur-feedback-menu')

for (let i = 0; i < btnFeedbackOpen.length; i++) {
  btnFeedbackOpen[i].addEventListener('click', toggleFeedback)
}
btnFeedbackClose.addEventListener('click', toggleFeedback)
blurFeedback.addEventListener('click', toggleFeedback)

function toggleFeedback() {
  feedbackMenu.classList.toggle('feedback--active')
  blurFeedback.classList.toggle('blur--active-feedback')
  toggleBodyLock()
}

for (let i = 0; i < btnFeedbackOpen.length; i++) {
  btnFeedbackOpen[i].addEventListener('click', function () {
    burgerMenu.classList.remove('burger--active')
    blurBurger.classList.remove('blur--active-burger')
  })
}
//----------------------------------------------------------------------------------------------------------//

//--------------------Отвечает за открытие/закрытие Feedback menu-----------------------------------------------
let btnCallbackOpen = document.querySelectorAll('.button--phone')
let btnCallbackClose = document.querySelector('.callback__button-close')
let callBackMenu = document.querySelector('.callback')
let blurCallback = document.querySelector('.blur-callback-menu')

for (let i = 0; i < btnCallbackOpen.length; i++) {
  btnCallbackOpen[i].addEventListener('click', toggleCallback)
}
btnCallbackClose.addEventListener('click', toggleCallback)
blurCallback.addEventListener('click', toggleCallback)

function toggleCallback() {
  callBackMenu.classList.toggle('callback--active')
  blurCallback.classList.toggle('blur--active-callback')
  toggleBodyLock()
}

for (let i = 0; i < btnCallbackOpen.length; i++) {
  btnCallbackOpen[i].addEventListener('click', function () {
    burgerMenu.classList.remove('burger--active')
    blurBurger.classList.remove('blur--active-burger')
  })
}
//----------------------------------------------------------------------------------------------------------//
