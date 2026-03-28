// Load Header and Footer dynamically
async function loadComponent(id, file) {
    const res = await fetch(file);
    const data = await res.text();
    document.getElementById(id).innerHTML = data;
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");


// Wait after loading header to apply menu logic
setTimeout(() => {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Active link highlight
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "#00d9ff";
        }
    });

}, 500);