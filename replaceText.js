document.addEventListener('DOMContentLoaded', function () {
    function replaceText() {
        // Target elements that may contain the text "Main event ticket"
        const elements = document.querySelectorAll('div, span, p, h2, li');

        elements.forEach((el) => {
            if (el.innerText && el.innerText.trim() === 'Main event ticket') {
                el.innerText = ''; // Remove the text or replace with something else
            }
        });
    }

    // Initial call to replace text
    replaceText();

    // Set up a MutationObserver to catch dynamically added content
    const observer = new MutationObserver(() => {
        replaceText();
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
