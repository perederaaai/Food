import { calculationCalories } from '../dist/calculator'
import { offerSlider } from '../dist/slider';
import { moduleWindowData } from '../dist/moduleWindowData';
import { tabs } from '../dist/tabs';
import { moduleOpenClose } from '../dist/moduleOpenClose';
import {timer} from '../dist/timer';
import {cards} from '../dist/cards';

window.addEventListener('DOMContentLoaded', () => {

calculationCalories();
offerSlider('offer__slider-next', 'offer__slider-prev', '.offer__slide', 'current', 'total', 'offer__slider-wrapper');
moduleWindowData('form', 'person1');
tabs('menu__item', 'menu__item-subtitle', 'menu__item-descr', 'menu__item-divider', 'menu__item-price', 'menu__item-cost', 'menu__item-total', 36);
moduleOpenClose(50000);
timer('2023-07-26');
cards('.tabcontent', '.tabheader__item', 'tabheader__item_active', );

})