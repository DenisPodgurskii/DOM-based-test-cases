// js/document_write_external_1.js
// External test cases for document.write / writeln - direct/external sources

// 1. external direct use of location.hash
// filename: js/document_write_external_1.js
document.write("EXT-DIRECT-HASH: " + location.hash);

// 2. decode + write from search
(function(){
  var q = location.search && location.search.length ? location.search.substring(1) : "";
  try {
    document.writeln("EXT-DECODE-SEARCH: " + decodeURIComponent(q));
  } catch(e) {
    document.writeln("EXT-DECODE-SEARCH: " + q);
  }
})();

// 3. URLSearchParams usage (external)
(function(){
  var name = new URLSearchParams(location.search).get('name');
  if (name) {
    document.write("<span>EXT-URLPARAM: " + name + "</span>");
  }
})();

// 4. window.name flow (external)
(function(){
  if (window.name && window.name.length) {
    document.writeln("EXT-WINDOW-NAME: " + window.name);
  }
})();
