// Insecure cookie setting patterns (user-controlled values, weak attributes). No DOM sinks.
(function(){
  function runCookieFromHashNoAttrs() {
    var v = location.hash ? location.hash.slice(1) : "";
    // No Secure/SameSite, raw value
    cookieUtils.setCookieString("ptk_ext_hash=" + v + "; Path=/");
  }

  function runCookieFromQuerySameSiteNoneNoSecure() {
    var q = location.search ? location.search.substring(1) : "";
    // SameSite=None without Secure
    cookieUtils.setCookieString("ptk_ext_query=" + q + "; Path=/; SameSite=None");
  }

  function runCookieWildcardScope() {
    var host = location.hostname;
    // Over-permissive domain/path
    cookieUtils.setCookie("ptk_ext_scope", "1", 1, { domain: host, path: "/" });
  }

  function runCookieLongExpiry() {
    // 5 years
    cookieUtils.setCookie("ptk_ext_persist", "1", 365*5, { path: "/" });
  }

  // Safe examples
  function runCookieSafeStrict() {
    var val = encodeURIComponent("safe-value");
    cookieUtils.setCookie("ptk_ext_safe", val, 1, { path:"/", secure:true, sameSite:"Strict" });
  }

  function runCookieDeleteProper() {
    cookieUtils.deleteCookie("ptk_ext_hash", { path:"/" });
  }

  Object.assign(window, {
    runCookieFromHashNoAttrs,
    runCookieFromQuerySameSiteNoneNoSecure,
    runCookieWildcardScope,
    runCookieLongExpiry,
    runCookieSafeStrict,
    runCookieDeleteProper
  });
})();
