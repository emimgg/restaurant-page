import './style.css';
import { homepage, clearDOM } from "./homepage.js";
import { showMenu } from "./menu.js";
import { showAbout } from './about.js';
import { menuBtn, homeBtn, aboutBtn, colorNavBtn } from './colorNav.js';

(function() {

    homepage();

    menuBtn.addEventListener("click", () => {
        colorNavBtn(menuBtn);
        clearDOM();
        showMenu();
    });
    
    homeBtn.addEventListener("click", () => {
        colorNavBtn(homeBtn);
        clearDOM();
        homepage();
    });
    
    aboutBtn.addEventListener("click", () => {
        colorNavBtn(aboutBtn);
        clearDOM();
        showAbout();
    });

})();