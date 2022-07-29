const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('p_code')
const productPhoto = document.querySelector('.main-product-photo')
const productTittle = document.querySelector('.product-tittle')
const productPrice = document.querySelector('.product-price')
const productDivision = document.querySelector('.product-division')

let dados = myParam.split('/')
const title = dados[0]
const price = dados[1]
const division = dados[2]
const photo = dados[3]
console.log(division)

productTittle.innerText = title
productPrice.innerText = price
productDivision.innerText = division
productPhoto.src = `../assets/${photo}`

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
