import throttle from 'lodash.throttle';
import cards from '../menu.json';
import markupCards from '../templates/markapCards.hbs';

const cardsMarkup = markupCards(cards);
console.log(cardsMarkup);

const cardsContainer = document.querySelector('.js-menu');
cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);
