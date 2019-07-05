const navSlide = () => {
  const burger = document.querySelector('.navigation__burger');
  const nav = document.querySelector('.navigation__nav');
  const navLinks = document.querySelectorAll('.navigation__item');
  //  Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 +
          0.5}s`;
      }
    });
    //Burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
