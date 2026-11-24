
// =============================================
// CAFÉ AROMA - JAVASCRIPT
// =============================================


// =============================================
// 1. WELCOME MESSAGE
// =============================================

console.log("Welcome to Café Aroma!");


// =============================================
// 2. SPECIAL OFFER ORDER BUTTONS
// =============================================

const orderButtons = document.querySelectorAll(".offer-content a");

orderButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Thank you for choosing Café Aroma! We look forward to serving you.");

    });

});


// =============================================
// 3. SMOOTH SCROLLING
// =============================================

const navigationLinks = document.querySelectorAll(
    'header nav a, .hero-buttons a, .about-content a, .menu-cta a'
);

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// =============================================
// 4. AUTOMATIC FOOTER YEAR
// =============================================

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector("#year");

if (footerYear) {

    footerYear.textContent = currentYear;

}


// =============================================
// 5. BACK TO TOP BUTTON
// =============================================

// Create the button

const backToTopButton = document.createElement("button");

backToTopButton.textContent = "↑";

backToTopButton.setAttribute("aria-label", "Back to top");

backToTopButton.id = "back-to-top";


// Add the button to the website

document.body.appendChild(backToTopButton);


// Button styling using JavaScript

backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "25px";
backToTopButton.style.right = "25px";
backToTopButton.style.width = "50px";
backToTopButton.style.height = "50px";
backToTopButton.style.backgroundColor = "#9b6236";
backToTopButton.style.color = "#ffffff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.fontSize = "25px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.zIndex = "1000";


// =============================================
// 6. SHOW BUTTON WHEN SCROLLING
// =============================================

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTopButton.style.display = "block";

    } else {

        backToTopButton.style.display = "none";

    }

});


// =============================================
// 7. BACK TO TOP ACTION
// =============================================

backToTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =============================================
// 8. BUTTON HOVER EFFECT
// =============================================

backToTopButton.addEventListener("mouseenter", function() {

    backToTopButton.style.backgroundColor = "#704326";

});

backToTopButton.addEventListener("mouseleave", function() {

    backToTopButton.style.backgroundColor = "#9b6236";

});


// =============================================
// 9. CONTACT EMAIL MESSAGE
// =============================================

const emailLinks = document.querySelectorAll(
    '.contact-cta a, .contact-item a[href^="mailto:"]'
);

emailLinks.forEach(function(link) {

    link.addEventListener("mouseenter", function() {

        link.style.transition = "color 0.3s ease";

    });

});


// =============================================
// 10. CAFÉ AROMA READY MESSAGE
// =============================================

console.log("Café Aroma website is ready!");
