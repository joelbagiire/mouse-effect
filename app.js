var cursor = document.querySelector('#cursor')

document.addEventListener('mousemove',(event) => {
  var x = event.clientX
  var y = event.clientY

  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
})