// string-based timers / Function constructor / aliasing — no auto-run

function runExtSetTimeoutStringEval() {
  var p = location.hash ? location.hash.slice(1) : "";
  // literal string so SAST sees the pattern
  setTimeout("document.write('EXT-SETTIMEOUT: ' + '" + p + "')", 30);
}

function runExtFunctionConstructor() {
  var data = location.search ? location.search.substring(1) : "";
  var code = "document.writeln('EXT-FUNCTION-CONSTR: ' + decodeURIComponent('" + data + "'))";
  try {
    var f = new Function(code);
    f();
  } catch(e) {}
}

function runExtAliasWrite() {
  var w = document.write;
  var payload = location.hash ? location.hash.slice(1) : "";
  if (typeof w === "function") {
    w("EXT-ALIAS-WRITE: " + payload);
  }
}

// export
Object.assign(window, {
  runExtSetTimeoutStringEval,
  runExtFunctionConstructor,
  runExtAliasWrite
});
