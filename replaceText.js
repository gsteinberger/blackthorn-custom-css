document.addEventListener('DOMContentLoaded', function () {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            // Select all instances of the text "Main event ticket"
            const elements = document.querySelectorAll('div, span, p, h2');
            elements.forEach((el) => {
                if (el.innerText.trim() === 'Main event ticket') {
                    el.innerText = ''; // Replace with empty string or desired text
                }
            });
        });
    });

    // Observe changes in the body to catch dynamically loaded content
    observer.observe(document.body, { childList: true, subtree: true });
});
