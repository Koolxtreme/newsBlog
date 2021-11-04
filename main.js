const menu__btn = document.getElementById("menuBtn");
const menu__list = document.getElementById("menuList");
const body = document.querySelector("body")

body.addEventListener("click", ()=>{
    if (menu__list.classList.contains("show"))
    {
        menu__list.classList.toggle("show")
    }
})

menu__btn.addEventListener("click", (e) => {
    menu__list.classList.toggle("show");
    e.stopPropagation();
})

