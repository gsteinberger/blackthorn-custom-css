document.addEventListener('DOMContentLoaded', function () {
    function hideMainEventTickets() {
        // Select all elements containing "Main event ticket"
        const elements = document.querySelectorAll(
            '.ticket-type, .ticket-title, .main-title, .ticket-summary, .order-summary-card .event-name'
        );

        // Loop through and hide them
        elements.forEach((el) => {
            if (el.textContent.includes('Main event ticket')) {
                el.style.display = 'none';
            }
        });
    }

    // Initial hide attempt
    hideMainEventTickets();

    // Observe DOM changes to handle dynamically added content
    const observer = new MutationObserver(hideMainEventTickets);
    observer.observe(document.body, { childList: true, subtree: true });
});
