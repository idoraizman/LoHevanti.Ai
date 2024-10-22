// popup.js

// Request the latest selected text from the background script
chrome.runtime.sendMessage({ action: "get_selected_text" }, function(response) {
    // Display the selected text in the popup
    if (response && response.text) {
        document.getElementById('highlighted-text').innerText = response.text;
    }
});
