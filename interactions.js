const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

var removeFromCartButton = document.getElementsByClassName("removeFromCart")

for (var i = 0; i < removeFromCartButton.length; i++) {
  var button = removeFromCartButton[i]
  button.addEventListener("click", (event) => {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  })
}

function updateCartTotal() {
  var cartItemContainer = document.getElementById("cartConfirm")[0]
  var cartRows = cartItemContainer.getElementsByClassName("cartRow")
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName("price")[0]
    var quantityElement = cartRow.getElementsByClassName("cartQuantity")[0]
    var price = parseFloat(priceElement.innerText.replace("$", ""))
    var quantity = quantityElement.value
    total = total + price * quantity
  }
  document.getElementsByClassName("cartTotal")[0].innerText = "$" + total
}

// original
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.modalTarget)
    openModal(popup)
  })
})

overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".originalOverlay.active")
  popups.forEach((popup) => {
    closeModal(popup)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".originalOverlay")
    closeModal(popup)
  })
})

function openModal(popup) {
  if (popup == null) return
  popup.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(popup) {
  if (popup == null) return
  popup.classList.remove("active")
  overlay.classList.remove("active")
}

//blueberry
overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".blueberryOverlay.active")
  popups.forEach((popup) => {
    closeModal(popup)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".blueberryOverlay")
    closeModal(popup)
  })
})

//walnut
overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".walnutOverlay.active")
  popups.forEach((popup) => {
    closeModal(popup)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".walnutOverlay")
    closeModal(popup)
  })
})

//original (gluten-free)
overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".originalGlutenFreeOverlay.active")
  popups.forEach((popup) => {
    closeModal(popup)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".originalGlutenFreeOverlay")
    closeModal(popup)
  })
})

//pumpkin spice
overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".pumpkinSpiceOverlay.active")
  popups.forEach((popup) => {
    closeModal(popup)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".pumpkinSpiceOverlay")
    closeModal(popup)
  })
})

//caramel pecan
overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".caramelPecanOverlay.active")
  popups.forEach((popup) => {
    closeModal(popup)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".caramelPecanOverlay")
    closeModal(popup)
  })
})

// original quantity selector functionality
var numbers = document.getElementById("valueBox")
var numbers1 = document.getElementById("valueBoxOverlay")
var bunsLeft = document.getElementById("selectionsLeft")

for (i = 0; i < 7; i++) {
  var span = document.createElement("span")
  var span1 = document.createElement("span")
  var p = document.createElement("p")
  span.textContent = i
  span1.textContent = i
  p.textContent = i
  numbers.appendChild(span)
  numbers1.appendChild(span1)
  bunsLeft.appendChild(p)
}
var num = numbers.getElementsByTagName("span")
var num1 = numbers1.getElementsByTagName("span")
var buns = bunsLeft.getElementsByTagName("p")
var index = 0

function addOne() {
  num[index].style.display = "none"
  num1[index].style.display = "none"
  buns[index].style.display = "none"
  index = (index + 1) % num.length
  num[index].style.display = "initial"
  num1[index].style.display = "initial"
  buns[index].style.display = "initial"
}

function subtractOne() {
  num[index].style.display = "none"
  num1[index].style.display = "none"
  buns[index].style.display = "none"
  index = (index - 1 + num.length) % num.length
  num[index].style.display = "initial"
  num1[index].style.display = "initial"
  buns[index].style.display = "initial"
}

// blueberry quantity selector functionality
var blueberry = document.getElementById("valueBoxBlueberry")

for (i = 0; i < 7; i++) {
  var span = document.createElement("span")
  var p = document.createElement("p")
  span.textContent = i
  p.textContent = i
  blueberry.appendChild(span)
  bunsLeft.appendChild(p)
}
var blue = blueberry.getElementsByTagName("span")

function addOneBlueberry() {
  blue[index].style.display = "none"
  buns[index].style.display = "none"
  index = (index + 1) % blue.length
  blue[index].style.display = "initial"
  buns[index].style.display = "initial"
}

function subtractOneBlueberry() {
  blue[index].style.display = "none"
  buns[index].style.display = "none"
  index = (index - 1 + blue.length) % blue.length
  blue[index].style.display = "initial"
  buns[index].style.display = "initial"
}

// cart open and close

function show() {
  document.getElementById("cart").classList.toggle("active")
}

function closeCart() {
  document.getElementById("cart").classList.remove("active")
}
