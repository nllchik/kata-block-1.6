const btnShowMore = document.querySelector('.brands__btn-show-more')
const btnListShowMore = document.querySelector('.brands__list')

btnShowMore.addEventListener('click', function () {
  btnShowMore.classList.toggle('brands__btn-show-more--open')
  btnListShowMore.classList.toggle('brands__list--show-all')
  if (btnShowMore.classList.contains('brands__btn-show-more--open')) {
    btnShowMore.textContent = 'Скрыть'
  } else {
    btnShowMore.textContent = 'Показать всё'
  }
})
