const themeButtons = document.querySelectorAll(".theme-button");

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

applySavedTheme();

themeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
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