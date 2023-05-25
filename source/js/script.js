// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });






// const pageBody = document.querySelector('.page__body');

// const sliderCompare = document.querySelector('.slider-compare');

// const sliderCompareBefore = sliderCompare.querySelector('.slider-compare__before');
// const sliderCompareBeforeImage = sliderCompareBefore.querySelector('.slider-compare__image');

// const sliderCompareAfter = sliderCompare.querySelector('.slider-compare__after');
// const sliderCompareAfterImage = sliderCompareAfter.querySelector('.slider-compare__image');

// const sliderCompareChange = sliderCompare.querySelector('.slider-compare__change');

// let isActive = false;

// document.addEventListener('DOMContentLoaded', () => {
//   let widthSliderCompareBeforeImage = sliderCompare.offsetWidth;
//   sliderCompareBeforeImage.style.width = `${widthSliderCompareBeforeImage}px`
// });

// document.addEventListener('DOMContentLoaded', () => {
//   let widthSliderCompareAfterImage = sliderCompare.offsetWidth;
//   sliderCompareAfterImage.style.width = `${widthSliderCompareAfterImage}px`
// });

// const beforeAfterSlider = (x) => {
//   let shiftSlider = Math.max(0, Math.min(x, sliderCompare.offsetWidth));
//   sliderCompareBefore.style.width = `${shiftSlider}px`
//   sliderCompareChange.style.left = `${shiftSlider}px`
// }

// const pauseSlider = (e) => {
//   e.stopPropagation();
//   e.preventDefault();
//   return false;
// }

// pageBody.addEventListener('mousedown', () => {
//   isActive = true;
// });

// pageBody.addEventListener('mouseup', () => {
//   isActive = false;
// });

// pageBody.addEventListener('mouseleave', () => {
//   isActive = false;
// });

// pageBody.addEventListener('mousemove', (e) => {
//   if (!isActive) {
//     return;
//   }

//   let x = e.pageX;

//   x -= sliderCompare.getBoundingClientRect().left;

//   beforeAfterSlider(x);
//   pauseSlider(e);
// });
