import './style.css';
import Photo from './hotpot.png';

export default function pageLoad(){
    const content = document.querySelector('#content');

    const head = document.createElement('div');
    head.innerHTML = 'Taiwan Cafe';
    head.classList.add('head');
    content.appendChild(head);

    const photo = document.createElement('img');
    photo.setAttribute('src', Photo);
    photo.setAttribute('width', '100%');
    photo.setAttribute('height', '100%');
    content.appendChild(photo);
};