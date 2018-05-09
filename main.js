const button = document.getElementById("modalBtn");
const modal = document.getElementById("simpleModal");
const closeModalButton = document.getElementById("closeBtn");

button.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideHandler);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutsideHandler(e) {
  if (e.target === modal) {
    closeModal();
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    closeModal();
  }
};
