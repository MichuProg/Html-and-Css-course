const img = document.querySelector("img.menu-shortcut");
const header = document.querySelector("header");

img.addEventListener("click", () => {
    header.classList.toggle("open");
})

// let resolution = window.screen.width;
// if(resolution <= 1000) {
//     let mobile = document.querySelector("header");
//     mobile.classList.toggle("mobile");
// }