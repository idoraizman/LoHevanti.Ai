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

document.addEventListener('mouseup', function() {
    // Get the selected text
    let selectedText = window.getSelection().toString().trim();

    // log the event
    console.log('Mouse was released, with "' + selectedText + '" selected');

    // If there's any selected text, send it to the background script
    if (selectedText.length > 0) {
        chrome.runtime.sendMessage({ action: "selected_text", text: selectedText });
    }
});
