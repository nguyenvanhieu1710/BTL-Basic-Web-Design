$(document).ready(function () {
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validate = () => {
    const $result = $("#textError");
    const email = $("#inputEmail").val().trim();
    const password = $("#inputPassword").val().trim();
    $result.text("");

    // check empty
    if (email === "" || password === "") {
      $(".errorBlock").removeClass("d-None");
      $result.text("Please enter enough information. ");
      return false;
    } else {
      $(".errorBlock").addClass("d-None");
      $result.text("");
    }

    if (validateEmail(email)) {
      // valid email
      $(".errorBlock").addClass("d-None");
    } else {
      // invalid email
      $(".errorBlock").removeClass("d-None");
      $result.text("Invalid username or password.");
      return false;
    }
    return true;
  };

  // handle click on button login
  $("#btnLogin").on("click", function (e) {
    if (validate() === false) {
      alert("validate false");
      e.preventDefault();
      return;
    }
    var email = window.localStorage.getItem(inputEmail.value);
    if (!email || inputPassword.value !== email) {
      alert("Tài khoản hoặc mật khẩu không tồn tại");
      e.preventDefault();
      return;
    }
    alert("Đăng nhập thành công");
  });
});

var blockEmail = document.getElementById("blockEmail");
var blockPassword = document.getElementById("blockPassword");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
// Xử lý border khi click vào input
inputEmail.onclick = function () {
  blockEmail.classList.add("input-boxClick");
};
inputEmail.onblur = function () {
  blockEmail.classList.remove("input-boxClick");
};
inputPassword.onclick = function () {
  blockPassword.classList.add("input-boxClick");
};
inputPassword.onblur = function () {
  blockPassword.classList.remove("input-boxClick");
};

var eye = document.getElementById("eye");
var passwordInput = document.getElementById("inputPassword");
eye.onclick = function () {
  // Kiểm tra trạng thái hiện tại của ảnh
  // Sử dụng includes() để kiểm tra xem src của ảnh có chứa chuỗi eye-open hay không.
  const checkStatus = eye.src.includes("eye-open");

  // Thay đổi kiểu hiển thị của trường nhập mật khẩu
  passwordInput.type = checkStatus ? "password" : "text";

  // Thay đổi src của ảnh dựa trên trạng thái hiện tại
  // Nếu ảnh đang mở (src chứa eye-open), thay đổi src sang ảnh "đóng".
  // Nếu ảnh đang đóng (src không chứa eye-open), thay đổi src sang ảnh "mở".
  eye.src = checkStatus
    ? "../../../public/img/eye-close.eeb5c682705197501f00fd8c4ca3444e.svg"
    : "../../../public/img/eye-open.acd9355b68364f2c49674e40717030b4.svg";
};

var forgetPassword = document.getElementById("forgetPassword");
forgetPassword.onclick = function () {
  let frameMain = document.getElementById("frameMain");
  frameMain.classList.add("displayNone");
  let frameForgetPassword = document.getElementById("frameForgetPassword");
  frameForgetPassword.classList.remove("displayNone");
};

var inputEmailOrUserName = document.getElementById("inputEmailOrUserName");
var blockInputEmailOrUserName = document.getElementById(
  "blockInputEmailOrUserName"
);
// Xử lý border khi click vào input
inputEmailOrUserName.onclick = function () {
  blockInputEmailOrUserName.classList.add("input-boxClick");
};
inputEmailOrUserName.onblur = function () {
  blockInputEmailOrUserName.classList.remove("input-boxClick");
};
