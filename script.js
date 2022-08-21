const date = Date();
const dateYearAndHours = date.split(' ').slice(0, 5).join(' ');

const dateEl = document.createElement('span');
dateEl.textContent = dateYearAndHours;

const nav = document.querySelector('nav');
const navList = document.querySelector('nav ul');

nav.insertBefore(dateEl, navList);
