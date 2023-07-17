function tabs (){
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
      this.span.innerText = (price * 36);

      this.div.classList.add('menu__item');
      this.h3.classList.add('menu__item-subtitle');
      this.descr.classList.add('menu__item-descr');
      this.divider.classList.add('menu__item-divider');
      this.price.classList.add('menu__item-price');
      this.cost.classList.add('menu__item-cost');
      this.total.classList.add('menu__item-total');


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

export {tabs}