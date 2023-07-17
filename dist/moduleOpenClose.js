function moduleOpenClose(){
  const modalBtn = document.querySelectorAll('[data-modalBtn]');
  const modalWindow = document.querySelector('[data-modal-window]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalDialog = document.querySelector('.modal__dialog');
  const showModalFromTime = setInterval(openModal, 50000);
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

export {moduleOpenClose}