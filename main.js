{
    const sunElement = document.querySelector(".js-blackSun");
    
    const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    sunElement.classList.toggle("whiteSun")
    body.classList.toggle("blackBody")
}

const init = () => {
    sunElement.addEventListener("click", toggleBackground)
}

init();
}