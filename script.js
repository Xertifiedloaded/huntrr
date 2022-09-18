const hamburger = document.querySelector(".hamburger")
const hide = document.querySelector(".hide")
function showNav(){
    hide.classList.replace("hide", "show")
}
hamburger.addEventListener("click",showNav)

const closeBtn = document.querySelector(".closebtn")
function closeMenu(){
    hide.classList.replace("show","hide")
}
closeBtn.addEventListener("click",closeMenu)