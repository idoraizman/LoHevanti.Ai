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