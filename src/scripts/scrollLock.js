function toggleBodyLock(bool) {
  if (bool) {
    document.querySelector('body').classList.add('lock')
  } else {
    document.querySelector('body').classList.remove('lock')
  }
}

export default toggleBodyLock
