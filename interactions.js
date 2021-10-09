const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

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
