// ─── Open-Redirect Test Runner ───────────────────────────────────────────────

function runSink(input) {
    if (!input) {
      console.warn('[Test] No input provided');
      return;
    }
    try {
      // 1) window.open() sink (safe: opens new tab)
      //window.open(input, '_blank');
  
      // (If you want to exercise location.assign / href,
      //  you can uncomment these—but beware they will
      //  navigate away from this page.)
      //
      // location.assign(input);
      // location.href = input;
      location.href = input
    } catch (e) {
      console.error('[Test] Open-Redirect error:', e);
    }
  }
  