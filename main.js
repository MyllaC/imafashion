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
