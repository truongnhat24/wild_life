// Open & close header menu 
let btnMenu = document.querySelector("header nav .btn-menu");
let btnFooter = document.querySelector("footer .btn-footer");
let currentMenu = document.querySelector("header nav .menu");
let loginBtn = document.querySelector("header nav .btn-group");
let contentFooter = document.querySelector("footer .footer-content");

btnMenu.addEventListener("click", () =>{
    currentMenu.classList.toggle("open");
    if (document.querySelector("header").clientWidth < 768 ){
        loginBtn.classList.toggle("show");
    }
})

btnFooter.addEventListener("click", () => {
    contentFooter.classList.toggle("show");
})