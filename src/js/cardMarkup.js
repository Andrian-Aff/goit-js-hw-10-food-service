import menuTpl from '../templates/markupCards.hbs'
import cards from '../menu.json';

export const cardsMarkup = createCardsMarkup(cards);

 function createCardsMarkup(cards) {
    return menuTpl(cards);
}
