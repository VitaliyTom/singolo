// ---------------------------  menu_header  --------------------------------------
const MENU_NAVI = document.getElementById("menu");
// console.log(Array.from(document.querySelectorAll('.li')).length );

MENU_NAVI.addEventListener("click", event => {
  MENU_NAVI.querySelectorAll("a").forEach(element =>
    element.classList.remove("active")
  );
  event.target.classList.add("active");
});

// ---------------------------  slider  --------------------------------------

let counter = 0;
let phones = Array.from(document.querySelectorAll(".phones"));
const SECTION = document.querySelector(".section_phone");
let mass = [];
const line_color_slider = document.querySelector(".line_color_slider");
const WRAPPER_PHONES = document.getElementById("wrapper_phones");

document.querySelector(".arrow_right").addEventListener("click", () => {
  if (counter === 0) {
    counter = -927;
    document.querySelector(".section_phone").classList.remove("red");
    document.querySelector(".section_phone").classList.add("blue");
    line_color_slider.classList.remove("red");
    line_color_slider.classList.add("blue");
    phones[0].style.left = `${counter}px`;
    phones[1].style.left = `${counter}px`;
  } else {
    counter = 0;
    document.querySelector(".section_phone").classList.remove("blue");
    document.querySelector(".section_phone").classList.add("red");
    line_color_slider.classList.remove("blue");
    line_color_slider.classList.add("red");
    phones[0].style.left = `${counter}px`;
    phones[1].style.left = `${counter}px`;
  }
});

document.querySelector(".arrow_left").addEventListener("click", () => {
  if (counter === 0) {
    counter = -927;
    document.querySelector(".section_phone").classList.remove("red");
    document.querySelector(".section_phone").classList.add("blue");
    line_color_slider.classList.remove("red");
    line_color_slider.classList.add("blue");
    phones[0].style.left = `${counter}px`;
    phones[1].style.left = `${counter}px`;
  } else {
    counter = 0;
    document.querySelector(".section_phone").classList.remove("blue");
    document.querySelector(".section_phone").classList.add("red");
    line_color_slider.classList.remove("blue");
    line_color_slider.classList.add("red");
    phones[0].style.left = `${counter}px`;
    phones[1].style.left = `${counter}px`;
  }
});

// ---------------------------  menu_portfolio  --------------------------------------

const MENU_PORTFOLIO = document.getElementById("button_portfolio");

MENU_PORTFOLIO.addEventListener("click", event => {
  MENU_PORTFOLIO.querySelectorAll("input").forEach(element =>
    element.classList.remove("active")
  );
  event.target.classList.add("active");
  addOrder();
});

// ---------------------------  portfolio  --------------------------------------

const PORTFOLIO = Array.from(
  document.getElementsByClassName("portfolio_image")
);
const BUTTON_PORTFOLIO = document.querySelectorAll(".button");

//              random number
function randomNumber(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

//              portfolio_image add order
function addOrder() {
  PORTFOLIO.forEach(item => {
    let i = randomNumber(0, PORTFOLIO.length);
    item.style.order = i;
  });
}

// ---------------------------  portfolio click img  --------------------------------------

const PORTFOLIO_IMG = document.getElementById("portfolio_image_wrap");

PORTFOLIO_IMG.addEventListener("click", event => {
  PORTFOLIO_IMG.querySelectorAll("div").forEach(el =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

// ---------------------------  screen  --------------------------------------

let iphone_vertical_screen = document.getElementById("iphone_vertical_screen");
let iphone_vertical = document.getElementById("button_screen_vertical");
let opacity_iphone_vertical = 1;

iphone_vertical.addEventListener("click", () => {
  if (opacity_iphone_vertical === 1) {
    opacity_iphone_vertical--;
    iphone_vertical_screen.style.opacity = opacity_iphone_vertical;
  } else {
    opacity_iphone_vertical++;
    iphone_vertical_screen.style.opacity = opacity_iphone_vertical;
  }
});

let iphone_horizontal_screen = document.getElementById(
  "iphone_horizontal_screen"
);
let iphone_horizontal = document.getElementById("button_screen_horizontal");
let opacity_iphone_horizontal = 1;

iphone_horizontal.addEventListener("click", () => {
  if (opacity_iphone_horizontal === 1) {
    opacity_iphone_horizontal--;
    iphone_horizontal_screen.style.opacity = opacity_iphone_horizontal;
  } else {
    opacity_iphone_horizontal++;
    iphone_horizontal_screen.style.opacity = opacity_iphone_horizontal;
  }
});

// ---------------------------  form  --------------------------------------

const SUBMIT = document.getElementById("submit");
const CLOSE_BUTTON = document.getElementById("close-btn");
const FORM_VALID = document.querySelector("form");

SUBMIT.addEventListener("click", event => {
  event.preventDefault();

  const subject = document.getElementById("subject").value.toString();
  const describe_project = document
    .getElementById("describe_project")
    .value.toString();

  if (FORM_VALID.checkValidity()) {
    if (subject === "") {
      document.getElementById("result_Subject").innerText = "Без темы";
    } else {
      document.getElementById("result_Subject").innerText = `Тема: ${subject}`;
    }
    if (describe_project === "") {
      document.getElementById("result_Describe_project").innerText =
        "Без описания";
    } else {
      document.getElementById(
        "result_Describe_project"
      ).innerText = `Описание: ${describe_project}`;
    }
    document.getElementById("message-block").classList.remove("hidden");
  } else {
    alert('Неправильно введено "name" или "e-mail !"');
  }
});

CLOSE_BUTTON.addEventListener("click", () => {
  document.getElementById("result_Subject").innerText = "";
  document.getElementById("result_Describe_project").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});
