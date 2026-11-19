/* TikTok Pixel starts on the production hostname after marketing consent. */
(() => {
  'use strict';

  const PIXEL_ID = 'DBVD6IBC77U7CBT6A5I0';
  if (!PIXEL_ID || location.hostname !== 'social.links.dragi.app') return;

  const CONSENT_KEY = 'dragi-social.tiktok-marketing';
  const STORE_DELAY_MS = 300;
  const COPY = {
    en: {
      title: 'Marketing cookies',
      description: 'Allow TikTok marketing cookies to measure ad visits and clicks on the store links.',
      privacy: 'Privacy policy', accept: 'Allow', reject: 'Decline'
    },
    uk: {
      title: 'Маркетингові cookie',
      description: 'Дозволь маркетингові cookie TikTok для вимірювання переходів із реклами й натискань на кнопки магазинів.',
      privacy: 'Політика конфіденційності', accept: 'Дозволити', reject: 'Відхилити'
    },
    de: {
      title: 'Marketing-Cookies',
      description: 'Erlaube Marketing-Cookies von TikTok, um Besuche über Anzeigen und Klicks auf die Store-Links zu messen.',
      privacy: 'Datenschutzerklärung', accept: 'Zulassen', reject: 'Ablehnen'
    },
    es: {
      title: 'Cookies de marketing',
      description: 'Permite las cookies de marketing de TikTok para medir las visitas desde anuncios y los clics en los enlaces a las tiendas.',
      privacy: 'Política de privacidad', accept: 'Permitir', reject: 'Rechazar'
    }
  };

  const panel = document.createElement('section');
  panel.id = 'marketing-consent';
  panel.className = 'marketing-consent';
  panel.hidden = true;
  panel.innerHTML = `
    <p class="marketing-consent-copy"><span></span> <a href="https://dragi.app/privacy-policy" target="_blank" rel="noopener noreferrer"></a></p>
    <div class="marketing-consent-actions"><button type="button"></button><button type="button"></button></div>`;
  document.querySelector('.site-footer').after(panel);
  const description = panel.querySelector('span');
  const privacy = panel.querySelector('a');
  const [reject, accept] = panel.querySelectorAll('button');

  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'marketing-consent-settings';
  settings.setAttribute('aria-controls', panel.id);
  settings.setAttribute('aria-expanded', 'false');
  document.querySelector('.footer-legal').append(settings);

  let consent = null;
  let pixelStarted = false;
  let pixelFailed = false;
  let storeNavigationPending = false;

  function renderCopy() {
    const copy = COPY[document.documentElement.lang] || COPY.en;
    panel.setAttribute('aria-label', copy.title);
    settings.textContent = copy.title;
    description.textContent = copy.description;
    privacy.textContent = copy.privacy;
    reject.textContent = copy.reject;
    accept.textContent = copy.accept;
  }

  function startPixel() {
    // Queue the standard TikTok base-code calls while its SDK loads.
    window.TiktokAnalyticsObject = 'ttq';
    const ttq = window.ttq = window.ttq || [];
    ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'];
    ttq.setAndDefer = (queue, method) => {
      queue[method] = (...args) => queue.push([method, ...args]);
    };
    ttq.methods.forEach(method => ttq.setAndDefer(ttq, method));
    ttq.instance = id => {
      const queue = ttq._i[id] || [];
      ttq.methods.forEach(method => ttq.setAndDefer(queue, method));
      return queue;
    };
    ttq.load = (id, options = {}) => {
      const sdkUrl = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      (ttq._i ||= {})[id] = Object.assign([], { _u: sdkUrl });
      (ttq._t ||= {})[id] = Date.now();
      (ttq._o ||= {})[id] = options;
      const script = document.createElement('script');
      script.async = true;
      script.src = `${sdkUrl}?${new URLSearchParams({ sdkid: id, lib: 'ttq' })}`;
      script.addEventListener('error', () => { pixelFailed = true; }, { once: true });
      document.head.append(script);
    };
    ttq.load(PIXEL_ID);
    ttq.grantConsent();
    ttq.page();
    pixelStarted = true;
  }

  function applyConsent(choice) {
    if (choice === consent) return;
    consent = choice;
    if (pixelStarted) {
      if (choice === 'granted') window.ttq.grantConsent();
      else window.ttq.revokeConsent();
    } else if (choice === 'granted') {
      startPixel();
    }
  }

  function toggleSettings(open) {
    panel.hidden = !open;
    settings.setAttribute('aria-expanded', String(open));
  }

  function saveConsent(choice) {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* The choice still applies to this page. */ }
    applyConsent(choice);
    toggleSettings(false);
    settings.focus();
  }

  settings.addEventListener('click', () => {
    toggleSettings(panel.hidden);
    if (!panel.hidden) reject.focus();
  });
  reject.addEventListener('click', () => saveConsent('denied'));
  accept.addEventListener('click', () => saveConsent('granted'));
  document.getElementById('language')?.addEventListener('change', renderCopy);
  window.addEventListener('storage', event => {
    if (event.storageArea === localStorage && (event.key === CONSENT_KEY || event.key === null)) {
      applyConsent(event.newValue);
    }
  });

  renderCopy();
  let savedConsent = null;
  try { savedConsent = localStorage.getItem(CONSENT_KEY); } catch { /* The settings still work without storage. */ }
  applyConsent(savedConsent);

  for (const [id, name] of [['google-play', 'google_play'], ['app-store', 'app_store']]) {
    const link = document.getElementById(id);
    const handleClick = event => {
      if (event.defaultPrevented || consent !== 'granted' || pixelFailed) return;
      const sameTab = event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
      if (sameTab && storeNavigationPending) {
        event.preventDefault();
        return;
      }
      try { window.ttq.track('Download', { content_name: name, content_type: 'product' }); }
      catch { return; }
      if (!sameTab) return;

      event.preventDefault();
      storeNavigationPending = true;
      const destination = link.href;
      window.setTimeout(() => {
        storeNavigationPending = false;
        location.assign(destination);
      }, STORE_DELAY_MS);
    };
    link.addEventListener('click', handleClick);
    link.addEventListener('auxclick', event => {
      if (event.button === 1) handleClick(event);
    });
  }
})();
