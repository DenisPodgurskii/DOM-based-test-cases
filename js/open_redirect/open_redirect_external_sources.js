(function (global) {
  function decodeHash() {
    var hash = global.location.hash;
    if (!hash) return "";
    var raw = hash.slice(1);
    try {
      return decodeURIComponent(raw);
    } catch (err) {
      return raw;
    }
  }

  function getCookieValue(name) {
    var parts = (global.document.cookie || "").split(";");
    for (var i = 0; i < parts.length; i++) {
      var chunk = parts[i].trim();
      if (chunk.indexOf(name + "=") === 0) {
        return chunk.substring(name.length + 1);
      }
    }
    return "";
  }

  global.extOpenRedirectFromHash = function () {
    openRedirectSink(decodeHash(), "external-open-log");
  };

  global.extOpenRedirectFromSearch = function () {
    var params = new URLSearchParams(global.location.search);
    openRedirectSink(params.get("payload"), "external-open-log");
  };

  global.extOpenRedirectFromWindowName = function () {
    openRedirectSink(global.window.name, "external-open-log");
  };

  global.extOpenRedirectFromReferrer = function () {
    openRedirectSink(global.document.referrer, "external-open-log");
  };

  global.extOpenRedirectFromCookie = function () {
    var payload = getCookieValue("payload");
    try {
      payload = decodeURIComponent(payload);
    } catch (err) {
      // ignore decode failures
    }
    openRedirectSink(payload, "external-open-storage-log");
  };

  global.extOpenRedirectFromLocalStorage = function () {
    try {
      openRedirectSink(global.localStorage.getItem("payload"), "external-open-storage-log");
    } catch (err) {
      console.error("[open_redirect_external_sources] localStorage error", err);
    }
  };

  global.extOpenRedirectFromSessionStorage = function () {
    try {
      openRedirectSink(global.sessionStorage.getItem("payload"), "external-open-storage-log");
    } catch (err) {
      console.error("[open_redirect_external_sources] sessionStorage error", err);
    }
  };
})(window);
