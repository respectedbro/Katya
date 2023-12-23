
let point = document.querySelectorAll('.point'),
imagesSlider = document.querySelectorAll('.imageSlider'),
leftBtn = document.getElementById('leftBtn'),
rightBtn = document.getElementById('rightBtn');

point[0].classList.add('activeImage');
imagesSlider[0].classList.add('activeImage');

let counter = 0;
for(let i = 0; i < point.length; i++) {
  point[i].addEventListener('click',() => {
    for (let k = 0; k < imagesSlider.length; k++) {
      point[k].classList.remove('activeImage')
      imagesSlider[k].classList.remove('activeImage')
    }
    counter = i;
    imagesSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
  })
}

leftBtn.addEventListener('click',() => {
  for (let k = 0; k < imagesSlider.length; k++) {
    point[k].classList.remove('activeImage')
    imagesSlider[k].classList.remove('activeImage')
  }
  counter--;
  if (counter < 0) {
counter = imagesSlider.length - 1
  }
  imagesSlider[counter].classList.add('activeImage')
  point[counter].classList.add('activeImage')
})

rightBtn.addEventListener('click',() => {
  for (let k = 0; k < imagesSlider.length; k++) {
    point[k].classList.remove('activeImage')
    imagesSlider[k].classList.remove('activeImage')
  }
  counter++;
  if (counter >= imagesSlider.length) {
counter = 0
  }
  imagesSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
})

function slowSlider() {
  for (let k = 0; k < imagesSlider.length; k++) {
    point[k].classList.remove('activeImage')
    imagesSlider[k].classList.remove('activeImage')
  }
  counter++;
  if (counter >= imagesSlider.length) {
counter = 0
  }
  imagesSlider[counter].classList.add('activeImage');
  point[counter].classList.add('activeImage');
}

let second = 1000*5;
let TimerImage = setInterval(() => slowSlider(), second);

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

$('.burger').on('click', function (e) {
e.preventDefault()
$('.header__inner').toggleClass('header__inner--open')
})
