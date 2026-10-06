/**
 * Koronka do Miłosierdzia Bożego 2.0
 * Architektura Etapu 2 (Nawigacja gestami, koraliki, haptyka)
 * i Etapu 3 (Warstwa foniczna, synteza głosu lektora, dzwonek sakralny)
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
    shortText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    fullText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    type: 'cross',
    decade: 0,
    beadIndex: 0
  },
  {
    part: 'Modlitwy wstępne',
    title: 'Modlitwa Pańska',
    shortText: 'Ojcze nasz, któryś jest w niebie...',
    fullText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje; przyjdź królestwo Twoje; bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj; i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom; i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
    speechText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje; przyjdź królestwo Twoje; bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj; i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom; i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
    type: 'intro',
    decade: 0,
    beadIndex: 1
  },
  {
    part: 'Modlitwy wstępne',
    title: 'Pozdrowienie Anielskie',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.',
    speechText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.',
    type: 'intro',
    decade: 0,
    beadIndex: 2
  },
  {
    part: 'Modlitwy wstępne',
    title: 'Skład Apostolski',
    shortText: 'Wierzę w Boga, Ojca wszechmogącego...',
    fullText: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał; wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego; stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
    speechText: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał; wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego; stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
    type: 'intro',
    decade: 0,
    beadIndex: 3
  }
];

// Generowanie 5 dziesiątek
for (let d = 1; d <= 5; d++) {
  // Duży paciorek (Ojcze Przedwieczny)
  PRAYER_STEPS.push({
    part: `Dziesiątka ${d} z 5`,
    title: 'Ojcze Przedwieczny (duży paciorek)',
    shortText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew...',
    fullText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.',
    speechText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.',
    type: 'large',
    decade: d,
    beadIndex: 0
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
      beadIndex: b
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
    beadIndex: s
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
  beadIndex: 4
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
    beadIndex: 4 + j
  });
}

// Błogosławieństwo końcowe
PRAYER_STEPS.push({
  part: 'Zakończenie',
  title: 'Znak Krzyża',
  shortText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
  fullText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
  speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
  type: 'cross',
  decade: 6,
  beadIndex: 8
});


// ========================================================
// 2. SYNTEZATOR SAKRALNEGO DŹWIĘKU (WEB AUDIO API)
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
   * Generuje harmonijny, ciepły ton sakralnego dzwonka/gongu
   */
  playBell(freq = 587.33, duration = 2.2) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const harmonics = [1.0, 2.02, 3.01, 4.2];
      const gains = [0.4, 0.2, 0.08, 0.04];

      harmonics.forEach((mult, index) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * mult, now);

        gainNode.gain.setValueAtTime(0.001, now);
        // Szybki atak
        gainNode.gain.exponentialRampToValueAtTime(gains[index], now + 0.015);
        // Płynne, naturalne wybrzmiewanie
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
      });
    } catch (e) {
      // Ignoruj błędy audio na zablokowanych urządzeniach
    }
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
    this.sessionId = 0; // Unikalny identyfikator aktywnej sesji mowy zapobiegający wyścigom
    
    this.loadVoices();
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  }

  loadVoices() {
    if (!this.synth) return;
    try {
      const voices = this.synth.getVoices();
      // Szukanie polskiego głosu
      this.polishVoice = voices.find(v => v.lang === 'pl-PL' || v.lang === 'pl_PL')
        || voices.find(v => v.lang && v.lang.startsWith('pl'))
        || null;
    } catch (_) {}
  }

  /**
   * Dzieli długie modlitwy na naturalne części liturgiczne.
   * Zapobiega to znanemu błędowi silnika Chromium (Chrome/Edge/Android),
   * który ucina wypowiedzi trwające dłużej niż 15 sekund.
   */
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
    // Natychmiast zatrzymaj poprzednią mowę i unieważnij poprzednią sesję
    this.stop();

    if (!this.synth || !text) {
      if (onComplete) onComplete();
      return;
    }

    const currentSession = ++this.sessionId;
    const clauses = this.splitIntoClauses(text);
    let clauseIndex = 0;

    // Reset stanu syntezatora w przeglądarce
    try {
      if (this.synth.paused) {
        this.synth.resume();
      }
    } catch (_) {}

    const speakNextClause = () => {
      // Jeśli sesja została unieważniona (np. wciśnięto Pauzę lub Dalej), przerwij natychmiast
      if (this.sessionId !== currentSession) return;

      if (clauseIndex >= clauses.length) {
        this.isSpeaking = false;
        this.onEnd();
        if (onComplete && this.sessionId === currentSession) {
          onComplete();
        }
        return;
      }

      const clauseText = clauses[clauseIndex++];
      const u = new SpeechSynthesisUtterance(clauseText);
      u.lang = 'pl-PL';
      if (this.polishVoice) {
        u.voice = this.polishVoice;
      }
      u.rate = 0.84;
      u.pitch = 0.95;

      // Zabezpieczenie przed garbage-collection obiektu Utterance w silniku V8
      window._activeUtterance = u;

      u.onstart = () => {
        if (this.sessionId !== currentSession) return;
        this.isSpeaking = true;
        this.onStart();
      };

      u.onend = () => {
        if (this.sessionId !== currentSession) return;
        // Drobna pauza między zdaniami modlitwy
        setTimeout(() => {
          if (this.sessionId === currentSession) {
            speakNextClause();
          }
        }, 120);
      };

      u.onerror = (e) => {
        // Ignoruj błędy wynikające z celowego zatrzymania / pauzy
        if (e.error === 'canceled' || e.error === 'interrupted' || this.sessionId !== currentSession) {
          return;
        }
        if (this.sessionId === currentSession) {
          speakNextClause();
        }
      };

      try {
        this.synth.speak(u);
      } catch (_) {
        if (this.sessionId === currentSession) {
          speakNextClause();
        }
      }
    };

    // Krótkie opóźnienie 40ms po cancel(), aby przeglądarka zresetowała wewnętrzny bufor mowy
    setTimeout(() => {
      if (this.sessionId === currentSession) {
        speakNextClause();
      }
    }, 40);
  }

  stop() {
    this.sessionId++; // Natychmiastowe unieważnienie wszelkich oczekujących callbacków
    this.isSpeaking = false;
    window._activeUtterance = null;
    if (this.synth) {
      try {
        this.synth.cancel();
        if (this.synth.paused) {
          this.synth.resume();
        }
      } catch (_) {}
    }
    this.onEnd();
  }
}


// ========================================================
// 4. GŁÓWNA KLASA APLIKACJI KORONKI
// ========================================================
class KoronkaApp {
  constructor() {
    this.currentStep = 0;
    this.isFullTextOpen = false;
    this.isFocusModeActive = false;
    this.isAutoplayActive = false;
    this.autoplayTimeout = null;
    this.isMuted = false;

    // Inicjalizacja podsystemów
    this.chime = new SacredChimePlayer();
    this.speech = new SpeechEngine(
      () => this.onSpeechStart(),
      () => this.onSpeechEnd()
    );

    this.cacheDOMElements();
    this.bindEvents();
    this.bindTouchGestures();
    this.render();
  }

  cacheDOMElements() {
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnAutoplay = document.getElementById('btn-autoplay');
    this.btnRestart = document.getElementById('btn-restart');
    this.btnToggleText = document.getElementById('btn-toggle-text');
    this.btnFocusMode = document.getElementById('btn-focus-mode');
    this.iconEyeOpen = document.getElementById('icon-eye-open');
    this.iconEyeClosed = document.getElementById('icon-eye-closed');
    this.prayerCard = document.getElementById('prayer-card');
    this.prayerTapArea = document.getElementById('prayer-tap-area');
    
    this.beadPartTitle = document.getElementById('bead-part-title');
    this.beadCounter = document.getElementById('bead-counter');
    this.beadsBar = document.getElementById('beads-bar');
    
    this.prayerTitle = document.getElementById('prayer-title');
    this.prayerShort = document.getElementById('prayer-short');
    this.prayerFull = document.getElementById('prayer-full');
    this.prayerFullText = document.getElementById('prayer-full-text');
    this.voiceWave = document.getElementById('voice-wave');
    
    this.iconPlay = document.getElementById('icon-play');
    this.iconPause = document.getElementById('icon-pause');
    
    this.btnSound = document.getElementById('btn-sound');
    this.iconSoundOn = document.getElementById('icon-sound-on');
    this.iconSoundOff = document.getElementById('icon-sound-off');
    
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.btnSchema = document.getElementById('btn-schema');
    this.modalSchema = document.getElementById('modal-schema');
    this.btnCloseModal = document.getElementById('btn-close-modal');

    // Elementy instalacji i pobierania (PWA, Android, iOS)
    this.btnInstall = document.getElementById('btn-install');
    this.modalInstall = document.getElementById('modal-install');
    this.btnCloseInstallModal = document.getElementById('btn-close-install-modal');
    this.tabBtns = document.querySelectorAll('.platform-tabs .tab-btn');
    this.tabContents = document.querySelectorAll('#modal-install .tab-content');
    this.pwaQuickInstallBox = document.getElementById('pwa-quick-install-box');
    this.pwaAlreadyInstalledBox = document.getElementById('pwa-already-installed-box');
  }

  bindEvents() {
    // Nawigacja przyciskami
    this.btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handleUserAdvance();
    });

    this.btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevStep();
    });

    // Reset modlitwy
    this.btnRestart.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Czy chcesz rozpocząć Koronkę od początku?')) {
        this.stopAutoplay();
        this.goToStep(0);
      }
    });

    // Autoodtwarzanie (Wersja foniczna)
    this.btnAutoplay.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleAutoplay();
    });

    // Rozwijanie pełnego tekstu modlitwy
    this.btnToggleText.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFullText();
    });

    // Tryb kontemplacji (ukrycie/ściemnienie tekstu dla skupienia na wizerunku)
    this.btnFocusMode.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFocusMode();
    });

    // Dźwięk / Wyciszenie
    this.btnSound.addEventListener('click', () => {
      this.toggleSound();
    });

    // Pełny ekran
    this.btnFullscreen.addEventListener('click', () => {
      this.toggleFullscreen();
    });

    // Modal schematu edukacyjnego
    this.btnSchema.addEventListener('click', () => {
      this.openSchemaModal();
    });

    this.btnCloseModal.addEventListener('click', () => {
      this.closeSchemaModal();
    });

    this.modalSchema.addEventListener('click', (e) => {
      if (e.target === this.modalSchema) {
        this.closeSchemaModal();
      }
    });

    // Modal instalacji i pobierania aplikacji
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

    // Przełączanie zakładek w oknie instalacji
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

    // Klawiatura
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        this.handleUserAdvance();
      } else if (e.key === 'ArrowLeft') {
        this.prevStep();
      } else if (e.key === 'Escape') {
        this.closeSchemaModal();
        this.closeInstallModal();
      }
    });
  }

  /**
   * Obsługa gestów dotykowych (Swipe na telefonach i tabletach)
   */
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

        // Wykrywanie przesunięcia (Swipe)
        if (absDiffX > 45 && absDiffX > absDiffY && elapsed < 600) {
          if (diffX < 0) {
            // Swipe w lewo -> Dalej
            this.handleUserAdvance();
          } else {
            // Swipe w prawo -> Wstecz
            this.prevStep();
          }
          return;
        }

        // Zwykłe dotknięcie ekranu (Tap) bez przesunięcia -> Dalej
        if (absDiffX < 15 && absDiffY < 15) {
          this.handleUserAdvance();
        }
      }
    }, { passive: true });

    // Obsługa kliknięcia myszą na desktopie
    this.prayerTapArea.addEventListener('click', (e) => {
      // Ignoruj jeśli kliknięto w modal
      if (e.target.closest('.modal-card')) return;
      this.handleUserAdvance();
    });
  }

  handleUserAdvance() {
    // Jeśli użytkownik ręcznie przeskakuje, a lektor mówił, ucisz lektora i idź dalej
    if (this.speech.isSpeaking) {
      this.speech.stop();
    }
    this.nextStep();
  }

  nextStep() {
    if (this.currentStep < PRAYER_STEPS.length - 1) {
      this.goToStep(this.currentStep + 1);
    } else {
      // Zakończenie całej Koronki
      this.stopAutoplay();
      this.triggerHaptic('finish');
      if (!this.isMuted) {
        this.chime.playBell(587.33, 3.5);
      }
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
    // Anuluj oczekujące przejście autoodtwarzania
    if (this.autoplayTimeout) {
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = null;
    }

    this.currentStep = Math.max(0, Math.min(index, PRAYER_STEPS.length - 1));
    const step = PRAYER_STEPS[this.currentStep];

    // Haptyka i dźwięki akcentujące
    this.triggerHaptic(step.type);
    if (!this.isMuted) {
      if (step.type === 'large') {
        this.chime.playBell(440, 2.5); // Niski, uroczysty dzwonek na Ojcze Przedwieczny
      } else if (step.type === 'cross' || step.type === 'holyGod') {
        this.chime.playBell(523.25, 2.0);
      }
    }

    // Płynne odświeżenie widoku
    this.renderWithTransition();

    // Jeśli autoodtwarzanie jest włączone, zainicjuj mowę lub timer
    if (this.isAutoplayActive) {
      this.playCurrentStepAudio();
    }
  }

  triggerHaptic(type) {
    if (!('vibrate' in navigator)) return;
    try {
      if (type === 'large') {
        navigator.vibrate([40, 60, 40]);
      } else if (type === 'cross') {
        navigator.vibrate([35, 50, 35]);
      } else if (type === 'finish') {
        navigator.vibrate([60, 70, 60, 70, 110]);
      } else {
        navigator.vibrate(25); // Krótkie, delikatne tapnięcie paciorka
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
      if (this.iconEyeOpen && this.iconEyeClosed) {
        this.iconEyeOpen.classList.add('hidden');
        this.iconEyeClosed.classList.remove('hidden');
      }
    } else {
      this.prayerCard.classList.remove('focus-hidden');
      this.btnFocusMode.classList.remove('active');
      this.btnFocusMode.setAttribute('title', 'Ukryj tekst modlitwy (tryb skupienia)');
      this.btnFocusMode.setAttribute('aria-label', 'Ukryj tekst');
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
    
    // Jeśli dźwięk jest wyciszony, odczekaj stosowny czas czytania w myślach
    if (this.isMuted) {
      const waitTime = step.type === 'small' ? 3500 : 7000;
      this.autoplayTimeout = setTimeout(() => {
        if (this.isAutoplayActive) {
          this.nextStep();
        }
      }, waitTime);
      return;
    }

    // Uruchomienie lektora
    this.speech.speak(step.speechText, () => {
      // Wywołanie następuje tylko, gdy dana modlitwa została odczytana w całości
      if (!this.isAutoplayActive) return;

      const pauseDuration = step.type === 'small' ? 1200 : 2000;
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
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
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

  renderWithTransition() {
    // Płynna animacja tekstu wezwania
    this.prayerShort.classList.add('fade-out');
    setTimeout(() => {
      this.render();
      this.prayerShort.classList.remove('fade-out');
      this.prayerShort.classList.add('fade-in');
      setTimeout(() => {
        this.prayerShort.classList.remove('fade-in');
      }, 200);
    }, 150);
  }

  render() {
    const step = PRAYER_STEPS[this.currentStep];
    
    // Tytuły i licznik
    this.beadPartTitle.textContent = step.part;
    this.beadCounter.textContent = `${this.currentStep + 1} / ${PRAYER_STEPS.length}`;
    
    // Karta modlitwy
    this.prayerTitle.textContent = step.title;
    this.prayerShort.textContent = step.shortText;
    this.prayerFullText.textContent = step.fullText;

    // Przycisk "Wstecz" (nieaktywny tylko na 1. kroku)
    this.btnPrev.style.opacity = this.currentStep === 0 ? '0.3' : '1';
    this.btnPrev.style.pointerEvents = this.currentStep === 0 ? 'none' : 'auto';

    // Renderowanie koralików (beads bar) w zależności od sekcji
    this.renderBeadsBar(step);
  }

  renderBeadsBar(step) {
    this.beadsBar.innerHTML = '';
    
    // 1. Modlitwy wstępne (4 koraliki)
    if (step.decade === 0) {
      for (let i = 0; i < 4; i++) {
        const dot = document.createElement('div');
        dot.className = 'bead-dot';
        if (i === 0) dot.classList.add('large'); // Krzyż
        if (i < this.currentStep) dot.classList.add('completed');
        if (i === this.currentStep) dot.classList.add('active');
        this.beadsBar.appendChild(dot);
      }
      return;
    }

    // 2. Dziesiątki (1 duży paciorek + 10 małych)
    if (step.decade >= 1 && step.decade <= 5) {
      // Duży paciorek (Ojcze Przedwieczny)
      const largeDot = document.createElement('div');
      largeDot.className = 'bead-dot large';
      if (step.beadIndex > 0) largeDot.classList.add('completed');
      if (step.beadIndex === 0) largeDot.classList.add('active');
      this.beadsBar.appendChild(largeDot);

      // 10 małych paciorków
      for (let i = 1; i <= 10; i++) {
        const smallDot = document.createElement('div');
        smallDot.className = 'bead-dot';
        if (i < step.beadIndex) smallDot.classList.add('completed');
        if (i === step.beadIndex) smallDot.classList.add('active');
        this.beadsBar.appendChild(smallDot);
      }
      return;
    }

    // 3. Zakończenie (3x Święty Boże + O Krwi i Wodo + 3x Jezu Ufam + Krzyż = 8 kroków)
    if (step.decade === 6) {
      for (let i = 1; i <= 8; i++) {
        const dot = document.createElement('div');
        dot.className = 'bead-dot';
        if (i === 8) dot.classList.add('large'); // Znak Krzyża
        if (i < step.beadIndex) dot.classList.add('completed');
        if (i === step.beadIndex) dot.classList.add('active');
        this.beadsBar.appendChild(dot);
      }
    }
  }
}

// Inicjalizacja aplikacji po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
  window.app = new KoronkaApp();
  
  // Rejestracja Service Workera dla trybu offline
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Obsługa instalacji aplikacji jako PWA
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

