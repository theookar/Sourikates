window.addEventListener("scroll", function () {

    const header = document.querySelector(".site-header");

    if (window.scrollY > 40)
        header.classList.add("scrolled");
    else
        header.classList.remove("scrolled");

});

// Smooth Active Menu

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", updateMenu);
window.addEventListener("load", updateMenu);

function updateMenu() {

    let current = "home";
    sections.forEach(section => {
        const top = section.offsetTop - 140;
        if (window.scrollY >= top) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    switch (current) {

        case "home":

            document.querySelector('.nav-link[href="#home"]')?.classList.add("active");
            break;
        case "services":
            document.querySelector('.nav-link[href="#services"]')?.classList.add("active");
            break;
        case "team":
            document.querySelector('.dropdown-toggle')?.classList.add("active");
            break;
        case "contact":
            document.querySelector('.nav-link[href="#contact"]')?.classList.add("active");
            break;

    }

}

//======================================================
// Back To Top
//======================================================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    }
    else {
        backToTop.classList.remove("show");

    }
});