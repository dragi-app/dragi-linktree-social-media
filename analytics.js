/* Basic Consent Mode: the Google tag loads only after an explicit opt-in. */
(() => {
  'use strict';
  const MEASUREMENT_ID = 'G-QCFG3R6J86';
  const CONSENT_KEY = 'dragi-social.analytics-consent.v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const production = location.hostname === 'social.links.dragi.app';
  const TEXT = {
    en: { title: 'Visit analytics', body: 'Allow Google Analytics cookies to measure visits and button clicks? Your choice does not affect downloads.', allow: 'Allow analytics', deny: 'Decline', settings: 'Analytics settings', privacy: 'How Google uses data', policy: 'Privacy policy' },
    uk: { title: 'Статистика відвідувань', body: 'Дозволити файли cookie Google Analytics для підрахунку відвідувань і натискань? Твій вибір не впливає на завантаження.', allow: 'Дозволити аналітику', deny: 'Відхилити', settings: 'Налаштування аналітики', privacy: 'Як Google використовує дані', policy: 'Політика конфіденційності' },
    de: { title: 'Besuchsstatistik', body: 'Google-Analytics-Cookies erlauben, um Besuche und Klicks zu messen? Deine Wahl hat keinen Einfluss auf Downloads.', allow: 'Analytics erlauben', deny: 'Ablehnen', settings: 'Analytics-Einstellungen', privacy: 'So verwendet Google Daten', policy: 'Datenschutzerklärung' },
    es: { title: 'Estadísticas de visitas', body: '¿Permites cookies de Google Analytics para medir visitas y clics? Tu elección no afecta a las descargas.', allow: 'Permitir Analytics', deny: 'Rechazar', settings: 'Ajustes de Analytics', privacy: 'Cómo usa Google los datos', policy: 'Política de privacidad' }
  };
  const banner = document.getElementById('analytics-consent');
  const settings = document.getElementById('analytics-settings');
  let enabled = false;
  let started = false;
  let choice = null;
  let returnFocus = false;

  function language() {
    return Object.hasOwn(TEXT, document.documentElement.lang) ? document.documentElement.lang : 'en';
  }
  function readChoice() {
    try {
      const saved = JSON.parse(localStorage.getItem(CONSENT_KEY));
      if (saved && ['granted', 'denied'].includes(saved.value) && Number.isFinite(saved.at) &&
          saved.at <= Date.now() && Date.now() - saved.at < MAX_AGE) return saved.value;
    } catch { /* Analytics remains opt-in when storage is unavailable. */ }
    return null;
  }
  function translate() {
    const copy = TEXT[language()];
    document.querySelectorAll('[data-consent-copy]').forEach(element => {
      element.textContent = copy[element.dataset.consentCopy];
    });
  }
  function tag() { window.dataLayer.push(arguments); }
  function start() {
    enabled = true;
    window[`ga-disable-${MEASUREMENT_ID}`] = false;
    if (!production) return; // Local previews never send production traffic.
    if (started) {
      tag('consent', 'update', { analytics_storage: 'granted' });
      return;
    }
    started = true;
    window.dataLayer = window.dataLayer || [];
    tag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    tag('consent', 'update', { analytics_storage: 'granted' });
    tag('js', new Date());
    tag('config', MEASUREMENT_ID, {
      cookie_domain: 'social.links.dragi.app', cookie_expires: MAX_AGE / 1000,
      allow_google_signals: false, allow_ad_personalization_signals: false,
      page_language: language()
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.append(script);
  }
  function stop() {
    enabled = false;
    window[`ga-disable-${MEASUREMENT_ID}`] = true;
    if (!production) return;
    document.cookie.split(';').forEach(item => {
      const name = item.split('=')[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) return;
      // This integration scopes cookies to this host, not sibling Dragi sites.
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=social.links.dragi.app; SameSite=Lax`;
    });
  }
  function applyChoice(value) {
    choice = value;
    banner.hidden = value !== null;
    if (value === 'granted') start();
    else stop();
  }
  function choose(value) {
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, at: Date.now() })); } catch { /* Session-only choice. */ }
    applyChoice(value);
    if (returnFocus) settings.focus();
    returnFocus = false;
  }
  function track(name, parameters = {}) {
    if (!enabled || !production) return;
    tag('event', name, { page_language: language(), ...parameters });
  }
  document.getElementById('analytics-allow').addEventListener('click', () => choose('granted'));
  document.getElementById('analytics-deny').addEventListener('click', () => choose('denied'));
  settings.addEventListener('click', () => {
    returnFocus = true;
    banner.hidden = false;
    document.getElementById(choice === 'granted' ? 'analytics-deny' : 'analytics-allow').focus();
    banner.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  document.getElementById('app-store').addEventListener('click', () => track('app_store_click'));
  document.getElementById('google-play').addEventListener('click', () => track('play_store_click'));
  document.getElementById('progress-link').addEventListener('click', () => track('progress_click'));
  ['instagram', 'tiktok', 'youtube'].forEach(network => {
    document.querySelector(`.social-link.${network}`).addEventListener('click', () => track('social_click', { social_network: network }));
  });
  document.getElementById('language').addEventListener('change', () => {
    translate();
    track('language_change');
  });
  window.addEventListener('storage', event => {
    if (event.key === CONSENT_KEY) applyChoice(readChoice());
  });
  translate();
  settings.hidden = false;
  applyChoice(readChoice());
})();
