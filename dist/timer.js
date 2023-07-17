function timer(){
  let deadline = '2023-07-26';

  function getTimeDifference(endtime) {
    const t = Date.parse(endtime) - (Date.parse(new Date()));
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

  getTimeDifference(deadline)

  function getTimerElement(selector) {

    let timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(setTime(), 1000);
      setTime()
    if (Date.parse(deadline) <= (Date.parse(new Date()))) {
      clearInterval(timeInterval)
    }

    function setTime() {
      const show = getTimeDifference(deadline)
      days.innerHTML = show.days;
      hours.innerHTML = show.hours;
      minutes.innerHTML = show.minutes;
      seconds.innerHTML = show.seconds;
    }
  }

  getTimerElement('.timer')
}

export {timer}