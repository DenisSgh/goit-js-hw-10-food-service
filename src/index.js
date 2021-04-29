import menuCards from './templates/menuCards.hbs';
import menu from './menu.json';
import './styles.css';

const refs = {
  bodyRef: document.querySelector('body'),
  switchRef: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

onCheckedTheme();

menuCards(menu);

refs.switchRef.addEventListener('change', onSwitchPositionChanged);

function onSwitchPositionChanged() {
  refs.bodyRef.classList.contains(Theme.LIGHT)
    ? refs.bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
    : refs.bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);

  localStorage.setItem('bodyColorTheme', refs.bodyRef.classList.value);
}

function onCheckedTheme() {
  const bodyColorTheme = localStorage.getItem('bodyColorTheme');

  if (refs.bodyRef.classList.value === '') {
    refs.bodyRef.classList.add(Theme.LIGHT);
  }

  if (bodyColorTheme) {
    refs.bodyRef.classList.value = bodyColorTheme;
  }

  if (refs.bodyRef.classList.value === Theme.DARK) {
    refs.bodyRef.classList.value = bodyColorTheme;
    refs.switchRef.checked = true;
  }
}
