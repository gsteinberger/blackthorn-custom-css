document.addEventListener("DOMContentLoaded", function () {
    // Find all elements containing 'Main event ticket' and replace it
    document.querySelectorAll("div").forEach(function (el) {
        if (el.textContent.trim() === "Main event ticket") {
            el.textContent = "General Admission"; // Change to your preferred text
        }
    });
});