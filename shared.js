var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var selectPlanButtons = document.querySelectorAll('.plan button')
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleButtom = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', openWindows)
}

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeWindows)
}

backdrop.addEventListener('click', closeWindows)

function closeWindows() {
  // modal.style.display = 'none'
  // backdrop.style.display = 'none'
  // mobileNav.style.display = 'none'
  // modal.className = '.close' // This will overwrite the complete class
  if (modal) {
    modal.classList.remove('open')
  }
  backdrop.classList.remove('open')
  mobileNav.classList.remove('open')
}

function openWindows() {
  // modal.style.display = 'block'
  // backdrop.style.display = 'block'
  if (modal) {
    modal.classList.add('open')
  }
  backdrop.classList.add('open')
}

toggleButtom.addEventListener('click', function() {
  // mobileNav.style.display = 'block'
  // backdrop.style.display = 'block'
  backdrop.classList.add('open')
  mobileNav.classList.add('open')
})
