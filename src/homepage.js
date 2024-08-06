import { showMenu } from "./menu";
import { colorNavBtn, menuBtn } from "./colorNav";

function homepage() {
    const content = document.querySelector("#content");

    const titleContainer = document.createElement("div");
    const titleSmall = document.createElement("span");
    const title = document.createElement("span");
    const heroSmall = document.createElement("div");
    const heroText = document.createElement("p");
    const heroBtn = document.createElement("button");

    //hero title
    titleSmall.classList.add("title-small");
    titleSmall.textContent = "La Cocina de";
    title.classList.add("title");
    title.textContent = "Almendra";
    titleContainer.appendChild(titleSmall);
    titleContainer.appendChild(title);
    titleContainer.classList.add("title-container");
    content.appendChild(titleContainer);

    //hero text
    heroText.classList.add("hero-text");
    heroText.textContent = "Un lugar para comer rico y pasarla bien, con numerosos platos para degustar y ser felices.";
    heroBtn.classList.add("hero-btn");
    heroBtn.textContent = "Ver menu";
    heroSmall.appendChild(heroText);
    heroSmall.appendChild(heroBtn);
    heroSmall.classList.add("hero-small");
    content.appendChild(heroSmall);

    heroBtn.addEventListener("click", () => {
        colorNavBtn(menuBtn);
        clearDOM();
        showMenu();
    })

};

function clearDOM() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

export {
    homepage,
    clearDOM,
}
