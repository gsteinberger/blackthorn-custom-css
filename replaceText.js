document.addEventListener("DOMContentLoaded", function () {
    // Find all elements containing 'Main event ticket' and update the text
    document.querySelectorAll("div").forEach(function (el) {
        if (el.textContent.trim() === "Main event ticket") {
            // Check the preceding sibling to determine if it's a registration or donation
            let previousSibling = el.previousElementSibling;
            if (previousSibling && previousSibling.textContent.trim().toLowerCase().includes("registration")) {
                el.textContent = "Registered"; // Change for registration items
            } else if (previousSibling && previousSibling.textContent.trim().toLowerCase().includes("support")) {
                el.textContent = "Donation"; // Change for donation items
            }
        }
    });
});