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
