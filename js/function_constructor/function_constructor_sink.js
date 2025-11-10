(function (global) {

  function setText(id, value) {
    var el = global.document.getElementById(id);
    if (!el) return;
    el.textContent = value;
  }

  function functionConstructorSink(payload, logId) {
    try {
      var fn = new Function(payload);
      fn();
    } catch (err) {
      console.error("[functionConstructorSink] execution error", err);
    }
  }

  global.functionConstructorSink = functionConstructorSink;
  global.functionConstructorUtils = {
    setText: setText
  };
})(window);
