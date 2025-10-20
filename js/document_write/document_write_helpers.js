// js/document_write_helpers.js
// helper functions and simple sanitizers used by other external scripts

// naive escapeHtml (for testing sanitized vs unsanitized flows)
function extEscapeHtml(unsafe) {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}

// helper that returns the same value (propagator)
function extIdentity(v) { return v; }

// helper that intentionally returns sanitized or raw depending on flag
function extMaybeSanitize(v, sanitize) {
  if (!sanitize) return v;
  return extEscapeHtml(v);
}

// function that reads from an input element (external file usage)
function extWriteFromInput(inputId) {
  var el = document.getElementById(inputId);
  if (!el) return;
  document.write(el.value);
}

// export for non-module environments (make discoverable)
window.extEscapeHtml = extEscapeHtml;
window.extIdentity = extIdentity;
window.extMaybeSanitize = extMaybeSanitize;
window.extWriteFromInput = extWriteFromInput;
