function cards (){
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabItem = document.querySelectorAll('.tabheader__item');
  function slideTabs() {
    tabItem.forEach((item, i) => {
      item.addEventListener('click', () => {
        hideHeaderActiveClass();
        item.classList.add('tabheader__item_active')
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
      item.classList.remove('tabheader__item_active')
    })
  }
}

export {cards}