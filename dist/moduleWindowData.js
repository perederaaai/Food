function moduleWindowData (){
  const form = document.querySelectorAll('form')

  const  obj = {};

  function  setData(form, index) {
    form[index].addEventListener('submit',(e) => {
      e.preventDefault()
      const formData = new FormData(form[index])
      formData.forEach(function (value,key){
        obj[key] = value
        console.log(obj)
        localStorage.setItem('person1', JSON.stringify(obj))
        // console.log(formData)
      })
      return obj
    })
  }

  setData(form, 0)
  setData(form, 1)
}

export {moduleWindowData}