document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar__links");
    const body = document.body;

    // Object mapping each link to a specific background image
    const bgImages = {
        "https://sites.google.com/view/thiswebsiteworks": "url('Games.jpg')",
        "https://docs.google.com/document/d/1xy-Lph-YAwWXhZ-0OU0OXJYnQmiWmj_hbEZFvlprzbU/edit?tab=t.0": "url('images/Games.jpg')"
    };

    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            const href = link.getAttribute("href");
            if (bgImages[href]) {
                body.style.backgroundImage = bgImages[href];
                body.style.backgroundSize = "cover";
                body.style.backgroundPosition = "center";
                body.style.transition = "background-image 0.5s ease-in-out";
            }
        });

        link.addEventListener("mouseleave", function () {
            // Change back to black background
            body.style.backgroundImage = "none";
            body.style.backgroundColor = "black";
        });
    });
});
