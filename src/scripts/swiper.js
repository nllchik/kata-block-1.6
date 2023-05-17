import Swiper, { Navigation, Pagination } from 'swiper'

let sliders
const breakpointSwiper = window.matchMedia('(max-width: 768px)')
const swiper = document.querySelector('.swiper')
function createSlider() {
  if (breakpointSwiper.matches) {
    sliders = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
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
