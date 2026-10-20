/* GA4 starts automatically on the production hostname. */
(() => {
  'use strict';
  if (location.hostname !== 'social.links.dragi.app') return;

  const MEASUREMENT_ID = 'G-QCFG3R6J86';
  const COOKIE_MAX_AGE = 180 * 24 * 60 * 60;
  window.dataLayer = window.dataLayer || [];

  function tag() { window.dataLayer.push(arguments); }
  function language() { return document.documentElement.lang; }
  function track(name, parameters = {}) {
    tag('event', name, { page_language: language(), ...parameters });
  }

  tag('consent', 'default', {
    analytics_storage: 'granted', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  tag('js', new Date());
  tag('config', MEASUREMENT_ID, {
    cookie_domain: 'social.links.dragi.app', cookie_expires: COOKIE_MAX_AGE,
    allow_google_signals: false, allow_ad_personalization_signals: false,
    page_language: language()
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.append(script);

  document.getElementById('app-store').addEventListener('click', () => track('app_store_click'));
  document.getElementById('google-play').addEventListener('click', () => track('play_store_click'));
  document.getElementById('progress-link').addEventListener('click', () => track('progress_click'));
  ['instagram', 'tiktok', 'youtube'].forEach(network => {
    document.querySelector(`.social-link.${network}`).addEventListener('click', () => track('social_click', { social_network: network }));
  });
  document.getElementById('language').addEventListener('change', () => track('language_change'));
})();
