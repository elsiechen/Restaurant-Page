import './style.css';

const content = document.querySelector('#content');

const head = document.createElement('div');
head.innerHTML = 'Taiwan Cafe';
head.classList.add('head');

content.appendChild(head);

console.log('Restaurant Page');
console.log('Go ahead!');