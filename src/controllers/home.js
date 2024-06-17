// Part block search
let header__blockSearch = document.getElementById("header__blockSearch");
let header__blockSearch_logoSearch = document.getElementById(
  "header__blockSearch-logoSearch"
);
let blockSearch = document.getElementById("Search");
let search__imgClose = document.getElementById("search__imgClose");

header__blockSearch.onclick = function () {
  blockSearch.classList.remove("displayNone");
};

header__blockSearch_logoSearch.onclick = function () {
  blockSearch.classList.remove("displayNone");
};

header__blockSearch_logoSearch.addEventListener("click", () => {
  blockSearch.classList.remove("displayNone");
});

search__imgClose.onclick = function () {
  blockSearch.classList.add("displayNone");
};

// Part hover course and news
let header__logoCourse = document.getElementById("header__logoCourse");
let header__textStudy = document.getElementById("header__textStudy");
header__logoCourse.onmouseover = function () {
  header__textStudy.classList.remove("displayNone");
};

header__logoCourse.onmouseout = function () {
  header__textStudy.classList.add("displayNone");
};

let header__logoNews = document.getElementById("header__logoNews");
let header__textNews = document.getElementById("header__textNews");
header__logoNews.onmouseover = function () {
  header__textNews.classList.remove("displayNone");
};

header__logoNews.onmouseout = function () {
  header__textNews.classList.add("displayNone");
};

// Part header__blockMenu
let header__iconMenu = document.getElementById("header__iconMenu");
let header__blockMenu = document.getElementById("header__blockMenu");
let header__textMenu = document.getElementById("header__textMenu");
header__iconMenu.onmouseover = function () {
  header__blockMenu.style.backgroundColor = "#d54253";
  header__textMenu.classList.remove("displayNone");
};
header__iconMenu.onmouseout = function () {
  header__blockMenu.style.backgroundColor = null;
  header__textMenu.classList.add("displayNone");
};

function addClass(text) {
  text.classList.add("displayNone");
}
function removeClass(text) {
  text.classList.remove("displayNone");
}

// Part chuyển đổi ảnh ở home
let products__food = document.getElementById("products__food");
let products__robot = document.getElementById("products__robot");
let products__clothes = document.getElementById("products__clothes");
let products__mouse = document.getElementById("products__mouse");
let products__laptop = document.getElementById("products__laptop");
let products__phone = document.getElementById("products__phone");
let products__book = document.getElementById("products__book");
let btn_nextLeft = document.getElementById("products__btnNextLeft");
let btn_nextRight = document.getElementById("products__btnNextRight");

let array = [
  products__food,
  products__robot,
  products__clothes,
  products__mouse,
  products__laptop,
  products__phone,
  products__book,
];

let i = 0;
function loop() {
  // Thêm class 'displayNone' vào phần tử hiện tại
  array[i % array.length].classList.add("displayNone");

  // Loại bỏ class 'displayNone' khỏi phần tử i + 3
  array[(i + 3) % array.length].classList.remove("displayNone");

  i++;
}

let interval = setInterval(loop, 5000);

array.forEach((id) => {
  id.onmouseover = function () {
    clearInterval(interval);
  };
  id.onmouseout = function () {
    interval = setInterval(loop, 5000);
  };
});

btn_nextLeft.onclick = function () {
  clearInterval(interval);
  loop();
};
btn_nextRight.onclick = function () {
  clearInterval(interval);
  loop();
};
