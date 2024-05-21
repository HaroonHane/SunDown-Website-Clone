const allelems = document.querySelectorAll('.elem')
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('main'),
//   smooth: true
// })

allelems.forEach(element => {
  element.addEventListener('mouseover', e => {
    const imgDiv = document.querySelector('.img-container')
    imgDiv.style.display = 'block'
    imgDiv.style.backgroundImage = `url(${element.getAttribute('data-image')})`
  })
  element.addEventListener('mouseleave', e => {
    const imgDiv = document.querySelector('.img-container')
    imgDiv.style.display = 'none'
  })
})

function swiperAnimation () {
  var swiper = new Swiper('.swiper', {
    // direction: 'horizontal',
    // loop: true
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100
  })
}
function menuAnimation () {
  var menu = document.querySelector('nav h3')
  var full = document.querySelector('#full-scr')
  var navimg = document.querySelector('nav img')
  var flag = 0
  menu.addEventListener('click', function () {
    if (flag == 0) {
      full.style.top = 0
      navimg.style.opacity = 0
      flag = 1
    } else {
      full.style.top = '-100%'
      navimg.style.opacity = 1
      flag = 0
    }
  })
}

function loaderAnimation () {
  var loader = document.querySelector('#loader')
  setTimeout(function () {
    loader.style.top = '-100%'
  }, 4200)
}

swiperAnimation()
menuAnimation()
loaderAnimation()
