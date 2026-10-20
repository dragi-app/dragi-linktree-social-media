/* Static and dependency-free. Relative assets work on GitHub project Pages. */
(() => {
  'use strict';

  const COPY = {
    "en": {
      "pageTitle": "Dragi — understand how language works",
      "metaDescription": "Learn languages through stories, mentor explanations and practice. Download Dragi for iOS and Android. Follow the founder’s Spanish challenge or create your own.",
      "skip": "Skip to downloads",
      "languageLabel": "Page language",
      "eyebrow": "Language learning with Dragi",
      "title": "Understand how",
      "titleAccent": "language works.",
      "description": "Stories, mentor explanations and practice\nto help you build your own sentences.",
      "downloadLabel": "Download Dragi",
      "appleCaption": "Download on the",
      "googleCaption": "Get it on",
      "appleLabel": "Download Dragi on the App Store",
      "googleLabel": "Get Dragi on Google Play",
      "downloadNote": "Available for iOS and Android",
      "scroll": "Our socials and the Dragi challenge",
      "communityEyebrow": "Stay connected",
      "communityTitle": "Dragi on social media.",
      "communityDescription": "Language learning and updates from Dragi.",
      "progressEyebrow": "The founder’s personal challenge",
      "progressTitle": "Spanish from zero\nto B2 in one year.",
      "progressDescription": "Kyrylo’s goal, using Dragi and AI.\nFollow his progress and create your own challenge:\nyour language, your goal, your pace.",
      "progressCta": "Explore the challenge",
      "footer": "Stories. Explanations. Practice.",
      "privacy": "Privacy policy"
    },
    "uk": {
      "pageTitle": "Dragi — розумій, як працює мова",
      "metaDescription": "Вивчай мови через історії, пояснення менторів і практику. Завантажуй Dragi для iOS та Android. Стеж за челенджем засновника або створи власний.",
      "skip": "Перейти до завантаження",
      "languageLabel": "Мова сторінки",
      "eyebrow": "Вивчення мов із Dragi",
      "title": "Розумій, як",
      "titleAccent": "працює мова.",
      "description": "Історії, пояснення менторів і практика,\nщоб будувати власні фрази.",
      "downloadLabel": "Завантажуй Dragi",
      "appleCaption": "Завантажуй в",
      "googleCaption": "Завантажуй у",
      "appleLabel": "Завантажити Dragi в App Store",
      "googleLabel": "Завантажити Dragi у Google Play",
      "downloadNote": "Для iOS та Android",
      "scroll": "Наші соцмережі та челендж Dragi",
      "communityEyebrow": "Залишаймося на зв’язку",
      "communityTitle": "Dragi у соцмережах.",
      "communityDescription": "Про мови, навчання та розвиток Dragi.",
      "progressEyebrow": "Особистий челендж засновника",
      "progressTitle": "Іспанська з нуля\nдо B2 за рік.",
      "progressDescription": "Ціль Кирила — із Dragi та ШІ.\nСтеж за процесом і створи власний челендж:\nсвоя мова, своя ціль, свій темп.",
      "progressCta": "Переглянути челендж",
      "footer": "Історії. Пояснення. Практика.",
      "privacy": "Політика конфіденційності"
    },
    "de": {
      "pageTitle": "Dragi — verstehe, wie Sprache funktioniert",
      "metaDescription": "Lerne Sprachen mit Geschichten, Erklärungen und Übungen. Lade Dragi für iOS und Android herunter. Verfolge die Challenge des Gründers oder starte deine eigene.",
      "skip": "Zu den Downloads",
      "languageLabel": "Sprache der Seite",
      "eyebrow": "Sprachen lernen mit Dragi",
      "title": "Verstehe, wie",
      "titleAccent": "Sprache funktioniert.",
      "description": "Geschichten, Erklärungen von Mentoren und Übungen,\num eigene Sätze zu bilden.",
      "downloadLabel": "Dragi herunterladen",
      "appleCaption": "Laden im",
      "googleCaption": "Jetzt bei",
      "appleLabel": "Dragi im App Store herunterladen",
      "googleLabel": "Dragi bei Google Play herunterladen",
      "downloadNote": "Für iOS und Android",
      "scroll": "Unsere Kanäle und die Dragi-Challenge",
      "communityEyebrow": "Bleiben wir in Kontakt",
      "communityTitle": "Dragi auf Social Media.",
      "communityDescription": "Sprachenlernen und Neuigkeiten von Dragi.",
      "progressEyebrow": "Die persönliche Challenge des Gründers",
      "progressTitle": "Spanisch von null\nauf B2 in einem Jahr.",
      "progressDescription": "Kyrylos Ziel – mit Dragi und KI.\nVerfolge seinen Weg und starte deine eigene Challenge:\ndeine Sprache, dein Ziel, dein Tempo.",
      "progressCta": "Challenge entdecken",
      "footer": "Geschichten. Erklärungen. Übungen.",
      "privacy": "Datenschutzerklärung"
    },
    "es": {
      "pageTitle": "Dragi — entiende cómo funciona el idioma",
      "metaDescription": "Aprende idiomas con historias, explicaciones de mentores y práctica. Descarga Dragi para iOS y Android. Sigue el reto del fundador o crea el tuyo.",
      "skip": "Ir a las descargas",
      "languageLabel": "Idioma de la página",
      "eyebrow": "Aprende idiomas con Dragi",
      "title": "Entiende cómo",
      "titleAccent": "funciona el idioma.",
      "description": "Historias, explicaciones de mentores y práctica\npara construir tus propias frases.",
      "downloadLabel": "Descarga Dragi",
      "appleCaption": "Descárgala en el",
      "googleCaption": "Disponible en",
      "appleLabel": "Descargar Dragi en el App Store",
      "googleLabel": "Descargar Dragi en Google Play",
      "downloadNote": "Para iOS y Android",
      "scroll": "Nuestras redes y el reto Dragi",
      "communityEyebrow": "Sigamos en contacto",
      "communityTitle": "Dragi en redes sociales.",
      "communityDescription": "Aprendizaje de idiomas y novedades de Dragi.",
      "progressEyebrow": "El reto personal del fundador",
      "progressTitle": "Español de cero\na B2 en un año.",
      "progressDescription": "La meta de Kyrylo, con Dragi e IA.\nSigue su progreso y crea tu propio reto:\ntu idioma, tu meta, tu ritmo.",
      "progressCta": "Descubre el reto",
      "footer": "Historias. Explicaciones. Práctica.",
      "privacy": "Política de privacidad"
    }
  };

  const STORAGE_KEY = 'dragi-social.language';
  const picker = document.getElementById('language');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function normalizeLocale(value) {
    const code = String(value || '').trim().toLowerCase().split(/[-_]/)[0];
    return Object.hasOwn(COPY, code) ? code : null;
  }

  function initialLanguage() {
    const requested = normalizeLocale(new URLSearchParams(location.search).get('lan'));
    if (requested) return requested;
    try {
      const saved = normalizeLocale(localStorage.getItem(STORAGE_KEY));
      if (saved) return saved;
    } catch { /* Storage is optional, including in social in-app browsers. */ }
    for (const locale of navigator.languages || [navigator.language]) {
      const language = normalizeLocale(locale);
      if (language) return language;
    }
    return 'en';
  }

  function render(language) {
    const copy = COPY[language];
    document.documentElement.lang = language;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').content = copy.metaDescription;
    document.querySelector('meta[property="og:title"]').content = copy.pageTitle;
    document.querySelector('meta[property="og:description"]').content = copy.metaDescription;
    document.querySelectorAll('[data-copy]').forEach(element => {
      element.textContent = copy[element.dataset.copy];
    });
    document.querySelectorAll('[data-copy-aria]').forEach(element => {
      element.setAttribute('aria-label', copy[element.dataset.copyAria]);
    });
    document.getElementById('progress-link').href = `https://progress.dragi.app/${language}/`;
    const apple = new URL('https://apps.apple.com/us/app/dragi-language-learning/id6502047535');
    apple.searchParams.set('l', language);
    document.getElementById('app-store').href = apple.href;
    const google = new URL('https://play.google.com/store/apps/details?id=ua.dragi.education');
    google.searchParams.set('hl', language);
    document.getElementById('google-play').href = google.href;
    picker.value = language;
  }

  picker.addEventListener('change', () => {
    const language = normalizeLocale(picker.value) || 'en';
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Choice works without storage. */ }
    const url = new URL(location.href);
    url.searchParams.set('lan', language);
    try { history.replaceState(null, '', url); } catch { /* file:// previews may restrict history. */ }
    render(language);
  });

  // Native links navigate immediately. Animation never delays a store opening.
  document.querySelectorAll('.store-button').forEach(button => {
    button.addEventListener('pointerdown', event => {
      if (reducedMotion.matches || (event.pointerType === 'mouse' && event.button !== 0)) return;
      button.classList.add('is-pressed');
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'tap-ripple';
      ripple.setAttribute('aria-hidden', 'true');
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      button.append(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    });
    ['pointerup', 'pointercancel', 'pointerleave', 'blur'].forEach(type => {
      button.addEventListener(type, () => button.classList.remove('is-pressed'));
    });
    button.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
      const rect = button.getBoundingClientRect();
      button.style.setProperty('--tilt-x', `${((event.clientY - rect.top) / rect.height - .5) * -5}deg`);
      button.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - .5) * 5}deg`);
    });
    button.addEventListener('pointerleave', () => {
      button.style.removeProperty('--tilt-x');
      button.style.removeProperty('--tilt-y');
    });
  });

  window.addEventListener('pageshow', () => {
    document.querySelectorAll('.is-pressed, .tap-ripple').forEach(element => {
      if (element.classList.contains('tap-ripple')) element.remove();
      else element.classList.remove('is-pressed');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  render(initialLanguage());

  // Reveal lower-page links once they enter the viewport; static links remain
  // visible when JavaScript, IntersectionObserver or motion is unavailable.
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    try {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: .12 });
      document.documentElement.classList.add('has-scroll-reveal');
      document.querySelectorAll('.scroll-reveal').forEach(element => observer.observe(element));
    } catch {
      document.documentElement.classList.remove('has-scroll-reveal');
    }
  }
})();
