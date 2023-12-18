document.addEventListener('mousedown', (e) => {
  if (e.shiftKey && e.which === 2) {
    e.preventDefault()

    const el = document.elementFromPoint(e.clientX, e.clientY)
    el.style.display = 'none'
    console.log(el)
  }
})