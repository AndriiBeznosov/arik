const toTopBtn = document.getElementById("top");
const btnMenuOpen = document.querySelector(".menu__btn");
const mobileMenu = document.querySelector(".mobile-nav__list");

btnMenuOpen.addEventListener("click", () => {
    btnMenuOpen.classList.toggle("btn--active");
    mobileMenu.classList.toggle("mobile--active");
});

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > viewportHeight * 0.8) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});

toTopBtn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
