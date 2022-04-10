const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

function scrollHeader() {
  const header = document.getElementById('header')
  if(this.scrollY >= 50) header.classList.add('scroll-header'); 
  else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

var swiper = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidePerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      667: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
  });

  var mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

const LinkFeatured = document.querySelector('.featured__item')

function activeFeatured () {
  LinkFeatured.forEach(l=> i.classList.remove('active-featured'))
  this.classList.add('active-featured')
}

// LinkFeatured.forEach( i => l.addEventListener('click', activeFeatured))

const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.about__group, .offer__data`, {origin: 'left'})
sr.reveal(`.about__data`, {origin: 'right'})
sr.reveal(`.features__map`, {delay: 600, origin: 'bottom'})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured__card, .logos__content, .footer__content, .footer__copy`, {interval: 100})