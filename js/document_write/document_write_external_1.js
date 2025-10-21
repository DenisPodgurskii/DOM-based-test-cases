// direct/decoded/window.name/urlparams — no auto-run; expose as functions

function runExtDirectHash() {
  document.write("EXT-DIRECT-HASH: " + location.hash);             // literal sink
}
function runExtDecodedSearch() {
  var q = location.search ? location.search.substring(1) : "";
  try { q = decodeURIComponent(q); } catch(e) {}
  document.writeln("EXT-DECODE-SEARCH: " + q);                      // literal sink
}
function runExtUrlParam() {
  var name = new URLSearchParams(location.search).get('name');
  if (name) document.write("<span>EXT-URLPARAM: " + name + "</span>"); // literal sink
}
function runExtWindowName() {
  if (window.name) document.writeln("EXT-WINDOW-NAME: " + window.name); // literal sink
}

// export to window
Object.assign(window, {
  runExtDirectHash,
  runExtDecodedSearch,
  runExtUrlParam,
  runExtWindowName
});
