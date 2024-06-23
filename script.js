let songSideNav = document.querySelector('.song_side nav');

document.querySelector('#menu').onclick = () => {
  songSideNav.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  songSideNav.classList.remove('active');
}


$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.gallery .image').show(400);
        }
        else{
            $('.gallery .image').not('.' +filter).hide(200);
            $('.gallery .image').filter('.' +filter).show(200);
        }

    });

    $('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });

});
// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if user's preference is stored
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial mode
if (isDarkMode) {
  body.classList.add('dark-mode');
  themeToggle.classList.remove('bx-sun');
  themeToggle.classList.add('bx-moon');
}

// Toggle mode on click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  
  // Update icon
  if (isDark) {
    themeToggle.classList.remove('bx-sun');
    themeToggle.classList.add('bx-moon');
  } else {
    themeToggle.classList.remove('bx-moon');
    themeToggle.classList.add('bx-sun');
  }
  
  // Save user's preference
  localStorage.setItem('darkMode', isDark);
});

// Lấy phần tử modal
var modal = document.getElementById("loginModal");

// Lấy phần tử span (x) để đóng modal
var span = document.getElementsByClassName("close")[0];

// Lấy phần tử hình ảnh user
var userImg = document.getElementById("userImg");

// Khi người dùng nhấn vào hình ảnh user, mở modal
userImg.onclick = function() {
  modal.style.display = "block";
}

// Khi người dùng nhấn vào span (x), đóng modal
span.onclick = function() {
  modal.style.display = "none";
}

// Khi người dùng nhấn ra ngoài modal, đóng modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Xử lý sự kiện click vào liên kết "Đăng ký ngay"
var registerLink = document.querySelector(".register-link");
var loginRegister = document.querySelector(".login-register");
var register = document.querySelector(".register");

registerLink.addEventListener("click", function(e) {
  e.preventDefault();
  loginRegister.style.display = "none";
  register.style.display = "block";
});

// Xử lý sự kiện click vào liên kết "Đăng nhập"
var loginLink = document.querySelector(".login-link");

loginLink.addEventListener("click", function(e) {
  e.preventDefault();
  loginRegister.style.display = "block";
  register.style.display = "none";
});

// Xử lý sự kiện nhập liệu trong form đăng nhập
var loginForm = document.querySelector(".login-register form");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var username = loginForm.querySelector("input[type='text']").value;
  var password = loginForm.querySelector("input[type='password']").value;

  // Kiểm tra thông tin đăng nhập
  if (username.length > 4 && password.length > 4) {
    alert("Đăng nhập thành công!!!")
    modal.style.display = "none";
  } else {
    // Thông tin đăng nhập không chính xác, hiển thị cảnh báo
    alert("Tên đăng nhập hoặc mật khẩu phải nhiều hơn 4 kí tự!");
  }
});

// Xử lý sự kiện nhập liệu trong form đăng ký
var registerForm = document.querySelector(".register form");

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var username = registerForm.querySelector("input[type='text']").value;
  var email = registerForm.querySelector("input[type='email']").value;
  var password = registerForm.querySelector("input[type='password']").value;
  var confirmPassword = registerForm.querySelectorAll("input[type='password']")[1].value;

  
  // Kiểm tra xác nhận mật khẩu
  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp!");
    return;
  }

  // Kiểm tra thông tin đăng ký
  if (username && email && password && confirmPassword) {
    // Đăng ký thành công, mở giao diện đăng nhập
    loginRegister.style.display = "block";
    register.style.display = "none";
  } else {
    // Thông tin đăng ký không đầy đủ, hiển thị cảnh báo
    alert("Vui lòng điền đầy đủ thông tin đăng ký!");
  }
});