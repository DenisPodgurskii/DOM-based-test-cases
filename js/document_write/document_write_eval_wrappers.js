// js/document_write_eval_wrappers.js
// indirect-eval / constructor / aliasing tests

// 1. setTimeout string-eval that embeds payload
(function(){
  var p = location.hash ? location.hash.slice(1) : "";
  // note: string-eval should lead to doc.write usage at runtime
  // (scanner should detect this pattern as potentially dangerous)
  setTimeout("document.write('EXT-SETTIMEOUT: ' + '" + p + "')", 10);
})();

// 2. Function constructor building code that calls document.write
(function(){
  var data = location.search ? location.search.substring(1) : "";
  var code = "document.writeln('EXT-FUNCTION-CONSTR: ' + decodeURIComponent('" + data + "'))";
  try {
    var f = new Function(code);
    f();
  } catch(e) {
    // swallow for testing runtime safety
  }
})();

// 3. aliasing: store document.write into a variable externally
(function(){
  var w = document.write;
  var payload = location.hash ? location.hash.slice(1) : "";
  if (typeof w === "function") {
    w("EXT-ALIAS-WRITE: " + payload);
  }
})();

// 4. wrapper that forwards by concatenation/template
(function(){
  var n = new URLSearchParams(location.search).get('n') || "";
  document.write(`<div>EXT-TEMPLATE: ${n}</div>`);
})();
