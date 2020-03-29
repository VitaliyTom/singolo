// ---------------------------  burger  --------------------------------------

const BURGER_OPEN = document.getElementById('burger')
const NAVIGATION_BURGER = document.querySelector('.nav')
const MENU_A = document.getElementById('menu').querySelectorAll('a')
const HEADER = document.querySelector('header')
const MAIN = document.querySelector('main')
const FOOTER = document.querySelector('footer')
const MENU = document.getElementById('menu')

BURGER_OPEN.addEventListener('click', () => {
  NAVIGATION_BURGER.classList.toggle('open')
  HEADER.classList.toggle('open')
  MAIN.classList.toggle('blur')
  FOOTER.classList.toggle('blur')
})

MENU.addEventListener('click', () => {
  MENU.querySelectorAll('a').forEach(element => {
  NAVIGATION_BURGER.classList.remove('open')
  HEADER.classList.remove('open')
  MAIN.classList.remove('blur')
  FOOTER.classList.remove('blur')
  })
})

// function burger() {
//   NAVIGATION_BURGER.classList.toggle('open')
//   HEADER.classList.toggle('open')
//   MAIN.classList.toggle('blur')
//   FOOTER.classList.toggle('blur')
// }

// ---------------------------  menu_header  --------------------------------------

const SECTION = Array.from(document.querySelectorAll('section'))

document.addEventListener('scroll', onScroll)
function onScroll() {
  const CURSOR_POSITION = window.scrollY

  for (let i = 0; i < SECTION.length; i++) {
    if (i === SECTION.length - 1) {
      if (SECTION[i].offsetTop - 100 <= CURSOR_POSITION + 145) {
        forEachElement()
      }
    }
    if (SECTION[i].offsetTop - 100 <= CURSOR_POSITION + 8) {
      forEachElement()
    }

    function forEachElement() {
      MENU_A.forEach(element => {
        element.classList.remove('active')

        if (
          SECTION[i].getAttribute('class') ===
          element.getAttribute('href').substring(1)
        ) {
          element.classList.add('active')
        }
      })
    }
  }
}

// ---------------------------  slider  --------------------------------------

let counter = 0
const PHONES = Array.from(document.querySelectorAll('.phones'))
const LINE_COLOR_SLIDER = document.querySelector('.line_color_slider')
let SCREEN_WIDTH = window.innerWidth

document.querySelector('.arrow_right').addEventListener('click', () => {
  if (counter === 0) {
    counter = -100
    document.querySelector('.container_phone').classList.remove('red')
    document.querySelector('.container_phone').classList.add('blue')
    LINE_COLOR_SLIDER.classList.remove('red')
    LINE_COLOR_SLIDER.classList.add('blue')
    PHONES[0].style.left = `${counter}%`
    PHONES[1].style.left = `${counter}%`
  } else {
    counter = 0
    document.querySelector('.container_phone').classList.remove('blue')
    document.querySelector('.container_phone').classList.add('red')
    LINE_COLOR_SLIDER.classList.remove('blue')
    LINE_COLOR_SLIDER.classList.add('red')
    PHONES[0].style.left = `${counter}%`
    PHONES[1].style.left = `${counter}%`
  }
})

document.querySelector('.arrow_left').addEventListener('click', () => {
  if (counter === 0) {
    counter = -100
    document.querySelector('.container_phone').classList.remove('red')
    document.querySelector('.container_phone').classList.add('blue')
    LINE_COLOR_SLIDER.classList.remove('red')
    LINE_COLOR_SLIDER.classList.add('blue')
    PHONES[0].style.left = `${counter}%`
    PHONES[1].style.left = `${counter}%`
  } else {
    counter = 0
    document.querySelector('.container_phone').classList.remove('blue')
    document.querySelector('.container_phone').classList.add('red')
    LINE_COLOR_SLIDER.classList.remove('blue')
    LINE_COLOR_SLIDER.classList.add('red')
    PHONES[0].style.left = `${counter}%`
    PHONES[1].style.left = `${counter}%`
  }
})

// ---------------------------  screen  --------------------------------------

const IPHONE_VERTICAL_SCREEN = document.getElementById('iphone_vertical_screen')
const IPHONE_VERTICAL = document.getElementById('button_screen_vertical')
let opacity_iphone_vertical = 1

IPHONE_VERTICAL.addEventListener('click', () => {
  if (opacity_iphone_vertical === 1) {
    opacity_iphone_vertical--
    IPHONE_VERTICAL_SCREEN.style.opacity = opacity_iphone_vertical
  } else {
    opacity_iphone_vertical++
    IPHONE_VERTICAL_SCREEN.style.opacity = opacity_iphone_vertical
  }
})

const IPHONE_HORIZONTAL_SCREEN = document.getElementById(
  'iphone_horizontal_screen',
)
const IPHONE_HORIZONTAL = document.getElementById('button_screen_horizontal')
let opacity_iphone_horizontal = 1

IPHONE_HORIZONTAL.addEventListener('click', () => {
  if (opacity_iphone_horizontal === 1) {
    opacity_iphone_horizontal--
    IPHONE_HORIZONTAL_SCREEN.style.opacity = opacity_iphone_horizontal
  } else {
    opacity_iphone_horizontal++
    IPHONE_HORIZONTAL_SCREEN.style.opacity = opacity_iphone_horizontal
  }
})

// ---------------------------  menu_portfolio  --------------------------------------

const MENU_PORTFOLIO = document.getElementById('button_portfolio')

MENU_PORTFOLIO.addEventListener('click', event => {
  MENU_PORTFOLIO.querySelectorAll('input').forEach(element =>
    element.classList.remove('active'),
  )
  event.target.classList.add('active')
  addOrder()
})

// ---------------------------  portfolio  --------------------------------------

const PORTFOLIO = Array.from(document.getElementsByClassName('portfolio_image'))
const BUTTON_PORTFOLIO = document.querySelectorAll('.button')

//              random number
function randomNumber(min, max) {
  let random = min + Math.random() * (max + 1 - min)
  return Math.floor(random)
}

//              portfolio_image add order
function addOrder() {
  PORTFOLIO.forEach(item => {
    let i = randomNumber(0, PORTFOLIO.length)
    item.style.order = i
  })
}

// ---------------------------  portfolio click img  --------------------------------------

const PORTFOLIO_IMG = document.getElementById('portfolio_image_wrap')

PORTFOLIO_IMG.addEventListener('click', event => {
  PORTFOLIO_IMG.querySelectorAll('div').forEach(el =>
    el.classList.remove('active'),
  )
  event.target.classList.add('active')
})

// ---------------------------  form  --------------------------------------

const SUBMIT = document.getElementById('submit')
const CLOSE_BUTTON = document.getElementById('close-btn')
const FORM_VALID = document.querySelector('form')

SUBMIT.addEventListener('click', event => {
  event.preventDefault()

  const SUBJECT = document.getElementById('subject').value.toString()
  const DESCRIBE_PROJECT = document
    .getElementById('describe_project')
    .value.toString()

  if (FORM_VALID.checkValidity()) {
    if (SUBJECT === '') {
      document.getElementById('result_Subject').innerText = 'Без темы'
    } else {
      document.getElementById('result_Subject').innerText = `Тема: ${SUBJECT}`
    }
    if (DESCRIBE_PROJECT === '') {
      document.getElementById('result_Describe_project').innerText =
        'Без описания'
    } else {
      document.getElementById(
        'result_Describe_project',
      ).innerText = `Описание: ${DESCRIBE_PROJECT}`
    }
    document.getElementById('message-block').classList.remove('hidden')

    HEADER.classList.add('blur')
    MAIN.classList.add('blur')
    FOOTER.classList.add('blur')
  } else {
    alert('Неправильно введено "name" или "e-mail !"')
  }
})

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('result_Subject').innerText = ''
  document.getElementById('result_Describe_project').innerText = ''
  document.getElementById('message-block').classList.add('hidden')
  document.getElementsByClassName('form')[0].reset()
  HEADER.classList.remove('blur')
  MAIN.classList.remove('blur')
  FOOTER.classList.remove('blur')
})
