    const hamburger = document.getElementById("hamburger-menu");
    const navItems = document.getElementById("nav-items");

    hamburger.addEventListener("click", () => {
        if (navItems.style.display === "flex") {
            navItems.style.display = "none";
        } else {
            navItems.style.display = "flex";
        }
    });
