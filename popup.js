// popup.js

// Request the latest selected text from the background script and set up listeners
chrome.runtime.sendMessage({ action: "get_selected_text" }, function(response) {
    // Display the selected text in the popup
    if (response && response.text) {
        document.getElementById('highlighted-text').innerText = response.text;

        // Event listeners for each action button
        document.querySelector('.translate').addEventListener('click', () => sendRequest('translate', response.text));
        document.querySelector('.rephrase').addEventListener('click', () => sendRequest('rephrase', response.text));
        document.querySelector('.detail').addEventListener('click', () => sendRequest('detail', response.text));
        document.querySelector('.lookup').addEventListener('click', () => sendRequest('lookup', response.text));
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

// Function to send request to Flask server
async function sendRequest(endpoint, text) {
    const response = await fetch(`http://127.0.0.1:5000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    alert(data.result);  // Display result, update as needed
}
