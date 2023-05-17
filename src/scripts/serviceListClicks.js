const servicesItem = document.querySelectorAll('.services__item')

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
