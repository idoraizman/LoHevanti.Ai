console.log('Content Script Started Running');

document.addEventListener('contextmenu', function(event) {
    if (event.ctrlKey && event.button === 2) {
        // Prevent the default context menu from opening
        event.preventDefault();

        // Log the right-click event with Ctrl key
        console.log('Ctrl + Right Mouse Click detected');

        // Send a message with the cursor's coordinates
        chrome.runtime.sendMessage({
            action: "open_popup",
            coordinates: {
                x: event.pageX,
                y: event.pageY
            }
        });

        // Log the popup opening request
        console.log('Popup opening request sent');
    }
});
