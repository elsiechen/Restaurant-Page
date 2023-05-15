import './style.css';
import Logo from './logo.svg';
import { doc } from 'prettier';

export default function pageLoad(){
    const body = document.querySelector('body');
    const background = document.createElement('div');
    const container = document.createElement('div');
    const headContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const navContainer = document.createElement('div');

    background.classList.add('backgroundImg');
    body.appendChild(background);
    // headContainer > 
    // ( logoContainer > logo + shopName )
    // + ( navContainer > home + menu + contact )
    headContainer.classList.add('headContainer');
    logoContainer.classList.add('logoContainer');
    navContainer.classList.add('navContainer');
    //  insert svg logo
    var logo = document.createElement('object');
    logo.setAttribute('type', 'image/svg+xml');
    logo.setAttribute('data', Logo);
    logo.setAttribute('width', '80rem');
    logo.setAttribute('height', '80rem');
    logo.classList.add('logo');
    logoContainer.appendChild(logo);
    // shopName
    const shopName = document.createElement('div');
    shopName.innerHTML = 'Taiwan Cafe';
    shopName.classList.add('shopName');
    logoContainer.appendChild(shopName);

    headContainer.appendChild(logoContainer);
    // home
    const home = document.createElement('div');
    home.innerHTML = 'Home';
    home.classList.add('navLink');
    navContainer.appendChild(home);
    // menu
    const menu = document.createElement('div');
    menu.innerHTML = 'Menu';
    menu.classList.add('navLink');
    navContainer.appendChild(menu);
    // contact
    const contact = document.createElement('div');
    contact.innerHTML = 'Contact';
    contact.classList.add('navLink');
    navContainer.appendChild(contact);

    headContainer.appendChild(navContainer);
    container.appendChild(headContainer);
    body.appendChild(container);
};