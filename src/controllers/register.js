// thêm viền cho block
var blockLastName = document.getElementById("lastName");
var inputLastName = document.getElementById("inputLastName");
inputLastName.onclick = function () {
  blockLastName.classList.add("input-boxClick");
};
inputLastName.onblur = function () {
  blockLastName.classList.remove("input-boxClick");
};

var blockName = document.getElementById("name");
var inputName = document.getElementById("inputName");
inputName.onclick = function () {
  blockName.classList.add("input-boxClick");
};
inputName.onblur = function () {
  blockName.classList.remove("input-boxClick");
};

var blockEmail = document.getElementById("blockEmail");
var inputEmail = document.getElementById("inputEmail");
inputEmail.onclick = function () {
  blockEmail.classList.add("input-boxClick");
};
inputEmail.onblur = function () {
  blockEmail.classList.remove("input-boxClick");
};

var blockPassword = document.getElementById("blockPassword");
var inputPassword = document.getElementById("inputPassword");
inputPassword.onclick = function () {
  blockPassword.classList.add("input-boxClick");
};
inputPassword.onblur = function () {
  blockPassword.classList.remove("input-boxClick");
};

var blockConfirmPassword = document.getElementById("blockConfirmPassword");
var inputConfirmPassword = document.getElementById("inputConfirmPassword");
inputConfirmPassword.onclick = function () {
  blockConfirmPassword.classList.add("input-boxClick");
};
inputConfirmPassword.onblur = function () {
  blockConfirmPassword.classList.remove("input-boxClick");
};

// xử lý mắt ẩn hiện
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

var eyeTwo = document.getElementById("eyeTwo");
var inputConfirmPassword = document.getElementById("inputConfirmPassword");
eyeTwo.onclick = function () {
  // Kiểm tra trạng thái hiện tại của ảnh
  // Sử dụng includes() để kiểm tra xem src của ảnh có chứa chuỗi eye-open hay không.
  const checkStatus = eyeTwo.src.includes("eye-open");

  // Thay đổi kiểu hiển thị của trường nhập mật khẩu
  inputConfirmPassword.type = checkStatus ? "password" : "text";

  // Thay đổi src của ảnh dựa trên trạng thái hiện tại
  // Nếu ảnh đang mở (src chứa eye-open), thay đổi src sang ảnh "đóng".
  // Nếu ảnh đang đóng (src không chứa eye-open), thay đổi src sang ảnh "mở".
  eyeTwo.src = checkStatus
    ? "../../../public/img/eye-close.eeb5c682705197501f00fd8c4ca3444e.svg"
    : "../../../public/img/eye-open.acd9355b68364f2c49674e40717030b4.svg";
};

// handle validate data
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  let result = $("#textError");
  const lastName = $("#inputLastName").val().trim();
  const firstName = $("#inputName").val().trim();
  const email = $("#inputEmail").val().trim();
  const password = $("#inputPassword").val().trim();
  const passwordConfirmation = $("#inputConfirmPassword").val().trim();

  // check empty
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    passwordConfirmation === ""
  ) {
    $(".errorBlock").removeClass("d-None");
    result.text("Please enter enough information. ");
    return false;
  } else {
    $(".errorBlock").addClass("d-None");
    result.text("");
  }

  // check email
  if (validateEmail(email)) {
    // valid email
    $(".errorBlock").addClass("d-None");
    result.text("");
  } else {
    // invalid email
    $(".errorBlock").removeClass("d-None");
    result.text(result.text() + "Invalid email. ");
    return false;
  }

  // check confirm password
  if (password !== passwordConfirmation) {
    $(".errorBlock").removeClass("d-None");
    result.text(result.text() + "Passwords do not match. ");
    return false;
  } else {
    $(".errorBlock").addClass("d-None");
    result.text("");
  }

  return true;
};

// handle click button register
var btnRegister = document.querySelector(".btnRegister");
btnRegister.onclick = function () {
  if (validate() === false) {
    // alert("validate false");
    return;
  }
  var email = window.localStorage.getItem(inputEmail.value);
  if (email !== null) {
    alert("Email đã đăng ký");
    return;
  }
  window.localStorage.setItem(inputEmail.value, inputPassword.value);
  alert("Đăng ký thành công");
};
