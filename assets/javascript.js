
var verbs = ['POST', 'GET', 'UPDATE', 'DELETE', 'PUT']

document.querySelectorAll('code').forEach(el => {
  if(verbs.includes(el.textContent)) {
    el.classList.add('verb')
    el.classList.add('verb-' + el.textContent.toLowerCase())
  }

  if (el.offsetHeight > 400) {
    var div = document.createElement('div')
    div.classList.add('code-expand')
    div.innerHTML = "Expand <span>↧</span>"
    el.classList.add('code-collapsed')
    div.onclick = function() {
      el.removeChild(div)
      el.classList.remove('code-collapsed')
    }
    el.appendChild(div)
  }
})
