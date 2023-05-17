const btnSend = document.querySelectorAll('.button-send')

for (let i = 0; i < btnSend.length; i++) {
  btnSend[i].addEventListener('click', function (evt) {
    evt.preventDefault()
  })
}
