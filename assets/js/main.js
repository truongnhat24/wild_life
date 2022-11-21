// Open & close header menu 
let btnMenu = document.querySelector("header nav .btn-menu");
let currentMenu = document.querySelector("header nav .menu");

btnMenu.addEventListener("click", () =>{
    // if (currentMenu.style.display === "none") {
    //     currentMenu.style.display = "flex";
    // } else currentMenu.style.display = "none";
    currentMenu.classList.toggle("open");
})