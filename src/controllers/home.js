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

// Part transform courses
let btnNextLeft = document.querySelector(".course__btnNextLeft");
let btnNextRight = document.querySelector(".course__btnNextRight");

btnNextLeft.onclick = function () {
  handleTransformCourses("left");
};
btnNextRight.onclick = function () {
  handleTransformCourses("right");
};

var courses__blockChild = document.querySelector(".courses__blockChild"); // khối cha
var course = $(".courses__course"); // danh sách các khối con
var j = 0;
function handleTransformCourses(direction) {
  // nếu hướng là trái
  if (direction == "left") {
    courses__blockChild.classList.add("transform-courses-left");
    setTimeout(() => {
      // Xóa khối con
      $(course[j]).addClass("displayNone");

      // Thêm khối con hiện tại vào cuối danh sách khối cha
      $(course[j])
        .remove()
        .appendTo(courses__blockChild)
        .removeClass("displayNone");

      // Tính toán chỉ số cho khối tiếp theo
      j = (j + 1) % course.length;

      // delete effect in block dad
      courses__blockChild.classList.remove("transform-courses-left");
    }, 3000);
  } else if (direction == "right") {
    courses__blockChild.classList.add("transform-courses-right");
    courses__blockChild.classList.add("flex-row-reverse");
    setTimeout(() => {
      // Xóa khối con
      $(course[j]).addClass("displayNone");

      // Thêm khối con hiện tại vào cuối danh sách khối cha
      $(course[j])
        .remove()
        .appendTo(courses__blockChild)
        .removeClass("displayNone");

      // Tính toán chỉ số cho khối tiếp theo
      j = (j + 1) % course.length;

      // delete effect in block dad
      courses__blockChild.classList.remove("transform-courses-right");
    }, 3000);
  }
}

// Part chuyển đổi ảnh sản phẩm
var idInterval;
idInterval = setInterval(() => {
  handleTransformProduct("left");
}, 3000);
$("#products").hover(
  function () {
    clearInterval(idInterval);
  },
  function () {
    idInterval = setInterval(() => {
      handleTransformProduct("left");
    }, 3000);
  }
);

let btn_nextLeft = document.getElementById("products__btnNextLeft");
let btn_nextRight = document.getElementById("products__btnNextRight");
btn_nextLeft.onclick = function () {
  handleTransformProduct("left");
};
btn_nextRight.onclick = function () {
  handleTransformProduct("right");
};
var products = document.querySelector("#products"); // khối cha
var product = $(".products-product"); // danh sách các khối con
var z = 0;

function handleTransformProduct(direction) {
  // nếu hướng là trái
  if (direction == "left") {
    products.classList.add("transform-product-left");
    setTimeout(() => {
      // Xóa khối con
      $(product[z]).addClass("displayNone");

      // Thêm khối con hiện tại vào cuối danh sách khối cha
      $(product[z]).remove().appendTo(products).removeClass("displayNone");

      // Tính toán chỉ số cho khối tiếp theo
      z = (z + 1) % product.length;

      // delete effect in block dad
      products.classList.remove("transform-product-left");
    }, 3000);
  } else if (direction == "right") {
    products.classList.add("transform-product-right");
    products.classList.add("flex-row-reverse");
    setTimeout(() => {
      // Xóa khối con
      $(product[z]).addClass("displayNone");

      // Thêm khối con hiện tại vào cuối danh sách khối cha
      $(product[z]).remove().appendTo(products).removeClass("displayNone");

      // Tính toán chỉ số cho khối tiếp theo
      z = (z + 1) % product.length;

      // delete effect in block dad
      products.classList.remove("transform-product-right");
    }, 3000);
  }
}
