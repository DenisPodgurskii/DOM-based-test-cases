// js/document_write_event_handlers.js
// external functions intended to be called from inline attributes or event listeners

function extWriteOnClickHash() {
  document.write("EXT-EVHASH: " + (location.hash ? location.hash.slice(1) : ""));
}

function extWriteFromField(fieldId) {
  var f = document.getElementById(fieldId);
  document.writeln("EXT-EV-FIELD: " + (f ? f.value : ""));
}

// attach a delegated event to test handler-based flows
document.addEventListener('click', function(e){
  var t = e && e.target;
  if (t && t.matches && t.matches('.ext-write-button')) {
    var id = t.getAttribute('data-field');
    extWriteFromField(id);
  }
});
