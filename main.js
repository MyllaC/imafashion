function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  document.body.classList.remove('sp-expanded')
  document.body.classList.remove('search-expanded')
}

function openShoppingCart() {
  document.body.classList.add('sp-expanded')
}

function openSearchPage() {
  document.body.classList.add('search-expanded')
}

var url = 'http://127.0.0.1:5500/product-page.html'
var btn = document.querySelectorAll('.card')

function openInNewTab(url, id) {
  var win = window.open(url + '?p_code=' + id, '_parent')
  win.focus()
}

for (var x = 0; x < btn.length; x++) {
  console.log(btn[x])
  btn[x].addEventListener('click', ev => {
    openInNewTab(url, ev.target.id)
  })
}
