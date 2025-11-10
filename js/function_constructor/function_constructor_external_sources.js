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

  global.extFunctionConstructorFromHash = function () {
    functionConstructorSink(decodeHash(), "external-function-log");
  };

  global.extFunctionConstructorFromSearch = function () {
    var params = new URLSearchParams(global.location.search);
    functionConstructorSink(params.get("payload"), "external-function-log");
  };

  global.extFunctionConstructorFromWindowName = function () {
    functionConstructorSink(global.window.name, "external-function-log");
  };

  global.extFunctionConstructorFromReferrer = function () {
    functionConstructorSink(global.document.referrer, "external-function-log");
  };

  global.extFunctionConstructorFromCookie = function () {
    var payload = getCookieValue("payload");
    try {
      payload = decodeURIComponent(payload);
    } catch (err) {
      // ignore
    }
    functionConstructorSink(payload, "external-function-storage-log");
  };

  global.extFunctionConstructorFromLocalStorage = function () {
    try {
      functionConstructorSink(global.localStorage.getItem("payload"), "external-function-storage-log");
    } catch (err) {
      console.error("[function_constructor_external_sources] localStorage error", err);
    }
  };

  global.extFunctionConstructorFromSessionStorage = function () {
    try {
      functionConstructorSink(global.sessionStorage.getItem("payload"), "external-function-storage-log");
    } catch (err) {
      console.error("[function_constructor_external_sources] sessionStorage error", err);
    }
  };
})(window);
