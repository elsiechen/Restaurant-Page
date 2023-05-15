import './style.css';
import Logo from './logo.svg';
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
    
    console.log(Logo);
    var logo = document.createElement('object');
    logo.setAttribute('type', 'image/svg+xml');
    logo.setAttribute('data', Logo);
    logo.setAttribute('width', '120rem');
    logo.setAttribute('height', '120rem');
    logo.classList.add('logo');
    logoContainer.appendChild(logo);

    const shopName = document.createElement('div');
    shopName.innerHTML = 'Taiwan Cafe';
    shopName.classList.add('shopName');
    logoContainer.appendChild(shopName);

    headContainer.appendChild(logoContainer);

    container.appendChild(headContainer);

    body.appendChild(container);
};