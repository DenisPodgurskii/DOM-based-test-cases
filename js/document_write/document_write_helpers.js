// helpers & simple sanitizers — no auto-run

function extEscapeHtml(unsafe) {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}

function extIdentity(v) { return v; }

function extMaybeSanitize(v, sanitize) {
  return sanitize ? extEscapeHtml(v) : v;
}

function extWriteFromInput(inputId) {
  var el = document.getElementById(inputId);
  if (!el) return;
  document.write(el.value); // literal sink (SAST-visible)
}

// export
window.extEscapeHtml = extEscapeHtml;
window.extIdentity = extIdentity;
window.extMaybeSanitize = extMaybeSanitize;
window.extWriteFromInput = extWriteFromInput;
