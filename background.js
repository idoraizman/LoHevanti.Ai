console.log('Background Script Started Running');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "open_popup") {
        // Log the popup opening event
        console.log('Received request to open popup');

        // Open the popup window
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 400,
            height: 300
        });

        // Log that the popup window was opened
        console.log('Popup window opened');
    }
});
