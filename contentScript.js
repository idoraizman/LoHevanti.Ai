document.addEventListener('keydown', function(event) {
    console.log('A key was pressed');
    if (event.ctrlKey) {
        console.log('Ctrl key pressed');
    }
});

document.addEventListener('contextmenu', function(event) {
    if (event.ctrlKey && event.button === 2) {
        // Prevent the default context menu from opening
        event.preventDefault();

        // Log the right-click event with Ctrl key
        console.log('Ctrl + Right Mouse Click detected');

        // Your logic to open the popup
        chrome.runtime.sendMessage({ action: "open_popup" });

        // Log the popup opening request
        console.log('Popup opening request sent');
    }
});
