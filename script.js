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