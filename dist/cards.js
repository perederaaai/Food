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

export {cards}