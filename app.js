/**
 * Koronka do Miłosierdzia Bożego 2.0
 * Schemat Serca Różańcowego zgodny z aplikacją Rosario i wizerunkiem wileńskim Kazimirowskiego (1934)
 */

'use strict';

// ========================================================
// 1. DANE MODLITEWNE KORONKI DO MIŁOSIERDZIA BOŻEGO
// ========================================================
const PRAYER_STEPS = [
  // Modlitwy wstępne
  {
    part: 'Wprowadzenie',
    title: 'Znak Krzyża',
    shortText: '+ W imię Ojca, i Syna i Ducha Świętego. Amen.',
    fullText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    type: 'cross',
    decade: 0,
    beadIndex: 0,
    beadId: 'bead-cross'
  },
  {
    part: 'Modlitwy wstępne',
    title: 'Modlitwa Pańska',
    shortText: 'Ojcze nasz, któryś jest w niebie...',
    fullText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje; przyjdź królestwo Twoje; bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj; i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom; i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
    speechText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje; przyjdź królestwo Twoje; bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj; i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom; i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
    type: 'large',
    decade: 0,
    beadIndex: 1,
    beadId: 'bead-stem-large'
  },
  {
    part: 'Modlitwy wstępne',
    title: 'Pozdrowienie Anielskie',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.',
    speechText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.',
    type: 'small',
    decade: 0,
    beadIndex: 2,
    beadId: 'bead-stem-red-1'
  },
  {
    part: 'Modlitwy wstępne',
    title: 'Skład Apostolski',
    shortText: 'Wierzę w Boga, Ojca wszechmogącego...',
    fullText: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał; wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego; stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
    speechText: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał; wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego; stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
    type: 'small',
    decade: 0,
    beadIndex: 3,
    beadId: 'bead-stem-red-2'
  }
];

// Generowanie 5 dziesiątek ze schematem serca (kierunek: góra -> lewa strona -> dół -> prawa strona -> góra)
for (let d = 1; d <= 5; d++) {
  // Duży paciorek (Ojcze Przedwieczny)
  let largeBeadId = 'bead-connector';
  if (d === 2) largeBeadId = 'bead-large-2';
  else if (d === 3) largeBeadId = 'bead-large-3';
  else if (d === 4) largeBeadId = 'bead-large-4';
  else if (d === 5) largeBeadId = 'bead-large-5';

  PRAYER_STEPS.push({
    part: `Dziesiątka ${d} z 5`,
    title: 'Ojcze Przedwieczny (duży paciorek)',
    shortText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew...',
    fullText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.',
    speechText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.',
    type: 'large',
    decade: d,
    beadIndex: 0,
    beadId: largeBeadId
  });

  // 10 małych paciorków (Dla Jego bolesnej męki)
  for (let b = 1; b <= 10; b++) {
    PRAYER_STEPS.push({
      part: `Dziesiątka ${d} z 5 • Paciorek ${b}/10`,
      title: 'Dla Jego bolesnej męki',
      shortText: 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.',
      fullText: 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.',
      speechText: 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.',
      type: 'small',
      decade: d,
      beadIndex: b,
      beadId: `bead-dec${d}-${b}`
    });
  }
}

// Modlitwy końcowe
for (let s = 1; s <= 3; s++) {
  PRAYER_STEPS.push({
    part: 'Zakończenie',
    title: `Święty Boże (${s} z 3)`,
    shortText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny...',
    fullText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem.',
    speechText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem.',
    type: 'holyGod',
    decade: 6,
    beadIndex: s,
    beadId: 'bead-connector'
  });
}

// O Krwi i Wodo
PRAYER_STEPS.push({
  part: 'Zakończenie',
  title: 'O Krwi i Wodo',
  shortText: 'O Krwi i Wodo, któraś wytrysnęła z Najświętszego Serca Jezusowego...',
  fullText: 'O Krwi i Wodo, któraś wytrysnęła z Najświętszego Serca Jezusowego jako zdrój Miłosierdzia dla nas – ufam Tobie!',
  speechText: 'O Krwi i Wodo, któraś wytrysnęła z Najświętszego Serca Jezusowego jako zdrój Miłosierdzia dla nas – ufam Tobie!',
  type: 'closing',
  decade: 6,
  beadIndex: 4,
  beadId: 'bead-stem-large'
});

// 3x Jezu ufam Tobie
for (let j = 1; j <= 3; j++) {
  PRAYER_STEPS.push({
    part: 'Zakończenie',
    title: `Jezu, ufam Tobie (${j} z 3)`,
    shortText: 'Jezu, ufam Tobie!',
    fullText: 'Jezu, ufam Tobie!',
    speechText: 'Jezu, ufam Tobie!',
    type: 'closing',
    decade: 6,
    beadIndex: 4 + j,
    beadId: 'bead-cross'
  });
}

// Błogosławieństwo końcowe
PRAYER_STEPS.push({
  part: 'Zakończenie',
  title: 'Znak Krzyża',
  shortText: '+ W imię Ojca, i Syna i Ducha Świętego. Amen.',
  fullText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
  speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
  type: 'cross',
  decade: 6,
  beadIndex: 8,
  beadId: 'bead-cross'
});


// ========================================================
// 2. SYNTEZATOR SAKRALNEGO DŹWIĘKU (WEB AUDIO API)
// Subtelny, nieinwazyjny ton o niskim poziomie głośności
// ========================================================
class SacredChimePlayer {
  constructor() {
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  /**
   * Generuje bardzo delikatny, ciepły ton (głośność stonowana do skupienia)
   */
  playBell(freq = 587.33, duration = 1.8) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const harmonics = [1.0, 2.02, 3.01];
      const gains = [0.08, 0.03, 0.01]; // Cichy i dyskretny

      harmonics.forEach((mult, index) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * mult, now);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.exponentialRampToValueAtTime(gains[index], now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
      });
    } catch (_) {}
  }
}


// ========================================================
// 3. SILNIK LEKTORA (WEB SPEECH API) — ODPORNY NA PAUZY I ZACINANIE
// ========================================================
class SpeechEngine {
  constructor(onStart, onEnd) {
    this.synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.onStart = onStart || (() => {});
    this.onEnd = onEnd || (() => {});
    this.polishVoice = null;
    this.isSpeaking = false;
    this.sessionId = 0;
    
    this.loadVoices();
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  }

  loadVoices() {
    if (!this.synth) return;
    try {
      const voices = this.synth.getVoices();
      this.polishVoice = voices.find(v => v.lang === 'pl-PL' || v.lang === 'pl_PL')
        || voices.find(v => v.lang && v.lang.startsWith('pl'))
        || null;
    } catch (_) {}
  }

  splitIntoClauses(text) {
    if (!text) return [];
    const matches = text.match(/[^.!?;\n]+[.!?;\n]+/g) || [text];
    const result = [];
    for (let part of matches) {
      const trimmed = part.trim();
      if (trimmed) result.push(trimmed);
    }
    return result.length > 0 ? result : [text];
  }

  speak(text, onComplete) {
    this.stop();

    if (!this.synth || !text) {
      if (onComplete) onComplete();
      return;
    }

    const currentSession = ++this.sessionId;
    const clauses = this.splitIntoClauses(text);
    let clauseIndex = 0;

    this.isSpeaking = true;
    this.onStart();

    const speakNextClause = () => {
      if (currentSession !== this.sessionId || !this.isSpeaking) return;

      if (clauseIndex >= clauses.length) {
        this.isSpeaking = false;
        this.onEnd();
        if (onComplete) onComplete();
        return;
      }

      const phrase = clauses[clauseIndex++];
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = 'pl-PL';
      if (this.polishVoice) utterance.voice = this.polishVoice;
      utterance.rate = 0.90; // Spokojne tempo modlitwy
      utterance.pitch = 1.0;

      let clauseEnded = false;
      const finishClause = () => {
        if (!clauseEnded) {
          clauseEnded = true;
          if (currentSession === this.sessionId && this.isSpeaking) {
            setTimeout(speakNextClause, 120);
          }
        }
      };

      utterance.onend = finishClause;
      utterance.onerror = (e) => {
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          finishClause();
        }
      };

      try {
        if (this.synth.paused) this.synth.resume();
        this.synth.speak(utterance);
      } catch (_) {
        finishClause();
      }
    };

    speakNextClause();
  }

  stop() {
    this.sessionId++;
    this.isSpeaking = false;
    this.onEnd();
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (_) {}
    }
  }
}


// ========================================================
// 4. GŁÓWNY KONTROLER APLIKACJI KORONKA 2.0
// ========================================================
class KoronkaApp {
  constructor() {
    this.currentStep = 0;
    this.isFullTextOpen = false;
    this.isAutoplayActive = false;
    this.isFocusModeActive = false;
    this.isMuted = false;
    this.autoplayTimeout = null;

    // Moduły audio i lektora
    this.chime = new SacredChimePlayer();
    this.speech = new SpeechEngine(
      () => this.onSpeechStart(),
      () => this.onSpeechEnd()
    );

    this.initElements();
    this.bindEvents();
    this.bindTouchGestures();
    this.bindBeadClicks();
    this.render();
  }

  initElements() {
    // Strefa dotykowa i obraz
    this.appContainer = document.getElementById('app');
    this.prayerTapArea = document.getElementById('prayer-tap-area');
    this.mainImage = document.getElementById('main-image');

    // Górna belka modlitewna
    this.prayerCard = document.getElementById('prayer-card');
    this.prayerStepBadge = document.getElementById('prayer-step-badge');
    this.prayerShort = document.getElementById('prayer-short');
    this.prayerFull = document.getElementById('prayer-full');
    this.prayerFullText = document.getElementById('prayer-full-text');
    this.voiceWave = document.getElementById('voice-wave');

    // Schemat SVG
    this.rosarySvg = document.getElementById('rosary-heart-svg');
    this.svgBeads = document.querySelectorAll('.bead-item');
    this.haloOuter = document.getElementById('active-halo-outer');
    this.haloInner = document.getElementById('active-halo-inner');
    this.haloGroup = document.getElementById('active-halo-group');

    // Przyciski nawigacji dolnej
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnAutoplay = document.getElementById('btn-autoplay');
    this.btnRestart = document.getElementById('btn-restart');
    this.iconPlay = document.getElementById('icon-play');
    this.iconPause = document.getElementById('icon-pause');

    // Akcje karty modlitwy
    this.btnToggleText = document.getElementById('btn-toggle-text');
    this.btnFocusMode = document.getElementById('btn-focus-mode');
    this.iconEyeOpen = document.getElementById('icon-eye-open');
    this.iconEyeClosed = document.getElementById('icon-eye-closed');

    // Pasek górny i menu hamburger
    this.mainTopBar = document.getElementById('main-top-bar');
    this.btnSound = document.getElementById('btn-sound');
    this.iconSoundOn = document.getElementById('icon-sound-on');
    this.iconSoundOff = document.getElementById('icon-sound-off');
    this.btnHamburger = document.getElementById('btn-hamburger');
    this.dropdownMenu = document.getElementById('dropdown-menu');
    this.btnShowHeader = document.getElementById('btn-show-header');

    // Pozycje menu hamburger
    this.menuBtnFullscreen = document.getElementById('menu-btn-fullscreen');
    this.menuBtnHideHeader = document.getElementById('menu-btn-hide-header');
    this.menuBtnSchema = document.getElementById('menu-btn-schema');
    this.menuBtnInstall = document.getElementById('menu-btn-install');
    this.menuBtnRestart = document.getElementById('menu-btn-restart');

    // Modale
    this.btnSchema = document.getElementById('btn-schema');
    this.modalSchema = document.getElementById('modal-schema');
    this.btnCloseModal = document.getElementById('btn-close-modal');
    this.btnInstall = document.getElementById('btn-install');
    this.modalInstall = document.getElementById('modal-install');
    this.btnCloseInstallModal = document.getElementById('btn-close-install-modal');
    this.btnMap = document.getElementById('btn-map');
    this.menuBtnMap = document.getElementById('menu-btn-map');
    this.modalMap = document.getElementById('modal-map');
    this.btnCloseMapModal = document.getElementById('btn-close-map-modal');
    this.tabBtns = document.querySelectorAll('.platform-tabs .tab-btn');
    this.tabContents = document.querySelectorAll('#modal-install .tab-content');
    this.pwaQuickInstallBox = document.getElementById('pwa-quick-install-box');
    this.pwaAlreadyInstalledBox = document.getElementById('pwa-already-installed-box');
  }

  bindEvents() {
    this.btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handleUserAdvance();
    });

    this.btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevStep();
    });

    this.btnRestart.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Czy chcesz rozpocząć Koronkę od początku?')) {
        this.stopAutoplay();
        this.goToStep(0);
      }
    });

    this.btnAutoplay.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleAutoplay();
    });

    this.btnToggleText.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFullText();
    });

    this.btnFocusMode.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFocusMode();
    });

    if (this.btnSound) {
      this.btnSound.addEventListener('click', () => {
        this.toggleSound();
      });
    }

    // Menu Hamburger
    if (this.btnHamburger && this.dropdownMenu) {
      this.btnHamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        this.dropdownMenu.classList.toggle('hidden');
      });
    }

    // Zamknięcie menu po kliknięciu poza nim
    document.addEventListener('click', (e) => {
      if (this.dropdownMenu && !this.dropdownMenu.classList.contains('hidden')) {
        if (!e.target.closest('#dropdown-menu') && !e.target.closest('#btn-hamburger')) {
          this.dropdownMenu.classList.add('hidden');
        }
      }
    });

    // Pełny ekran / powiększenie widoku z menu
    if (this.menuBtnFullscreen) {
      this.menuBtnFullscreen.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
        this.toggleFullscreen();
      });
    }

    // Ukrycie nagłówka dla pełnej kontemplacji
    if (this.menuBtnHideHeader) {
      this.menuBtnHideHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
        if (this.mainTopBar) this.mainTopBar.classList.add('header-hidden');
        if (this.btnShowHeader) this.btnShowHeader.classList.remove('hidden');
      });
    }

    // Przywrócenie ukrytego nagłówka
    if (this.btnShowHeader) {
      this.btnShowHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.mainTopBar) this.mainTopBar.classList.remove('header-hidden');
        this.btnShowHeader.classList.add('hidden');
      });
    }

    // Schemat z menu
    if (this.menuBtnSchema) {
      this.menuBtnSchema.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
        this.openSchemaModal();
      });
    }

    // Pobierz z menu
    if (this.menuBtnInstall) {
      this.menuBtnInstall.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
        this.openInstallModal();
      });
    }

    // Restart z menu
    if (this.menuBtnRestart) {
      this.menuBtnRestart.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
        if (confirm('Czy chcesz rozpocząć Koronkę od początku?')) {
          this.stopAutoplay();
          this.goToStep(0);
        }
      });
    }

    // Modale
    if (this.btnCloseModal) {
      this.btnCloseModal.addEventListener('click', () => {
        this.closeSchemaModal();
      });
    }

    if (this.modalSchema) {
      this.modalSchema.addEventListener('click', (e) => {
        if (e.target === this.modalSchema) {
          this.closeSchemaModal();
        }
      });
    }

    if (this.btnInstall) {
      this.btnInstall.addEventListener('click', () => {
        this.openInstallModal();
      });
    }

    if (this.btnCloseInstallModal) {
      this.btnCloseInstallModal.addEventListener('click', () => {
        this.closeInstallModal();
      });
    }

    if (this.modalInstall) {
      this.modalInstall.addEventListener('click', (e) => {
        if (e.target === this.modalInstall) {
          this.closeInstallModal();
        }
      });
    }

    // Modal: Mapa Pielgrzymki
    if (this.btnMap) {
      this.btnMap.addEventListener('click', () => {
        this.openMapModal();
      });
    }

    if (this.menuBtnMap) {
      this.menuBtnMap.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
        this.openMapModal();
      });
    }

    if (this.btnCloseMapModal) {
      this.btnCloseMapModal.addEventListener('click', () => {
        this.closeMapModal();
      });
    }

    if (this.modalMap) {
      this.modalMap.addEventListener('click', (e) => {
        if (e.target === this.modalMap) {
          this.closeMapModal();
        }
      });
    }

    this.tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        const targetId = tabBtn.getAttribute('data-tab');
        this.tabBtns.forEach((b) => b.classList.remove('active'));
        this.tabContents.forEach((c) => c.classList.remove('active'));
        tabBtn.classList.add('active');
        const targetContent = document.getElementById(targetId);
        if (targetContent) targetContent.classList.add('active');
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        this.handleUserAdvance();
      } else if (e.key === 'ArrowLeft') {
        this.prevStep();
      } else if (e.key === 'Escape') {
        this.closeSchemaModal();
        this.closeInstallModal();
        this.closeMapModal();
        if (this.dropdownMenu) this.dropdownMenu.classList.add('hidden');
      }
    });
  }

bindBeadClicks() {
    this.svgBeads.forEach((beadEl) => {
      beadEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const stepIdx = parseInt(beadEl.getAttribute('data-step'), 10);
        if (!isNaN(stepIdx)) {
          if (this.speech.isSpeaking) {
            this.speech.stop();
          }
          this.goToStep(stepIdx);
        }
      });
    });
  }

  bindTouchGestures() {
    let startX = 0;
    let startY = 0;
    let startTime = 0;

    this.prayerTapArea.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startTime = Date.now();
      }
    }, { passive: true });

    this.prayerTapArea.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1) {
        const diffX = e.changedTouches[0].clientX - startX;
        const diffY = e.changedTouches[0].clientY - startY;
        const elapsed = Date.now() - startTime;
        const absDiffX = Math.abs(diffX);
        const absDiffY = Math.abs(diffY);

        if (absDiffX > 45 && absDiffX > absDiffY && elapsed < 600) {
          if (diffX < 0) {
            this.handleUserAdvance();
          } else {
            this.prevStep();
          }
          return;
        }

        if (absDiffX < 15 && absDiffY < 15) {
          // Kliknięto w pusty obszar obrazu
          if (e.target.closest('.bead-item')) return;
          this.handleUserAdvance();
        }
      }
    }, { passive: true });

    this.prayerTapArea.addEventListener('click', (e) => {
      if (e.target.closest('.modal-card') || e.target.closest('.bead-item')) return;
      this.handleUserAdvance();
    });
  }

  handleUserAdvance() {
    if (this.speech.isSpeaking) {
      this.speech.stop();
    }
    this.nextStep();
  }

  nextStep() {
    if (this.currentStep < PRAYER_STEPS.length - 1) {
      this.goToStep(this.currentStep + 1);
    } else {
      this.stopAutoplay();
      this.triggerHaptic('finish');
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      if (this.speech.isSpeaking) {
        this.speech.stop();
      }
      this.goToStep(this.currentStep - 1);
    }
  }

  goToStep(index) {
    if (this.autoplayTimeout) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = null;
    }

    const prevStep = this.currentStep;
    this.currentStep = Math.max(0, Math.min(index, PRAYER_STEPS.length - 1));
    const step = PRAYER_STEPS[this.currentStep];
    const prevStepObj = PRAYER_STEPS[prevStep];

    // Sprawdzenie zakończenia dziesiątki:
    // Przejście z 10. paciorka danej dziesiątki (beadIndex === 10) do kolejnego kroku
    const isDecadeFinished = prevStepObj && 
      prevStepObj.decade >= 1 && 
      prevStepObj.decade <= 5 && 
      prevStepObj.beadIndex === 10 && 
      (step.beadIndex === 0 || step.decade > prevStepObj.decade);

    if (isDecadeFinished) {
      // Zgodnie z życzeniem użytkownika: "Po ukończeniu każdej dziesiątki zamiast dźwięku który jest za głośny lepiej jak pojawią się lekkie wibracje."
      this.triggerHaptic('decade-finish');
    } else {
      // Przy przełączaniu na poszczególne paciorki: lekka wibracja
      this.triggerHaptic(step.type);
    }

    this.renderWithTransition();

    if (this.isAutoplayActive) {
      this.playCurrentStepAudio();
    }
  }

  /**
   * System haptyczny (wibracje):
   * - Po ukończeniu każdej dziesiątki: wyraźne podwójne wibracje (bez głośnego dźwięku)
   * - Przy każdym paciorku: lekki impuls sygnalizujący postęp
   */
  triggerHaptic(type) {
    if (!('vibrate' in navigator)) return;
    try {
      if (type === 'decade-finish') {
        // Zasygnalizowanie ukończenia dziesiątki: przyjemny, podwójny impuls
        navigator.vibrate([45, 60, 45]);
      } else if (type === 'large' || type === 'cross') {
        navigator.vibrate([30, 40, 30]);
      } else if (type === 'finish') {
        navigator.vibrate([50, 60, 50, 60, 100]);
      } else {
        // Każdy zwykły paciorek: lekka, dyskretna wibracja
        navigator.vibrate(22);
      }
    } catch (_) {}
  }

  toggleFullText() {
    this.isFullTextOpen = !this.isFullTextOpen;
    if (this.isFullTextOpen) {
      this.prayerFull.classList.remove('hidden');
      this.btnToggleText.classList.add('expanded');
    } else {
      this.prayerFull.classList.add('hidden');
      this.btnToggleText.classList.remove('expanded');
    }
  }

  toggleFocusMode() {
    this.isFocusModeActive = !this.isFocusModeActive;
    if (this.isFocusModeActive) {
      this.prayerCard.classList.add('focus-hidden');
      this.btnFocusMode.classList.add('active');
      this.btnFocusMode.setAttribute('title', 'Pokaż tekst modlitwy');
      this.btnFocusMode.setAttribute('aria-label', 'Pokaż tekst');
      if (this.prayerShort) this.prayerShort.style.display = 'none';
      if (this.prayerFull) this.prayerFull.style.display = 'none';
      if (this.iconEyeOpen && this.iconEyeClosed) {
        this.iconEyeOpen.classList.add('hidden');
        this.iconEyeClosed.classList.remove('hidden');
      }
    } else {
      this.prayerCard.classList.remove('focus-hidden');
      this.btnFocusMode.classList.remove('active');
      this.btnFocusMode.setAttribute('title', 'Ukryj tekst modlitwy (tryb skupienia)');
      this.btnFocusMode.setAttribute('aria-label', 'Ukryj tekst');
      if (this.prayerShort) this.prayerShort.style.display = '';
      if (this.isFullTextOpen && this.prayerFull) {
        this.prayerFull.style.display = '';
        this.prayerFull.classList.remove('hidden');
      } else if (this.prayerFull) {
        this.prayerFull.style.display = 'none';
        this.prayerFull.classList.add('hidden');
      }
      if (this.iconEyeOpen && this.iconEyeClosed) {
        this.iconEyeOpen.classList.remove('hidden');
        this.iconEyeClosed.classList.add('hidden');
      }
    }
  }

  toggleAutoplay() {
    if (this.isAutoplayActive) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }

  startAutoplay() {
    this.isAutoplayActive = true;
    if (this.autoplayTimeout) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = null;
    }
    this.btnAutoplay.classList.add('playing');
    this.iconPlay.classList.add('hidden');
    this.iconPause.classList.remove('hidden');
    this.chime.initContext();

    this.playCurrentStepAudio();
  }

  stopAutoplay() {
    this.isAutoplayActive = false;
    if (this.autoplayTimeout) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = null;
    }
    this.btnAutoplay.classList.remove('playing');
    this.iconPlay.classList.remove('hidden');
    this.iconPause.classList.add('hidden');
    this.speech.stop();
  }

  playCurrentStepAudio() {
    if (!this.isAutoplayActive) return;

    if (this.autoplayTimeout) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = null;
    }

    const step = PRAYER_STEPS[this.currentStep];
    
    if (this.isMuted) {
      const waitTime = step.type === 'small' ? 3200 : 6500;
      this.autoplayTimeout = setTimeout(() => {
        if (this.isAutoplayActive) {
          this.nextStep();
        }
      }, waitTime);
      return;
    }

    this.speech.speak(step.speechText, () => {
      if (!this.isAutoplayActive) return;

      const pauseDuration = step.type === 'small' ? 1000 : 1800;
      this.autoplayTimeout = setTimeout(() => {
        if (this.isAutoplayActive) {
          this.nextStep();
        }
      }, pauseDuration);
    });
  }

  onSpeechStart() {
    if (this.voiceWave) {
      this.voiceWave.classList.remove('hidden');
    }
  }

  onSpeechEnd() {
    if (this.voiceWave) {
      this.voiceWave.classList.add('hidden');
    }
  }

  toggleSound() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.iconSoundOn.classList.add('hidden');
      this.iconSoundOff.classList.remove('hidden');
      this.speech.stop();
    } else {
      this.iconSoundOn.classList.remove('hidden');
      this.iconSoundOff.classList.add('hidden');
      this.chime.initContext();
      if (this.isAutoplayActive) {
        this.playCurrentStepAudio();
      }
    }
  }

  toggleFullscreen() {
    // 1. Zwiększenie widoku w kontenerze aplikacji (działa na desktopie, tablecie i telefonie)
    if (this.appContainer) {
      this.appContainer.classList.toggle('expanded-view');
    }

    // 2. Natywny tryb pełnoekranowy przeglądarki
    try {
      const isFull = document.fullscreenElement || document.webkitFullscreenElement;
      if (!isFull) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    } catch (_) {}
  }

  openSchemaModal() {
    this.modalSchema.classList.remove('hidden');
  }

  closeSchemaModal() {
    this.modalSchema.classList.add('hidden');
  }

  checkStandaloneMode() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         window.navigator.standalone === true;
    if (isStandalone && this.pwaAlreadyInstalledBox) {
      this.pwaAlreadyInstalledBox.classList.remove('hidden');
    }
  }

  openInstallModal() {
    this.checkStandaloneMode();
    if (this.modalInstall) this.modalInstall.classList.remove('hidden');
  }

  closeInstallModal() {
    if (this.modalInstall) this.modalInstall.classList.add('hidden');
  }

  openMapModal() {
    if (this.modalMap) this.modalMap.classList.remove('hidden');
  }

  closeMapModal() {
    if (this.modalMap) this.modalMap.classList.add('hidden');
  }

  renderWithTransition() {
    if (this.isFocusModeActive) {
      this.render();
      return;
    }
    this.prayerShort.style.opacity = '0.3';
    setTimeout(() => {
      this.render();
      this.prayerShort.style.opacity = '1';
    }, 120);
  }

  render() {
    const step = PRAYER_STEPS[this.currentStep];
    
    // Tytuł i licznik
    this.prayerStepBadge.textContent = `${step.part} • ${this.currentStep + 1} / ${PRAYER_STEPS.length}`;
    this.prayerShort.textContent = step.shortText;
    this.prayerFullText.textContent = step.fullText;

    if (this.isFocusModeActive) {
      if (this.prayerShort) this.prayerShort.style.display = 'none';
      if (this.prayerFull) this.prayerFull.style.display = 'none';
    } else {
      if (this.prayerShort) this.prayerShort.style.display = '';
    }

    // Przycisk "Wstecz" (nieaktywny tylko na 1. kroku)
    this.btnPrev.style.opacity = this.currentStep === 0 ? '0.3' : '1';
    this.btnPrev.style.pointerEvents = this.currentStep === 0 ? 'none' : 'auto';

    // Aktualizacja paciorków w schemacie serca SVG
    this.renderHeartRosary(step);
  }

  /**
   * Aktualizuje schemat serca:
   * - Przesuwa aureolę pod aktywny paciorek
   * - Zmienia kolory paciorków (odmówione -> złote, bieżący -> błękitno-biały z aureolą, pozostałe -> czerwone/niebieskie)
   */
  renderHeartRosary(step) {
    if (!this.svgBeads || this.svgBeads.length === 0) return;

    // Przesunięcie aureoli aktywnego paciorka
    const activeEl = document.getElementById(step.beadId);
    if (activeEl) {
      const transform = activeEl.getAttribute('transform');
      if (transform) {
        const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
        if (match) {
          const cx = parseFloat(match[1]);
          const cy = parseFloat(match[2]);
          if (this.haloOuter) {
            this.haloOuter.setAttribute('cx', cx);
            this.haloOuter.setAttribute('cy', cy);
          }
          if (this.haloInner) {
            this.haloInner.setAttribute('cx', cx);
            this.haloInner.setAttribute('cy', cy);
          }
        }
      }
    }

    // Aktualizacja stanów paciorków
    this.svgBeads.forEach((beadEl) => {
      const beadStep = parseInt(beadEl.getAttribute('data-step'), 10);
      beadEl.classList.remove('completed', 'active', 'pending');

      if (beadEl.id === step.beadId) {
        beadEl.classList.add('active');
      } else if (beadStep < this.currentStep) {
        beadEl.classList.add('completed');
      } else {
        beadEl.classList.add('pending');
      }
    });
  }
}

// Inicjalizacja aplikacji po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
  window.app = new KoronkaApp();
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.update();
    }).catch(() => {});
  }

  let deferredInstallPrompt = null;
  const pwaQuickInstallBox = document.getElementById('pwa-quick-install-box');
  const btnTriggerPwa = document.getElementById('btn-trigger-pwa');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (pwaQuickInstallBox) {
      pwaQuickInstallBox.classList.remove('hidden');
    }
  });

  if (btnTriggerPwa) {
    btnTriggerPwa.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
          if (pwaQuickInstallBox) pwaQuickInstallBox.classList.add('hidden');
        }
        deferredInstallPrompt = null;
      }
    });
  }

  window.addEventListener('appinstalled', () => {
    if (pwaQuickInstallBox) pwaQuickInstallBox.classList.add('hidden');
    const alreadyInstalledBox = document.getElementById('pwa-already-installed-box');
    if (alreadyInstalledBox) alreadyInstalledBox.classList.remove('hidden');
    deferredInstallPrompt = null;
  });
});
