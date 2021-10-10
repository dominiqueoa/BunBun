const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

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
