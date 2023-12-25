const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

$('.burger').on('click', function (e) {
e.preventDefault()
$('.header__inner').toggleClass('header__inner--open')
})