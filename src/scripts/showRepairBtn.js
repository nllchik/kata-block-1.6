const repairBtnShow = document.querySelector('.repair__btn-show-more')
const repairListShow = document.querySelector('.repair__list')

repairBtnShow.addEventListener('click', function () {
  repairBtnShow.classList.toggle('repair__btn-show-more--open')
  repairListShow.classList.toggle('repair__list--show-all')
  if (repairBtnShow.classList.contains('repair__btn-show-more--open')) {
    repairBtnShow.textContent = 'Скрыть'
  } else {
    repairBtnShow.textContent = 'Показать всё'
  }
})
