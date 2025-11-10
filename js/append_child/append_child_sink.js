(function (global) {
  function ensureTarget(targetId) {
    var id = targetId || "append-child-output";
    var el = global.document.getElementById(id);
    if (!el) {
      var el1 = global.document.createElement("div");
      el1.id = id;
      el1.className = "render-target";
      global.document.body.appendChild(el1);
      return el1;
    }
    return el;
  }

  function appendChildSink(payload, targetId) {
    var target = ensureTarget(targetId);
    const fragment = document.createRange().createContextualFragment(payload);
    target.appendChild(fragment);
  }

  function clear(targetId) {
    ensureTarget(targetId).innerHTML = "";
  }

  function setTextContent(targetId, value) {
    ensureTarget(targetId).textContent = value == null ? "" : String(value);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }


  global.appendChildUtils = {
    appendChildSink: appendChildSink,
    ensureTarget: ensureTarget,
    clear: clear,
    setTextContent: setTextContent,
    escapeHtml: escapeHtml
  };
})(window);
