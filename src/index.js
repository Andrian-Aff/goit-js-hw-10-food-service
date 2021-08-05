
import { cardsMarkup } from './js/cardMarkup';
import { checkThemeNow, changeTheme } from './js/changeTheme';

import './sass/main.scss';
import './js/cardMarkup';
import './js/changeTheme';


export const refs = {
    bodyContainer: document.querySelector('body'),
    checkbox: document.getElementById('theme-switch-toggle'),
    menuList: document.querySelector('.js-menu')
};

export const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

document.addEventListener('DOMContentLoaded', checkThemeNow);
refs.checkbox.addEventListener('click', changeTheme);

refs.menuList.insertAdjacentHTML("beforeend", cardsMarkup);
