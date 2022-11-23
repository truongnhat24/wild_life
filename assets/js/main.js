// Open & close header menu 
let btnMenu = document.querySelector("header nav .btn-menu");
let currentMenu = document.querySelector("header nav .menu");

btnMenu.addEventListener("click", () =>{
    currentMenu.classList.toggle("open");
})