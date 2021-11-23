const img = document.querySelector("img.logo-rainbow");
const header = document.querySelector("header");

img.addEventListener("click", () => {
    header.classList.toggle("mobile");
})

// let resolution = window.screen.width;
// if(resolution <= 1000) {
//     let mobile = document.querySelector("header");
//     mobile.classList.toggle("mobile");
// }