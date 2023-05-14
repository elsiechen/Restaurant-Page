import './style.css';
import Logo from './logo.png';
import { doc } from 'prettier';

export default function pageLoad(){
    const body = document.querySelector('body');
    const background = document.createElement('div');
    const container = document.createElement('div');
    const headContainer = document.createElement('div');
    const logoContainer = document.createElement('div');

    background.classList.add('backgroundImg');
    body.appendChild(background);

    headContainer.classList.add('headContainer');
    

    const logo = document.createElement('img');
    logo.setAttribute('src', Logo);
    logo.setAttribute('width', '20%');
    logo.setAttribute('height', '50%');
    logoContainer.appendChild(logo);

    const shopName = document.createElement('div');
    shopName.innerHTML = 'Taiwan Cafe';
    shopName.classList.add('shopName');
    logoContainer.appendChild(shopName);

    headContainer.appendChild(logoContainer);

    container.appendChild(headContainer);

    body.appendChild(container);
};