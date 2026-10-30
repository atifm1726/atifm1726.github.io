/* Set content on the goatcounter-endpoint meta tag to your account's /count URL.
   An empty endpoint disables analytics, including all third-party requests. */
(function () {
  'use strict';
  var meta = document.querySelector('meta[name="goatcounter-endpoint"]');
  var endpoint = meta ? meta.content.trim() : '';
  if (!/^https:\/\/[a-z0-9-]+\.goatcounter\.com\/count$/.test(endpoint)) return;
  // Keep local previews out of production reports.
  if (location.protocol !== 'https:') return;

  window.goatcounter = {
    // Send the initial pageview explicitly after the library loads.
    no_onload: true,
    // Query strings and fragments may contain personal information.
    path: function () { return location.pathname; },
    referrer: function () {
      try { return document.referrer ? new URL(document.referrer).origin : ''; }
      catch (_) { return ''; }
    }
  };
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', endpoint);
  script.referrerPolicy = 'strict-origin';
  script.onload = function () {
    var counted = false;
    function countOpening() {
      if (counted || document.visibilityState === 'hidden' || document.visibilityState === 'prerender') return;
      counted = true;
      document.removeEventListener('visibilitychange', countOpening);
      // Count each document opening, even within an existing visitor session.
      window.goatcounter.count({ no_session: true });
    }
    document.addEventListener('visibilitychange', countOpening);
    countOpening();
    window.goatcounter.bind_events();
  };
  document.head.appendChild(script);
}());
