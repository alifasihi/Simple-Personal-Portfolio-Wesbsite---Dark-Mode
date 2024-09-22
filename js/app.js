const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const projectImages = document.querySelectorAll('.project-image img');
const images = document.querySelectorAll('.project-image img');


// document.addEventListener('DOMContentLoaded', () => {
//   alert('Welcome to my website!');
// });



hamburgerIcon.addEventListener("click", function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// دکمه بالا
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function() {
  document.body.scrollTop = 0; // برای Safari
  document.documentElement.scrollTop = 0; // برای Chrome، Firefox، IE و Opera
};


window.addEventListener("load", function () {
  // وقتی صفحه به طور کامل لود شد، کلاس 'loaded' به تگ body اضافه می‌شود
  document.body.classList.add("loaded");
  
});

// اسکرول نرم بین بخش‌های صفحه
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// برجسته‌سازی لینک‌های ناوبری بر اساس اسکرول
const sections = document.querySelectorAll('section, header, footer');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});


projectImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.5s';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});


images.forEach(image => {
  image.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `<img src="${image.src}" alt="" />`;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});
