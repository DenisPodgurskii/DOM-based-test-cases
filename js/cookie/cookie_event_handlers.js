// Event-driven cookie mutation patterns (no DOM sinks).
(function(){
  function extCookieSetFromField(fieldId) {
    var el = document.getElementById(fieldId);
    var v = el ? el.value : "";
    // Raw value, no attributes
    cookieUtils.setCookieString("ptk_ext_from_field=" + v + "; Path=/");
  }

  // Delegated: set cookie with domain/path from field value
  document.addEventListener('click', function(e){
    var t = e && e.target;
    if (!t || !t.matches || !t.matches('.ext-cookie-scope-button')) return;
    var id = t.getAttribute('data-field');
    var el = document.getElementById(id);
    var v = el ? el.value : "";
    cookieUtils.setCookie("ptk_ext_scope_from_field", v, 1, { path:"/", domain: location.hostname });
  });

  Object.assign(window, { extCookieSetFromField });
})();
