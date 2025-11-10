(function (global) {


  function renderInto(targetId, payload) {
    appendChildUtils.clear(targetId);
    appendChildUtils.appendChildSink(payload, targetId);
  }

  global.extAppendChildFromLocalStorage = function () {
    try {
      renderInto("external-appendchild-storage", global.localStorage.getItem("payload"));
    } catch (err) {
      console.error("[append_child_external_sources] localStorage error", err);
    }
  };

})(window);
