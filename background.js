console.log('Background Script Started Running');
// saves the currently highlighted text
let latestSelectedText = "";
// saves the current popup window to make sure there exists at most 1 page at a time
let popupWindowId = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // open popup
    if (request.action === "open_popup" && request.coordinates) {
        // Log the popup opening event
        console.log('Received request to open popup');

        // Close any previously opened popup window
        if (popupWindowId !== null) {
            console.log('Remove old popup');
            chrome.windows.remove(popupWindowId);
        }

        // Open the popup window
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            left: request.coordinates.x,
            top: request.coordinates.y,
            width: 400,
            height: 300
        }, function(newWindow) {
            popupWindowId = newWindow.id;
        });

        // Log that the popup window was opened
        console.log('Popup window opened');
    }
    // select text
    if (request.action === "selected_text" && request.text) {
        console.log('updated latest selected text to hold "' + latestSelectedText + '"');
        // Store the latest selected text
        latestSelectedText = request.text;
    }
    // send selected text to popup
    if (request.action === "get_selected_text") {
        console.log('sends selected text to popup. selected text is: "' + latestSelectedText + '"');
        sendResponse({ text: latestSelectedText });
    }
});

// close popup window when clicked outside of it
chrome.windows.onFocusChanged.addListener(function(windowId) {
    if (popupWindowId && windowId !== popupWindowId && windowId !== chrome.windows.WINDOW_ID_NONE) {
        console.log('Close existing popup');
        chrome.windows.remove(popupWindowId);
        popupWindowId = null;
    }
});