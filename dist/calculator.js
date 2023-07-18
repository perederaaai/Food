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


export {calculationCalories}