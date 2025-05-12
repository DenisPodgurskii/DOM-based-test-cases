// js/document_write.js

// sink
function runSink(input) {
  document.write('<div id="out">' + input + '</div>');
}

// helper to read our cookie
function getCookie(name) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : '';
}
