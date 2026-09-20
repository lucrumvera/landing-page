const themeButtons = document.querySelectorAll(".theme-button");

function updateThemeButtons(theme) {
    themeButtons.forEach((button, index) => {
        const isActive =
            (theme === "light" && index === 0) ||
            (theme === "dark" && index === 1);

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    });
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        updateThemeButtons("dark");
    } else {
        document.body.classList.remove("dark-theme");
        updateThemeButtons("light");
    }
}

applySavedTheme();

themeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
            updateThemeButtons("light");
        } else {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
            updateThemeButtons("dark");
        }
    });
});

window.addEventListener("pageshow", applySavedTheme);

window.addEventListener("storage", (event) => {
    if (event.key === "theme") {
        applySavedTheme();
    }
});

const moreButton = document.querySelector(".menu-more-button");
const hiddenCards = document.querySelectorAll(".menu-card:nth-child(n + 5)");

if (moreButton) {
    moreButton.addEventListener("click", () => {
        hiddenCards.forEach((card) => {
            card.style.display = "block";
        });

        moreButton.style.display = "none";
    });
}

const slides = document.querySelectorAll(".slides .slide");
const prevButton = document.querySelector(".slider-button-prev");
const nextButton = document.querySelector(".slider-button-next");
const sliderControls = document.querySelectorAll(".slider-control");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    sliderControls[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    sliderControls[currentSlide].classList.add("active");
}

prevButton?.addEventListener("click", () => {
    const previousSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide(previousSlide);
});

nextButton?.addEventListener("click", () => {
    const nextSlide =
        (currentSlide + 1) % slides.length;

    showSlide(nextSlide);
});

const burgerButton = document.querySelector(".burger-button");
const nav = document.querySelector(".nav");

burgerButton?.addEventListener("click", () => {
    burgerButton.classList.toggle("active");
    nav?.classList.toggle("active");
});