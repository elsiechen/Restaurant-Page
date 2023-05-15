import Taiwan from './taiwan.png';

const homeTab = () => {
    const home = document.createElement('div');
    home.classList.add('homeContainer');
    
    const slogan1 = document.createElement('div');
    slogan1.innerHTML = 'Experience the vibrant flavors of Taiwan at our cafe.';
    slogan1.classList.add('slogan1');
    home.appendChild(slogan1);

    const taiwan = document.createElement('img');
    taiwan.setAttribute('src', Taiwan);
    taiwan.classList.add('taiwan');
    home.appendChild(taiwan);

    const slogan2 = document.createElement('div');
    slogan2.innerHTML = 'Join us for a taste of energy and excitement!';
    slogan2.classList.add('slogan2');
    home.appendChild(slogan2);

    return { home };
};

export default homeTab;