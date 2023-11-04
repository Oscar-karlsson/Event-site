document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");
    const menuItems = mobileNav.querySelectorAll("li"); // Get all the list items in the mobile navigation

    // Initially hide the mobile navigation
    mobileNav.style.display = "none";
    let isActive = false;

    hamburger.addEventListener("click", function () {
        if (mobileNav.style.display === "block") {
            mobileNav.style.display = "none";
            isActive = false;
        } else {
            mobileNav.style.display = "block";
            isActive = true;
        }

        if (isActive) {
            hamburger.classList.add("active");
            
            // Animate the menu items
            menuItems.forEach((item, index) => {
                item.style.animation = `fadeIn 0.3s ease-in forwards ${index * 0.1}s`;
            }
        )} else {
            hamburger.classList.remove("active");
            // Reset the animation properties when closing the menu
            menuItems.forEach((item) => {
                item.style.animation = "";
            });
        }
    });
});