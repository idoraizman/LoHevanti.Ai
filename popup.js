// popup.js

// Request the latest selected text from the background script
chrome.runtime.sendMessage({ action: "get_selected_text" }, function(response) {
    // Display the selected text in the popup
    if (response && response.text) {
        document.getElementById('highlighted-text').innerText = response.text;
    }
});

// Close the popup window if a click is detected outside
document.addEventListener('click', function(event) {
    // This prevents clicks inside the popup from triggering the close action
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', () => {
    // Measure the context menu dimensions after it loads
    const contextMenu = document.getElementById('context-menu');
    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;

    // Send a message to the background script to update the popup window size
    chrome.runtime.sendMessage({
        action: 'resize_popup',
        width: menuWidth,
        height: menuHeight
    });
});