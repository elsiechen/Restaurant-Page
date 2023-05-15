import Bao from './menu/bao.png';
import Bubble from './menu/bubble.png';
import Chicken from './menu/chicken.png';
import Ice from './menu/ice.png';
import Lemon from './menu/lemon.png';
import Noodle from './menu/noodle.png';
import Oyster from './menu/oyster.png';
import Tofu from './menu/tofu.png';

const menuTab = () => {
    const menu = document.createElement('div');
    menu.classList.add('menuContainer');
    
    const items = [
        {
          name: "Beef Noodle Soup",
          price: 8.99,
          description: "Slow-cooked beef with noodles in a savory broth",
          img: Noodle
        },
        {
          name: "Pork Bun",
          price: 2.99,
          description: "Steamed bun filled with seasoned pork",
          img: Bao
        },
        {
          name: "Oyster Omelette",
          price: 6.99,
          description: "Pan-fried omelette with fresh oysters and vegetables",
          img: Oyster
        },
        {
          name: "Fried Chicken Fillet",
          price: 5.99,
          description: "Crispy fried chicken fillet served with dipping sauce",
          img: Chicken
        },
        {
          name: "Stinky Tofu",
          price: 4.99,
          description: "Fermented tofu with a pungent aroma and deep flavor",
          img: Tofu
        },
        {
          name: "Bubble Milk Tea",
          price: 3.99,
          description: "Sweetened milk tea with chewy tapioca pearls",
          img: Bubble
        },
        {
          name: "Mango Shaved Ice",
          price: 7.99,
          description: "Shaved ice topped with fresh mango and condensed milk",
          img: Ice
        },
        {
          name: "Aiyu Jelly with Lemon",
          price: 4.99,
          description: "Refreshing jelly made from lovegrass seeds with a tangy lemon flavor",
          img: Lemon
        },
    ];
    console.log(items);
    for(let i = 0; i < items.length; i++){
        console.log(items[i].name);
        console.log(items[i].price);
        console.log(items[i].img);
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');

        const img = document.createElement('img');
        img.setAttribute('src', items[i].img);
        img.classList.add('itemImg');
        itemContainer.appendChild(img);

        const name = document.createElement('div');
        name.innerHTML = items[i].name;
        name.classList.add('itemName');
        itemContainer.appendChild(name);

        const description = document.createElement('div');
        description.innerHTML = items[i].description;
        description.classList.add('itemDescription');
        itemContainer.appendChild(description);

        menu.appendChild(itemContainer);
    }
      
    return { menu };
};

export default menuTab;