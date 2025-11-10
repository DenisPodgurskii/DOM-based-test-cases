(function (global) {
  function decodeHash() {
    if (!global.location.hash) return "";
    var raw = global.location.hash.slice(1);
    try {
      return decodeURIComponent(raw);
    } catch (err) {
      return raw;
    }
  }

  function getCookieValue(name) {
    var cookie = (global.document.cookie || "").split(";").map(function (part) {
      return part.trim();
    }).find(function (part) {
      return part.indexOf(name + "=") === 0;
    });
    if (!cookie) return "";
    return cookie.substring(name.length + 1);
  }

  global.extEvalFromHash = function () {
    global.evalSink(decodeHash, "location.hash");
  };

  global.extEvalFromSearch = function () {
    var params = new URLSearchParams(global.location.search);
    evalSink(params.get("payload"), "URLSearchParams(payload)");
  };

  global.extEvalFromWindowName = function () {
    evalSink(global.window.name, "window.name");
  };

  global.extEvalFromReferrer = function () {
    evalSink(global.document.referrer, "document.referrer");
  };

  global.extEvalFromCookie = function () {
    var payload = getCookieValue("payload");
    try {
      payload = decodeURIComponent(payload);
    } catch (err) {
      // ignore decode issues
    }
    evalSink(payload, "document.cookie payload");
  };

  global.extEvalFromLocalStorage = function () {
    try {
      evalSink(global.localStorage.getItem("payload"), "localStorage.payload");
    } catch (err) {
      console.error("[eval_external_sources] localStorage error", err);
    }
  };

  global.extEvalFromSessionStorage = function () {
    try {
      evalSink(global.sessionStorage.getItem("payload"), "sessionStorage.payload");
    } catch (err) {
      console.error("[eval_external_sources] sessionStorage error", err);
    }
  };
})(window);
