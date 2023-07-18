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

export {offerSlider}