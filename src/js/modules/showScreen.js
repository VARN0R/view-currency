function showScreen() {
    const menuInputs = document.querySelectorAll(".menu__item input");
    const screens = document.querySelectorAll(".screen");

    menuInputs.forEach((item,i) => {
        if (item.checked) {
            screens[i].classList.add("screen_active");
        }
    })
}

export default showScreen;