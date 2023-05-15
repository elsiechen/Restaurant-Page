import './style.css';
import Logo from './img/logo.svg';
import Github from './img/github.png';
import { doc } from 'prettier';

const pageLoad = () => {
    const body = document.querySelector('body');
    const background = document.createElement('div');
    const container = document.createElement('div');
    const headContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const navContainer = document.createElement('div');
    const contentContainer = document.createElement('div');
    const footer = document.createElement('div');

    background.classList.add('backgroundImg');
    body.appendChild(background);

    // container 
    container.classList.add('container');

    // headContainer > 
    // ( logoContainer > logo + shopName )
    // + ( navContainer > home + menu + contact )
    headContainer.classList.add('headContainer');
    logoContainer.classList.add('logoContainer');
    navContainer.classList.add('navContainer');
    //  insert svg logo
    const logo = document.createElement('object');
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

    // content container
    contentContainer.classList.add('contentContainer');

    // footer > footerContent + ( link > github )
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.innerHTML = 'Copyrignt &#169; 2023 Yi-Chun Chen';
    footer.appendChild(footerContent);

    const link = document.createElement('a');
    link.setAttribute('href', 'https://github.com/elsiechen');

    const github = document.createElement('img');
    github.setAttribute('src', Github);
    github.classList.add('github');
    link.appendChild(github);
    footer.appendChild(link);

    headContainer.appendChild(navContainer);
    container.appendChild(headContainer);
    container.appendChild(contentContainer);
    container.appendChild(footer);

    body.appendChild(container);

    return { home, menu, contact, contentContainer };
};

export default pageLoad;