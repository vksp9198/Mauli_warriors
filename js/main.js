// Loader
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("showMenu");
});

// Close menu on link click
document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("showMenu");
    });
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Active Navbar Link Highlight
const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll(".navLinks a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navA.forEach((a) => {
        a.classList.remove("activeLink");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("activeLink");
        }
    });
});

// Scroll To Top Button
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

function startCounters() {
    counters.forEach((counter) => {
        let start = 0;
        let target = +counter.getAttribute("data-target");
        let speed = target / 80;

        let updateCounter = () => {
            start += speed;

            if (start < target) {
                counter.innerText = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

setTimeout(startCounters, 1500);