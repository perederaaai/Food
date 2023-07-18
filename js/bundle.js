/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/calculator.js":
/*!****************************!*\
  !*** ./dist/calculator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculationCalories: () => (/* binding */ calculationCalories)
/* harmony export */ });
function  calculationCalories (){
  const gender = document.querySelectorAll('.gender');
  let activeGender = '';
  let coeff = 1.375;
  const getChoise  =  function (arr, cssClass) {
    arr.forEach( item  =>{
      item.addEventListener('click', () =>{
        arr.forEach(element =>{
          element.classList.remove(cssClass)
        })
        item.classList.add(cssClass)
        activeGender = item
        localStorage.setItem('personGender', JSON.stringify(activeGender.innerText))
        showCalories(coeff)
      })
    })
  }
  getChoise(gender, 'calculating__choose-item_active');

  const getCharacteristic = function (){
    const userHeight = document.getElementById('height')
    const userWeigth = document.getElementById('weight')
    const userAge = document.getElementById('age')

    function setToLocalStorage(element){
      element.addEventListener('blur',()=>{
        showCalories(coeff)
        let key = element.id
        localStorage.setItem(key , JSON.stringify(element.value))
      })
    }
    setToLocalStorage(userHeight)
    setToLocalStorage(userWeigth)
    setToLocalStorage(userAge)
  }
  getCharacteristic()

   const setFiso  =  function () {
    const chooseFiso = document.querySelectorAll('.fiso')
     // console.log(chooseFiso)
     chooseFiso.forEach( item  =>{
       item.addEventListener('click', () =>{
         chooseFiso.forEach(element =>{
           element.classList.remove('calculating__choose-item_active')
         })
         item.classList.add('calculating__choose-item_active')
         // console.log(item.innerText, 'up')
         localStorage.setItem('personFiso', JSON.stringify(item.innerText))
         item.innerText === 'Низкая активность' ? coeff = 1.2 : (item.innerText === 'Невысокая активность' ? coeff = 1.375 : (item.innerText === 'Умеренная активность' ? coeff = 1.55 :coeff = 1.725 ))
         // console.log(chooseFiso)
         // console.log(item)

         showCalories(coeff)
       })
     })
   }
   setFiso()

   function showCalories(activity){
     const numOfCalories = document.getElementById('num-of-calories');
     let gender = JSON.parse(localStorage.getItem('personGender'));
     let height = JSON.parse(localStorage.getItem('height'));
     let weight = JSON.parse(localStorage.getItem('weight'));
     let age = JSON.parse(localStorage.getItem('age'));
     const sumCalories = ( (10 * +weight) + (6.25 * +height) + (5 * +age))
     numOfCalories.innerText = '';
     numOfCalories.innerText = (gender === 'Женщина' ? sumCalories - 161 : sumCalories + 5) * activity
   }
}

                                  //add always Upd, not only to last click!!!




/***/ }),

/***/ "./dist/cards.js":
/*!***********************!*\
  !*** ./dist/cards.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards)
/* harmony export */ });
function cards (imgWrap, tabHeader, activeClass){
  const tabsContent = document.querySelectorAll(imgWrap);
  const tabItem = document.querySelectorAll(tabHeader);
  function slideTabs() {
    tabItem.forEach((item, i) => {
      item.addEventListener('click', () => {
        hideHeaderActiveClass();
        item.classList.add(activeClass)
        hideTabs();
        showTabs(i);
      })
    });
    hideTabs();
    showTabs();
  }

  const showTabs = (i = 0) => tabsContent[i].style.display = 'block';

  function hideTabs() {
    tabsContent.forEach(item => {
      item.style.display = 'none'
    })
  }

  slideTabs();

  function hideHeaderActiveClass() {
    tabItem.forEach(item => {
      item.classList.remove(activeClass)
    })
  }
}



/***/ }),

/***/ "./dist/moduleOpenClose.js":
/*!*********************************!*\
  !*** ./dist/moduleOpenClose.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleOpenClose: () => (/* binding */ moduleOpenClose)
/* harmony export */ });
function moduleOpenClose(timeToShowModal){
  const modalBtn = document.querySelectorAll('[data-modalBtn]');
  const modalWindow = document.querySelector('[data-modal-window]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalDialog = document.querySelector('.modal__dialog');
  const showModalFromTime = setInterval(openModal, timeToShowModal);
  const body = document.body;

  let flag;
  flag = false

  function openModal() {
    modalWindow.style.display = 'block';
    body.style.overflow = 'hidden';
    clearInterval(showModalFromTime)
  }

  modalBtn.forEach(item => {
    item.addEventListener('click', () => {
      openModal()
      flag = true
    })
  })

  window.addEventListener('scroll', openModalFromScroll);

  function openModalFromScroll() {
    if (((window.scrollY + window.innerHeight + 6) >= document.body.scrollHeight) && (flag === false)) {
      openModal()
      removeEventListener('scroll', openModalFromScroll)
    }
  }

  function closeModal() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = ''
  }

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && (modalWindow.style.display === 'block')) {
      closeModal()
    }
  })

  body.addEventListener('click', (function (event) {
    if (event.target === modalWindow) {
      closeModal()
    }
  }))


  modalCloseBtn.addEventListener('click', () => {
    closeModal()
  })
}



/***/ }),

/***/ "./dist/moduleWindowData.js":
/*!**********************************!*\
  !*** ./dist/moduleWindowData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleWindowData: () => (/* binding */ moduleWindowData)
/* harmony export */ });
function moduleWindowData (mainForm, personeLocalSt){
  const form = document.querySelectorAll(mainForm)

  const  obj = {};

  function  setData(form, index) {
    form[index].addEventListener('submit',(e) => {
      e.preventDefault()
      const formData = new FormData(form[index])
      formData.forEach(function (value,key){
        obj[key] = value
        localStorage.setItem(personeLocalSt, JSON.stringify(obj))
        // console.log(formData)
      })
      console.log(obj)
      return obj
    })
  }

  setData(form, 0)
  setData(form, 1)
}



/***/ }),

/***/ "./dist/slider.js":
/*!************************!*\
  !*** ./dist/slider.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   offerSlider: () => (/* binding */ offerSlider)
/* harmony export */ });
function offerSlider(nextSlide, prevSlide, allSlides, thisSlide, totalSlidesDiv, wrap){
  const slidePrev = document.getElementsByClassName(prevSlide);
  const slideNext = document.getElementsByClassName(nextSlide);
  const slides = document.querySelectorAll(allSlides);
  const slidersBtn = [slidePrev, slideNext];
  let currentSlide = document.getElementById(thisSlide);
  const totalSlides = document.getElementById(totalSlidesDiv)
  let currentChangeSlide = +currentSlide.innerText;
  const sliderWrap = document.getElementsByClassName(wrap);
  const carouselWrap = document.createElement('div');
  const dots = []

  for (let i = 0; i <= (+document.getElementById(totalSlidesDiv).innerText) -1; i++){
    dots[i] = document.createElement('div')
    dots[i].classList.add('dot')
    carouselWrap.append(dots[i])
  }


  function showSlide(){
    slides.forEach(element =>{
      element.style.display = 'none'
      slides[+currentSlide.innerText -1].style.display = 'block'
    })
  }
  showSlide()

  function goSliders(btn){
    if (btn[0].classList.value === nextSlide){
      (currentChangeSlide <= 3) ? currentChangeSlide += 1 : currentChangeSlide = 1;
    } if (btn[0].classList.value === prevSlide){
      (currentChangeSlide >= 2) ? currentChangeSlide -= 1 : currentChangeSlide = (+totalSlides.innerText);
    }
    currentSlide.innerText = (+currentChangeSlide).toString().padStart(2,'0')


    showSlide()
  }
  dots[currentSlide.innerText -1].style.opacity = '1'

  function dotOpacity(){
    dots.forEach(dot =>{
      dot.style.opacity = '0.5'
    })
    dots[currentSlide.innerText -1].style.opacity = '1'
  }

  function dotBtnSlider(){
    dots.forEach(dot =>{
      dot.addEventListener('click', (e) =>{
        e.preventDefault();
        for (let i = 0; i < dots.length; i++){
          dots[i] === e.target ? currentChangeSlide = i +1 : currentChangeSlide
        }
        currentSlide.innerText = (+currentChangeSlide).toString().padStart(2,'0')
        dotOpacity()
        showSlide()
      })
    })
  }
  dotBtnSlider()

  function clickToSlide(activatePoint){
    activatePoint.forEach(btn =>{
      btn[0].addEventListener('click', (e) => {
        e.preventDefault()
        goSliders(btn)
        dotOpacity()
      })
    })
  }
  clickToSlide(slidersBtn)


  function showDotSlider(){
    sliderWrap[0].style.position = 'relative'
    carouselWrap.classList.add('carousel-indicators')
    sliderWrap[0].append(carouselWrap)
    return dots
  }
  showDotSlider()
};
// offerSlider()



/***/ }),

/***/ "./dist/tabs.js":
/*!**********************!*\
  !*** ./dist/tabs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
function tabs (addClassDiv, h3Class, descrClass, dividerClass, priseClass, costClass, totalClass, currency){
  class Rectangle {
    container = document.querySelectorAll('[data-item-container]');
    div = document.createElement('div');
    photo = document.createElement('img');
    h3 = document.createElement('h3');
    descr = document.createElement('div');
    divider = document.createElement('div');
    price = document.createElement('div');
    cost = document.createElement('div');
    total = document.createElement('div');
    span = document.createElement('span');
    // tab = document.querySelectorAll('.menu__item')


    constructor(img, title, descr, price) {
      this.photo.src = img;
      this.h3.innerText = title;
      this.descr.innerText = descr;
      this.cost.innerText = 'Цена:';
      this.span.innerText = (price * currency);
      // addClassDiv, h3Class, descrClass, dividerClass, priseClass, costClass, totalClass
      this.div.classList.add(addClassDiv);
      this.h3.classList.add(h3Class);
      this.descr.classList.add(descrClass);
      this.divider.classList.add(dividerClass);
      this.price.classList.add(priseClass);
      this.cost.classList.add(costClass);
      this.total.classList.add(totalClass);


      this.container[0].append(this.div);
      this.div.append(this.photo);
      this.div.append(this.h3);
      this.div.append(this.descr);
      this.div.append(this.divider);
      this.div.append(this.price);
      this.price.append(this.cost);
      this.total.append(this.span, 'грн/день');
      this.price.append(this.total);
    }
  }

  function madeTabs(){
    fetch('http://localhost:3000/menu',{
      method: 'GET',
      headers:{
        'Content-type': 'application/json'
      }
    }).then(data => data.json())
      .then(response => response.forEach(item => {
        new Rectangle(item.img, item.title, item.descr, item.price )
      }))
  }

  madeTabs()
}



/***/ }),

/***/ "./dist/timer.js":
/*!***********************!*\
  !*** ./dist/timer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
function timer(deadline){

  function getTimeDifference(deadline) {
    const t = Date.parse(deadline) - (Date.parse(new Date()));
    let days = Math.floor(t / 1000 / 60 / 60 / 24);
    if (days < 10) {
      days = days.toString().padStart(2, '0')
    }
    let hours = Math.floor((t / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
    let minutes = Math.floor((t / 1000 / 60) % 60).toString().padStart(2, '0');
    let seconds = Math.floor((t / 1000) % 60).toString().padStart(2, '0');
    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return {
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    }
  }


  function getTimerElement(selector) {

    let timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(setTime, 1000);
      setTime();

    if (Date.parse(deadline) <= (Date.parse(new Date()))) {
      clearInterval(timeInterval);
    }else{
      setInterval(setTime(), 1000);
    }
    function setTime() {
      const show = getTimeDifference(deadline);
      days.innerHTML = show.days;
      hours.innerHTML = show.hours;
      minutes.innerHTML = show.minutes;
      seconds.innerHTML = show.seconds;
    }
  }

  getTimerElement('.timer')

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/calculator */ "./dist/calculator.js");
/* harmony import */ var _dist_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/slider */ "./dist/slider.js");
/* harmony import */ var _dist_moduleWindowData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/moduleWindowData */ "./dist/moduleWindowData.js");
/* harmony import */ var _dist_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/tabs */ "./dist/tabs.js");
/* harmony import */ var _dist_moduleOpenClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/moduleOpenClose */ "./dist/moduleOpenClose.js");
/* harmony import */ var _dist_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/timer */ "./dist/timer.js");
/* harmony import */ var _dist_cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dist/cards */ "./dist/cards.js");








window.addEventListener('DOMContentLoaded', () => {

(0,_dist_calculator__WEBPACK_IMPORTED_MODULE_0__.calculationCalories)();
(0,_dist_slider__WEBPACK_IMPORTED_MODULE_1__.offerSlider)('offer__slider-next', 'offer__slider-prev', '.offer__slide', 'current', 'total', 'offer__slider-wrapper');
(0,_dist_moduleWindowData__WEBPACK_IMPORTED_MODULE_2__.moduleWindowData)('form', 'person1');
(0,_dist_tabs__WEBPACK_IMPORTED_MODULE_3__.tabs)('menu__item', 'menu__item-subtitle', 'menu__item-descr', 'menu__item-divider', 'menu__item-price', 'menu__item-cost', 'menu__item-total', 36);
(0,_dist_moduleOpenClose__WEBPACK_IMPORTED_MODULE_4__.moduleOpenClose)(50000);
(0,_dist_timer__WEBPACK_IMPORTED_MODULE_5__.timer)('2023-07-26');
(0,_dist_cards__WEBPACK_IMPORTED_MODULE_6__.cards)('.tabcontent', '.tabheader__item', 'tabheader__item_active', );

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map