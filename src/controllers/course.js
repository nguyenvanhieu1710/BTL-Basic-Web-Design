// handle click button see more
$(".seeMore").click(function () {
  $(".introduction").css("max-height", "fit-content");
  $(".introduction").addClass("hide-before");
  $(".seeMore").addClass("hidden");
});
$(".zoom-out").click(function () {
  $(".introduction").css("max-height", "500px");
  $(".introduction").removeClass("hide-before");
  $(".seeMore").removeClass("hidden");
});

// handle click button detail and icon arrow up
$(".btnDetail").click(function () {
  $(".item-content").removeClass("hidden");
  $(".icon-arrow-up").removeClass("hidden");
  $(".btnDetail").addClass("hidden");
});
$(".icon-arrow-up").click(function () {
  $(".item-content").addClass("hidden");
  $(".icon-arrow-up").addClass("hidden");
  $(".btnDetail").removeClass("hidden");
});

// handle photo transition effect
var courses = $(".courses"); // khối cha
var courses_block = $(".courses-block"); // các khối con
var j = 0;
var intervalId; // id của setInterval
var timeoutId; // id của setTimeout
// Thêm hiệu ứng cho khối cha
courses.addClass("moveBlock");
handlePhotoTransition();

function handlePhotoTransition() {
  // khi khối cha có class moveBlock
  if (courses.hasClass("moveBlock")) {
    intervalId = setInterval(function () {
      // Xóa khối con
      $(courses_block[j]).addClass("hidden");
      // sau 500 mili giây thì thực thi
      timeoutId = setTimeout(function () {
        // Thêm khối con hiện tại vào cuối danh sách khối cha
        $(courses_block[j]).remove().appendTo(courses).removeClass("hidden");

        // Tính toán chỉ số cho khối tiếp theo
        j = (j + 1) % courses_block.length;
      }, 500);
    }, 3000);
  } else {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
  }
}

// khi hover vào thì dừng
courses.hover(
  function () {
    courses.removeClass("moveBlock");
    handlePhotoTransition();
  },
  function () {
    courses.addClass("moveBlock");
    handlePhotoTransition();
  }
);
