// handle click on icon-arrow-left
let status = true;
var iconArrowLefts = $(".icon-arrow-left");
for (var i = 0; i < iconArrowLefts.length; i++) {
  (function (i) {
    iconArrowLefts[i].onclick = function () {
      if (status === true) {
        $(iconArrowLefts[i]).find("img").removeClass("transform-arrow");
        $(".content-left").addClass("flex-grow-1");
        $(".content-child").addClass("hidden");
        status = false;
      } else {
        $(iconArrowLefts[i]).find("img").addClass("transform-arrow");
        $(".content-left").removeClass("flex-grow-1");
        $(".content-child").removeClass("hidden");
        status = true;
      }
    };
  })(i);
}

// const gutter = document.querySelector(".gutter");
// const contentLeft = document.querySelector(".content-left");
// const contentRight = document.querySelector(".content-right");
// const maxWidth = window.innerWidth - gutter.offsetWidth; // Lấy kích thước màn hình tối đa

// let gutterStartX = 0;
// let gutterStartLeft = gutter.offsetLeft;

// function onDragStart(event) {
//   gutterStartX = event.clientX;
//   gutterStartLeft = gutter.offsetLeft;
// }

// function onDrag(event) {
//   const newLeft = gutterStartLeft + (event.clientX - gutterStartX);
//   gutter.style.left = `${Math.max(
//     0,
//     Math.min(newLeft, maxWidth - gutter.offsetWidth)
//   )}px`; // Giới hạn vị trí left

//   // Cập nhật kích thước cho `.content-left` và `.content-right`
//   const contentLeftWidth = contentLeft.offsetWidth;
//   const contentRightWidth = contentRight.offsetWidth;
//   const totalWidth = contentLeftWidth + gutter.offsetWidth + contentRightWidth;

//   contentLeft.style.width = `${(contentLeftWidth / totalWidth) * 100}%`;
//   contentRight.style.width = `${(contentRightWidth / totalWidth) * 100}%`;
// }

// gutter.addEventListener("mousedown", onDragStart);
// document.addEventListener("mousemove", onDrag);
// document.addEventListener("mouseup", () => (gutterStartX = 0));
