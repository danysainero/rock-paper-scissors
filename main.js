function itWorks() {
  console.log('working!')
}

window.onload = function () {
  itWorks()
}

let user_options = document.querySelectorAll('.game__user button')

user_options.forEach((option) =>
  option.addEventListener('click', () => {
    userPlay(event)
  })
)

function userPlay(event) {
  let user_selection_value = event.target.getAttribute("aria-valuetext")
  let img_user_selection = document.querySelector('.game__user__selection img')
  img_user_selection.src = `./images/${user_selection_value}.png`
  pcPlay(user_selection_value)
}

function pcPlay(user_selection_value) {
  let img_pc_selection = document.querySelector('.game__pc__selection img')
  let pc_options = document.querySelectorAll('.game__pc button')
  let random_pc_selection = Math.floor(Math.random() * pc_options.length)
  let pc_selection = pc_options[random_pc_selection]
  pcReset(pc_options);
  pc_selection.classList.add('pc-selection')
  img_pc_selection.src = `./images/${pc_selection.getAttribute("aria-valuetext")}.png`
  checkResult(user_selection_value, pc_selection.getAttribute("aria-valuetext"))
}

function checkResult(user_selection_value, pc_selection_value) {
  console.log(user_selection_value, pc_selection_value)

  if (user_selection_value == pc_selection_value) {
    console.log('It´s a tie! Lets play again.')
  } else if (user_selection_value == 'rock') {
    if (pc_selection_value == 'scissors') {
      console.log('rock wins => You win!')
      addPoints('user')
    } else {
      console.log('paper wins => COMPUTER WINS.')
      addPoints('pc')
    }
  } else if (user_selection_value == 'paper') {
    if (pc_selection_value == 'rock') {
      console.log('paper wins => You win!')
      addPoints('user')
    } else {
      console.log('scissors wins => COMPUTER WINS.')
      addPoints('pc')
    }
  } else if (user_selection_value == 'scissors') {
    if (pc_selection_value == 'rock') {
      console.log('rock wins => COMPUTER WINS.')
      addPoints('pc')
    } else {
      console.log('scissors wins => You win!')
      addPoints('user')
    }
  }
}

function addPoints(winner) {
  let user_counter = document.querySelector('.counter__user').innerHTML
  let pc_counter = document.querySelector('.counter__pc').innerHTML
  if (winner == 'user') {
    document.querySelector('.counter__user').innerHTML = ++user_counter
  } else {
    document.querySelector('.counter__pc').innerHTML = ++pc_counter
  }
}

function pcReset(pc_options) {
  pc_options.forEach((option) => option.classList.remove('pc-selection'))
}
