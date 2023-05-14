import './style.css';
import Photo from './hotpot.png';

export default function pageLoad(){
    const body = document.querySelector('body');
    const container = document.createElement('div');

    const head = document.createElement('div');
    head.innerHTML = 'Taiwan Cafe';
    head.classList.add('head');
    container.appendChild(head);

    const photo = document.createElement('img');
    photo.setAttribute('src', Photo);
    photo.setAttribute('width', '100%');
    photo.setAttribute('height', '100%');
    container.appendChild(photo);

    body.appendChild(container);
};