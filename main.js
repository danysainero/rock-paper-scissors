function itWorks() {
  console.log('working!')
}

window.onload = function () {
  itWorks()
}

let user_options = document.querySelectorAll('.game__user button')

user_options.forEach((option) =>
  option.addEventListener('click', () => {
    userPlay()
    addPoints()
  })
)

function addPoints() {
  let user_counter = document.querySelector('.counter__user').innerHTML
  document.querySelector('.counter__user').innerHTML = ++user_counter
  console.log('counter', user_counter)
}

function userPlay() {
  pcPlay()
}

function pcPlay() {
  let pc_options = document.querySelectorAll('.game__pc button')
  pcReset(pc_options)
  pc_options[Math.floor(Math.random() * pc_options.length)].classList.add(
    'pc-selection'
  )
}

function pcReset(pc_options) {
  pc_options.forEach((option) => option.classList.remove('pc-selection'))
}
