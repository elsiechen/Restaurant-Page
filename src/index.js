import pageLoad from './page-load.js'
import homeTab from './home.js';

pageLoad();
const HomeTab = homeTab();
console.log(HomeTab.home);
document.body.appendChild(HomeTab.home);

console.log('Restaurant Page');
console.log('Go ahead!');