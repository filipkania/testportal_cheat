export default () => {
    chrome.webRequest.onBeforeRequest.addListener(
        (script) => {
            if (script.url.toLowerCase().match(/jquery(-|.)\d.\d{2}.\d(.min)?.js/g)) {
                return {
                    redirectUrl: "https://code.jquery.com/jquery-1.11.0.min.js"
                };
            }
        },
        { urls: ["*://*.testportal.pl/*"] },
        ["blocking"]
    );
}