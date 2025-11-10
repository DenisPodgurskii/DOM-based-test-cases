(function (global) {
  function asString(value) {
    if (typeof value === "string") return value;
    if (value === undefined || value === null) return "";
    return String(value);
  }

  function evalSink(payload, label) {
    var code = payload;
    if (typeof payload === "function") {
      try {
        code = payload();
      } catch (err) {
        console.error("[eval_sink] source function failed (" + (label || "payload") + ")", err);
        return;
      }
    }
    code = asString(code);
    if (!code) {
      console.warn("[eval_sink] empty payload for " + (label || "payload"));
      return;
    }
    try {
      console.log("[eval_sink] executing (" + (label || "payload") + "):", code);
      global.eval(code);
    } catch (err) {
      console.error("[eval_sink] error executing " + (label || "payload") + ":", err);
    }
  }

  function setText(id, value) {
    var el = global.document && global.document.getElementById(id);
    if (!el) return;
    el.textContent = value;
  }

  global.evalSink = evalSink;
  global.evalUtils = {
    setText: setText
  };
})(window);
