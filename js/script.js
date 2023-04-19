//////////////////////////////////////////////////////////////////////////////////////INTRO/////////////////////////////////////////////////////////////////////////////////////

let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        });
    },2000)

    setTimeout(() => {
        intro.style.top = '-100vh';
    },2300)

    })  
});

//////////////////////////////////////////////////////////////////////////////////////HTML TRANSITIONS/////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      let href = this.getAttribute('href');

      document.querySelector('body').classList.add('fade-out');
  
      setTimeout(function() {
       
        window.location.href = href;
      }, 500); 
  
    });
  });

  document.querySelectorAll('.plus').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      let href = this.getAttribute('href');

      document.querySelector('body').classList.add('fade-out');
  
      setTimeout(function() {
       
        window.location.href = href;
      }, 500); 
  
    });
  });

//////////////////////////////////////////////////////////////////////////////////////SCROLL/////////////////////////////////////////////////////////////////////////////////////

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);