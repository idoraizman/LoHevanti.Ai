console.log('Background Script Started Running');

let latestSelectedText = "";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // open popup
    if (request.action === "open_popup") {
        // Log the popup opening event
        console.log('Received request to open popup');

        // Open the popup window
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            left: request.coordinates.x,
            top: request.coordinates.y,
            width: 400,
            height: 300
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
