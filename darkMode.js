const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");

// Check system preference for darkmode

if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    document.documentElement.classList.add("dark");
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("hidden");
}

// Toggle dark mode

document.querySelectorAll("header button").forEach((button) => {
    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        darkBtn.classList.toggle("hidden");
        lightBtn.classList.toggle("hidden");
    });
});