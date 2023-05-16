import pageLoad from './page-load.js';
import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

const PageLoad = pageLoad();
const homeBtn = PageLoad.home;
const menuBtn = PageLoad.menu;
const contactBtn = PageLoad.contact;

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

contactBtn.addEventListener('click', contactContent);
function contactContent() {
    contentContainer.removeChild(contentContainer.firstElementChild);
    contentContainer.appendChild(contactTab().contact);
}

