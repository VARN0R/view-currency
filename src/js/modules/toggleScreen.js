function toggleScreen() {
    const menuInputs = document.querySelectorAll(".menu__item input");
    const screens = document.querySelectorAll(".screen");
   
    menuInputs.forEach((item, i) => {
        item.addEventListener("click", () => {
            if (item.checked) {
                screens[i].classList.add("screen_active");
            } else {
                screens[i].classList.remove("screen_active");
            }
        })
    })
}

export default toggleScreen;