document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".dashboard-section");
    const links = document.querySelectorAll(".dashboard-sidebar a");

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            sections.forEach((section) => (section.style.display = "none"));
            targetSection.style.display = "block";
        });
    });

    // Initialize by displaying the "My Account" section by default
    document.querySelector("#my-account").style.display = "block";
});



