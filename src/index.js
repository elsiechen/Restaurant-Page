import pageLoad from './page-load.js'
import homeTab from './home.js';
import menuTab from './menu.js';

const PageLoad = pageLoad();
const homeBtn = PageLoad.home;
const menuBtn = PageLoad.menu;
// const Contact = PageLoad.contact;
const contentContainer = PageLoad.contentContainer;

contentContainer.appendChild(homeTab().home);

homeBtn.addEventListener('click', homeContent);
function homeContent() {
    contentContainer.removeChild(contentContainer.firstElementChild);
    contentContainer.appendChild(homeTab().home);
}

menuBtn.addEventListener('click', menuContent);
function menuContent() {
    contentContainer.removeChild(contentContainer.firstElementChild);
    contentContainer.appendChild(menuTab().menu);
}



console.log('Restaurant Page');
console.log('Go ahead!');