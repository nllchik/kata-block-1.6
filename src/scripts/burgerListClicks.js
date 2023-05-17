const burgerLinks = document.querySelectorAll('.burger-main__item')

for (let i = 0; i < burgerLinks.length; i++) {
  burgerLinks[i].addEventListener('click', function () {
    blurBurger.classList.remove('blur--active-burger')
    burgerMenu.classList.remove('burger--active')
    for (let j = 0; j < burgerLinks.length; j++) {
      if (i !== j) {
        burgerLinks[j].classList.remove('burger-main__item--active')
        toggleBodyLock()
      }
    }
    burgerLinks[i].classList.add('burger-main__item--active')
  })
}
