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

export {moduleWindowData}