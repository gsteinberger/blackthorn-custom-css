document.addEventListener('DOMContentLoaded', function () {
    function replaceSpecificText() {
        // Select elements by their specific class responsible for displaying "Main event ticket"
        const elements = document.querySelectorAll('.ticket-type');

        elements.forEach((el) => {
            if (el.innerText.trim() === 'Main event ticket') {
                el.innerText = ''; // Remove the text or replace with another string
            }
        });
    }

    // Initial call to replace text
    replaceSpecificText();

    // Set up a MutationObserver to monitor dynamic changes
    const observer = new MutationObserver(() => {
        replaceSpecificText();
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
