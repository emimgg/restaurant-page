import pollitoImage from './images/pexels-alleksana-6107772.jpg';
import atunImage from './images/tunaTHISONE.jpg';
import jamoncilloImage from './images/pexels-adonyi-foto-5491278.jpg';
import chuchiImage from './images/pexels-pixabay-271715.jpg';
import purinaImage from './images/catfood.jpeg';

const menu = [];

function newDish(name, description, dishImg, price) {
    const newDish = {
        dishName: name,
        dishDescription: description,
        img: dishImg,
        price: price
    }
    menu.push(newDish);
}

newDish("Pollito", "Pollito al horno con especias, ajo y mostaza.", pollitoImage, "$ 19.99");
newDish("Atun", "Fresco atún de lata, con agua y sal.", atunImage, "$ 15.99");
newDish("Jamoncito", "Rebanadas de finas carnes de cerdo amalgamadas.", jamoncilloImage, "$ 9.99");
newDish("Chuchi", "Nigiri de salmon.", chuchiImage, "$ 29.99");
newDish("Purina", "Snack completo a base de nutrientes, sabor a elegir.", purinaImage, "$ 10.99");

console.log(menu);

function showMenu() {
    const content = document.querySelector("#content");
    
    menu.forEach((dish) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const picture = document.createElement("img");
        picture.src = dish.img;
        picture.classList.add("dish-picture");

        const dishContainer = document.createElement("div");
        dishContainer.classList.add("menu-description");

        const dishTitle = document.createElement("h3");
        dishTitle.textContent = dish.dishName;
        dishTitle.classList.add("dish-name");

        const dishText = document.createElement("p");
        dishText.textContent = dish.dishDescription;
        dishText.classList.add("dish-description");

        const dishPrice = document.createElement("span");
        dishPrice.textContent = dish.price;
        dishPrice.classList.add("price");

        dishContainer.appendChild(dishTitle);
        dishContainer.appendChild(dishText);
        dishContainer.appendChild(dishPrice);

        menuItem.appendChild(picture);
        menuItem.appendChild(dishContainer);

        content.appendChild(menuItem);
    })
}

export {
    showMenu,
}