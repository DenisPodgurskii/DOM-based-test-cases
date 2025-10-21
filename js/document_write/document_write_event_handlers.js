// event-driven flows — no auto-run; called by buttons/handlers

function extWriteOnClickHash() {
  document.write("EXT-EVHASH: " + (location.hash ? location.hash.slice(1) : "")); // literal sink
}

function extWriteFromField(fieldId) {
  var f = document.getElementById(fieldId);
  document.writeln("EXT-EV-FIELD: " + (f ? f.value : "")); // literal sink
}

// delegated listener kept (won't run until you click)
document.addEventListener('click', function(e){
  var t = e && e.target;
  if (t && t.matches && t.matches('.ext-write-button')) {
    var id = t.getAttribute('data-field');
    extWriteFromField(id);
  }
});

Object.assign(window, {
  extWriteOnClickHash,
  extWriteFromField
});
