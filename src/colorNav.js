const menuBtn = document.querySelector("#menu");
const homeBtn = document.querySelector("#home");
const aboutBtn = document.querySelector("#about");


function colorNavBtn(activeButton) {
    menuBtn.style.color = "white";
    homeBtn.style.color = "white";
    aboutBtn.style.color = "white";

    activeButton.style.color = "orange";
}

export {
    menuBtn,
    homeBtn,
    aboutBtn,
    colorNavBtn,
}

