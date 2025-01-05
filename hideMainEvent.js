document.addEventListener("DOMContentLoaded", function () {
    // Function to hide elements containing "Main event ticket"
    function hideMainEventText() {
        const elements = document.querySelectorAll('*:not(script):not(style)');
        elements.forEach((el) => {
            if (el.textContent.includes('Main event ticket')) {
                el.style.display = 'none';
            }
        });
    }

    // Run the function initially
    hideMainEventText();

    // Observe changes to the DOM and re-run the function if needed
    const observer = new MutationObserver(hideMainEventText);
    observer.observe(document.body, { childList: true, subtree: true });
});
