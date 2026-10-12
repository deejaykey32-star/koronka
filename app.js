/**
 * Koronka do Miłosierdzia Bożego 2.0
 * Zgodna z wytycznymi nabożeństwa, imprimatur Kurii Opolskiej (abbaojcze.pl)
 * oraz wizerunkiem wileńskim Kazimirowskiego (1934).
 */

'use strict';

// ========================================================
// 1. DANE KORONKI DO MIŁOSIERDZIA BOŻEGO (DOKŁADNIE 61 KROKÓW)
// ========================================================
function generateDivineMercySteps() {
  const steps = [];

  // Krok 1: Wzbudzenie intencji & Znak Krzyża
  steps.push({
    stepIndex: 1,
    part: 'Wprowadzenie',
    title: 'Wzbudzenie intencji & Znak Krzyża',
    shortText: '+ W imię Ojca i Syna, i Ducha Świętego. Amen.',
    fullText: 'Na początku – wzbudzić intencję. Uczyń znak krzyża: W imię Ojca i Syna, i Ducha Świętego. Amen.',
    speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    type: 'cross',
    decade: 0,
    beadNumber: 1,
    beadId: 'bead-cross'
  });

  // Krok 2: Duży niebieski paciorek na początku różańca (Ojcze nasz)
  steps.push({
    stepIndex: 2,
    part: 'Modlitwy wstępne',
    title: 'Modlitwa Pańska (Duży paciorek)',
    shortText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje...',
    fullText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj i odpuść nam nasze winy jako i my odpuszczamy naszym winowajcom i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
    speechText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj i odpuść nam nasze winy jako i my odpuszczamy naszym winowajcom i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.',
    type: 'large',
    decade: 0,
    beadNumber: 2,
    beadId: 'bead-stem-large'
  });

  // Krok 3: Pierwszy mniejszy czerwony paciorek (Zdrowaś Maryjo)
  steps.push({
    stepIndex: 3,
    part: 'Modlitwy wstępne',
    title: 'Pozdrowienie Anielskie (Paciorek 1/3)',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.',
    speechText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.',
    type: 'small',
    decade: 0,
    beadNumber: 3,
    beadId: 'bead-stem-red-1'
  });

  // Krok 4: Drugi mniejszy czerwony paciorek (Wierzę w Boga)
  steps.push({
    stepIndex: 4,
    part: 'Modlitwy wstępne',
    title: 'Skład Apostolski (Paciorek 2/3)',
    shortText: 'Wierzę w Boga, Ojca wszechmogącego...',
    fullText: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi, i w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
    speechText: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi, i w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.',
    type: 'small',
    decade: 0,
    beadNumber: 4,
    beadId: 'bead-stem-red-2'
  });

  // 5 dziesiątek (Kroki 5–59)
  let currentStep = 5;
  for (let d = 1; d <= 5; d++) {
    let largeBeadId = 'bead-connector';
    if (d === 2) largeBeadId = 'bead-large-2';
    else if (d === 3) largeBeadId = 'bead-large-3';
    else if (d === 4) largeBeadId = 'bead-large-4';
    else if (d === 5) largeBeadId = 'bead-large-5';

    // Duży paciorek: Ojcze Przedwieczny (1 raz)
    steps.push({
      stepIndex: currentStep++,
      part: `Dziesiątka ${d} z 5`,
      title: `Ojcze Przedwieczny (${d}. dziesiątka)`,
      shortText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew...',
      fullText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.',
      speechText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.',
      type: 'large',
      decade: d,
      beadNumber: 0,
      beadId: largeBeadId
    });

    // 10 małych paciorków: Dla Jego bolesnej męki (10 razy)
    for (let b = 1; b <= 10; b++) {
      steps.push({
        stepIndex: currentStep++,
        part: `Dziesiątka ${d} · ${b} z 10`,
        title: `Dla Jego bolesnej męki (${b}/10)`,
        shortText: 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.',
        fullText: 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.',
        speechText: 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.',
        type: 'small',
        decade: d,
        beadNumber: b,
        beadId: `bead-dec${d}-${b}`
      });
    }
  }

  // Krok 60: Na zakończenie (3 razy) - Święty Boże
  steps.push({
    stepIndex: 60,
    part: 'Zakończenie',
    title: 'Święty Boże (3 razy)',
    shortText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny...',
    fullText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem. (odmawia się 3 razy)',
    speechText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem. Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem. Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem.',
    type: 'holyGod',
    decade: 6,
    beadNumber: 1,
    beadId: 'bead-connector'
  });

  // Krok 61: Na koniec (3 razy) - O Krwi i Wodo + Znak Krzyża
  steps.push({
    stepIndex: 61,
    part: 'Zakończenie',
    title: 'O Krwi i Wodo (3 razy) & Znak Krzyża',
    shortText: 'O Krwi i Wodo, któraś wypłynęła z Najświętszego Serca Jezusowego...',
    fullText: 'O Krwi i Wodo, któraś wypłynęła z Najświętszego Serca Jezusowego jako zdrój miłosierdzia dla nas, ufam Tobie! (3 razy) + W imię Ojca i Syna, i Ducha Świętego. Amen.',
    speechText: 'O Krwi i Wodo, któraś wypłynęła z Najświętszego Serca Jezusowego jako zdrój miłosierdzia dla nas, ufam Tobie! O Krwi i Wodo, któraś wypłynęła z Najświętszego Serca Jezusowego jako zdrój miłosierdzia dla nas, ufam Tobie! O Krwi i Wodo, któraś wypłynęła z Najświętszego Serca Jezusowego jako zdrój miłosierdzia dla nas, ufam Tobie! W imię Ojca i Syna, i Ducha Świętego. Amen.',
    type: 'closing',
    decade: 6,
    beadNumber: 2,
    beadId: 'bead-cross'
  });

  return steps;
}

// ========================================================
// DANE MODLITWY RÓŻAŃCOWEJ (DO PRZEŁĄCZENIA KORONKA <-> RÓŻANIEC)
// ========================================================
function generateRosarySteps() {
  const steps = [];
  
  const OJCZE_NASZ_FULL = 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj i odpuść nam nasze winy jako i my odpuszczamy naszym winowajcom i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.';
  const ZDROVAS_FULL = 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.';
  const WIERZE_W_BOGA_FULL = 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi, i w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.';
  const CHWALA_OJCU_FULL = 'Chwała Ojcu i Synowi, i Duchowi Świętemu, jak była na początku, teraz i zawsze, i na wieki wieków. Amen.';
  const FATIMA_FULL = 'O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia piekielnego, zaprowadź wszystkie dusze do nieba i dopomóż szczególnie tym, którzy najbardziej potrzebują Twojego miłosierdzia.';
  const POD_TWOJA_OBRONE_FULL = 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. W imię Ojca i Syna, i Ducha Świętego. Amen.';

  // Krok 1: Krzyżyk – Znak Krzyża i pełne Wyznanie Wiary (Wierzę w Boga Ojca)
  steps.push({
    stepIndex: 1,
    part: 'Wprowadzenie',
    title: 'Znak Krzyża & Wierzę w Boga Ojca',
    shortText: '+ W imię Ojca i Syna... Wierzę w Boga Ojca...',
    fullText: '+ W imię Ojca i Syna, i Ducha Świętego. Amen.\n\n' + WIERZE_W_BOGA_FULL,
    speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen. ' + WIERZE_W_BOGA_FULL,
    type: 'cross', decade: 0, beadNumber: 1, beadId: 'bead-cross'
  });

  // Krok 2: Duży niebieski paciorek (Ojcze nasz)
  steps.push({
    stepIndex: 2,
    part: 'Modlitwy wstępne',
    title: 'Modlitwa Pańska (Ojcze nasz)',
    shortText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje...',
    fullText: OJCZE_NASZ_FULL,
    speechText: OJCZE_NASZ_FULL,
    type: 'large', decade: 0, beadNumber: 2, beadId: 'bead-stem-large'
  });

  // Krok 3: 1. mały czerwony paciorek (Zdrowaś Maryjo o wiarę)
  steps.push({
    stepIndex: 3,
    part: 'Modlitwy wstępne',
    title: 'Zdrowaś Maryjo (o cnotę Wiary)',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: ZDROVAS_FULL + ' (o przymnożenie Wiary)',
    speechText: ZDROVAS_FULL,
    type: 'small', decade: 0, beadNumber: 3, beadId: 'bead-stem-red-1'
  });

  // Krok 4: 2. mały czerwony paciorek (Zdrowaś Maryjo o nadzieję)
  steps.push({
    stepIndex: 4,
    part: 'Modlitwy wstępne',
    title: 'Zdrowaś Maryjo (o cnotę Nadziei)',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: ZDROVAS_FULL + ' (o ugruntowanie Nadziei)',
    speechText: ZDROVAS_FULL,
    type: 'small', decade: 0, beadNumber: 4, beadId: 'bead-stem-red-2'
  });

  // Krok 5: 3. mały czerwony paciorek (Zdrowaś Maryjo o miłość & Chwała Ojcu)
  steps.push({
    stepIndex: 5,
    part: 'Modlitwy wstępne',
    title: 'Zdrowaś Maryjo (o cnotę Miłości) & Chwała Ojcu',
    shortText: 'Zdrowaś Maryjo... Chwała Ojcu...',
    fullText: ZDROVAS_FULL + ' (o rozpalenie Miłości)\n\n' + CHWALA_OJCU_FULL,
    speechText: ZDROVAS_FULL + ' ' + CHWALA_OJCU_FULL,
    type: 'small', decade: 0, beadNumber: 5, beadId: 'bead-stem-red-3'
  });

  let cur = 6;
  for (let d = 1; d <= 5; d++) {
    let largeBeadId = 'bead-connector';
    if (d === 2) largeBeadId = 'bead-large-2';
    else if (d === 3) largeBeadId = 'bead-large-3';
    else if (d === 4) largeBeadId = 'bead-large-4';
    else if (d === 5) largeBeadId = 'bead-large-5';

    // Duży paciorek: Ojcze nasz
    steps.push({
      stepIndex: cur++,
      part: `Dziesiątka ${d} z 5`,
      title: `Ojcze nasz (${d}. tajemnica)`,
      shortText: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje...',
      fullText: OJCZE_NASZ_FULL,
      speechText: OJCZE_NASZ_FULL,
      type: 'large', decade: d, beadNumber: 0, beadId: largeBeadId
    });

    // 10 małych paciorków: Zdrowaś Maryjo
    for (let b = 1; b <= 10; b++) {
      steps.push({
        stepIndex: cur++,
        part: `Dziesiątka ${d} · ${b} z 10`,
        title: `Zdrowaś Maryjo (${b}/10)`,
        shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
        fullText: ZDROVAS_FULL,
        speechText: ZDROVAS_FULL,
        type: 'small', decade: d, beadNumber: b, beadId: `bead-dec${d}-${b}`
      });
    }
  }

  // Zakończenie: Chwała Ojcu & Modlitwa Fatimska
  steps.push({
    stepIndex: cur++,
    part: 'Zakończenie',
    title: 'Chwała Ojcu & Modlitwa Fatimska',
    shortText: 'Chwała Ojcu... O mój Jezu...',
    fullText: CHWALA_OJCU_FULL + '\n\n' + FATIMA_FULL,
    speechText: CHWALA_OJCU_FULL + ' ' + FATIMA_FULL,
    type: 'holyGod', decade: 6, beadNumber: 1, beadId: 'bead-connector'
  });

  // Zakończenie: Pod Twoją obronę & Znak Krzyża
  steps.push({
    stepIndex: cur++,
    part: 'Zakończenie',
    title: 'Pod Twoją obronę & Znak Krzyża',
    shortText: 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko...',
    fullText: POD_TWOJA_OBRONE_FULL,
    speechText: POD_TWOJA_OBRONE_FULL,
    type: 'closing', decade: 6, beadNumber: 2, beadId: 'bead-cross'
  });

  return steps;
}

// ========================================================
// 2. STAN APLIKACJI I USTAWIENIA
// ========================================================
const AppState = {
  mode: 'koronka', // 'koronka' lub 'rozaniec'
  steps: generateDivineMercySteps(),
  currentIndex: 0, // 0 do 60 (co daje krok 1 do 61)
  isPlaying: false,
  audioTimer: null,
  wakeLock: null,
  userIntention: '',
  counter: 0,
  settings: {
    fontSize: 20,
    pauseBetweenPrayers: 1.5,
    speechRate: 1.0,
    vibration: true,
    wakelock: true,
    mercyHourReminder: false,
    soundEnabled: true
  }
};

// ========================================================
// 3. SYNTEZATOR SAKRALNEGO DŹWIĘKU (WEB AUDIO API)
// ========================================================
class SacredChime {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playSoftBead(freq = 520, duration = 0.5) {
    if (!AppState.settings.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Ignoruj ograniczenia audio przeglądarki
    }
  }
}

const chime = new SacredChime();

// ========================================================
// 4. WIBRACJA HAPTYCZNA DLA SENIORÓW I MODLITWY W KIESZENI
// ========================================================
function triggerHaptic(duration = 25) {
  if (AppState.settings.vibration && 'vibrate' in navigator) {
    try {
      navigator.vibrate(duration);
    } catch (e) {}
  }
}

// ========================================================
// 5. BLOKADA WYGASZANIA EKRANU (SCREEN WAKE LOCK API)
// ========================================================
async function requestScreenWakeLock() {
  if (!AppState.settings.wakelock || !('wakeLock' in navigator)) return;
  try {
    if (!AppState.wakeLock) {
      AppState.wakeLock = await navigator.wakeLock.request('screen');
      AppState.wakeLock.addEventListener('release', () => {
        AppState.wakeLock = null;
      });
    }
  } catch (err) {
    console.warn('Wake Lock nie mógł zostać uzyskany:', err);
  }
}

function releaseScreenWakeLock() {
  if (AppState.wakeLock) {
    AppState.wakeLock.release().catch(() => {});
    AppState.wakeLock = null;
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && AppState.settings.wakelock && AppState.currentIndex < 60) {
    requestScreenWakeLock();
  }
});

// ========================================================
// 6. SYNTEZA MOWY LEKTORA Z PODŚWIETLANIEM SŁÓW
// ========================================================
class PrayerSpeaker {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voice = null;
    this.currentUtterance = null;
    this.loadVoices();
  }

  loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    this.voice = voices.find(v => v.lang.startsWith('pl') || v.lang.includes('PL')) || voices[0] || null;
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => {
        const vList = this.synth.getVoices();
        this.voice = vList.find(v => v.lang.startsWith('pl') || v.lang.includes('PL')) || vList[0] || null;
      };
    }
  }

  speak(text, onEndCallback) {
    this.stop();
    if (!AppState.settings.soundEnabled || !this.synth) {
      if (onEndCallback) setTimeout(onEndCallback, 1500);
      return;
    }

    const textContainer = document.getElementById('prayer-text');
    const words = text.split(' ');
    textContainer.innerHTML = words.map((w, idx) => `<span id="word-${idx}">${w}</span>`).join(' ');

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pl-PL';
    if (this.voice) utterance.voice = this.voice;
    utterance.rate = AppState.settings.speechRate;
    utterance.pitch = 0.95;

    let wordIdx = 0;
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const prev = document.querySelector('.highlight-spoken');
        if (prev) prev.classList.remove('highlight-spoken');
        const curr = document.getElementById(`word-${wordIdx}`);
        if (curr) {
          curr.classList.add('highlight-spoken');
          wordIdx++;
        }
      }
    };

    utterance.onend = () => {
      const prev = document.querySelector('.highlight-spoken');
      if (prev) prev.classList.remove('highlight-spoken');
      this.currentUtterance = null;
      document.getElementById('voice-wave').classList.add('hidden');
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      document.getElementById('voice-wave').classList.add('hidden');
      if (onEndCallback) onEndCallback();
    };

    this.currentUtterance = utterance;
    document.getElementById('voice-wave').classList.remove('hidden');
    this.synth.speak(utterance);
    updateMediaSession();
  }

  stop() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
    document.getElementById('voice-wave').classList.add('hidden');
    const prev = document.querySelector('.highlight-spoken');
    if (prev) prev.classList.remove('highlight-spoken');
  }
}

const speaker = new PrayerSpeaker();

// ========================================================
// 7. MEDIA SESSION API (STEROWANIE Z EKRANU BLOKADY)
// ========================================================
function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const curStep = AppState.steps[AppState.currentIndex];
  const modeTitle = AppState.mode === 'koronka' ? 'Koronka do Miłosierdzia Bożego' : 'Różaniec Święty';

  navigator.mediaSession.metadata = new MediaMetadata({
    title: curStep.title,
    artist: modeTitle,
    album: 'abbaojcze.pl',
    artwork: [
      { src: 'assets/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'assets/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  });

  navigator.mediaSession.setActionHandler('play', () => startAutoplay());
  navigator.mediaSession.setActionHandler('pause', () => stopAutoplay());
  navigator.mediaSession.setActionHandler('nexttrack', () => goToNextStep());
  navigator.mediaSession.setActionHandler('previoustrack', () => goToPrevStep());
}

// ========================================================
// 8. OBSŁUGA SCHEMATU SERCA I AKTUALIZACJA UI
// ========================================================
function updateUI() {
  const step = AppState.steps[AppState.currentIndex];
  if (!step) return;

  // 1. Aktualizacja wskaźnika postępu
  const progressIndicator = document.getElementById('prayer-progress-indicator');
  const total = AppState.steps.length;
  progressIndicator.textContent = `${step.part} · Krok ${step.stepIndex} z ${total}`;

  // 2. Aktualizacja tekstu modlitwy
  const titleEl = document.getElementById('prayer-title');
  const textEl = document.getElementById('prayer-text');
  titleEl.textContent = step.title;
  textEl.textContent = step.fullText;

  // 3. Sprawdzenie intencji
  const intentionBox = document.getElementById('prayer-intention-box');
  const intentionDisplay = document.getElementById('prayer-intention-display');
  if (AppState.userIntention && AppState.currentIndex === 0) {
    intentionDisplay.textContent = AppState.userIntention;
    intentionBox.classList.remove('hidden');
  } else {
    intentionBox.classList.add('hidden');
  }

  // 4. Synchronizacja paciorków w schemacie serca SVG
  updateRosaryBeadsVisuals(step);

  // 5. Zapis stanu do localStorage
  saveState();
}

function updateRosaryBeadsVisuals(currentStep) {
  const currentBeadId = currentStep.beadId;
  const allBeadElements = document.querySelectorAll('.bead-item');
  const haloGroup = document.getElementById('active-halo-group');

  // Wyczyść klasy
  allBeadElements.forEach(el => {
    const beadStep = parseInt(el.getAttribute('data-step') || '0', 10);
    el.classList.remove('active');

    // 5. Paciorki odmówione: przygaszone perłowo
    if (beadStep < currentStep.stepIndex && el.id !== currentBeadId) {
      el.classList.add('completed');
    } else {
      el.classList.remove('completed');
    }
  });

  // Wyróżnij bieżący paciorek
  const targetBeadEl = document.getElementById(currentBeadId);
  if (targetBeadEl) {
    targetBeadEl.classList.add('active');
    targetBeadEl.classList.remove('completed');

    // Pozycjonuj aureolę
    const transformAttr = targetBeadEl.getAttribute('transform');
    if (transformAttr && haloGroup) {
      const match = transformAttr.match(/translate\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)/);
      if (match) {
        haloGroup.setAttribute('transform', `translate(${match[1]}, ${match[2]})`);
        haloGroup.style.display = 'block';
      }
    }
  } else if (haloGroup) {
    haloGroup.style.display = 'none';
  }
}

// ========================================================
// 9. LOGIKA PRZEJŚĆ I NAWIGACJI (KROK PO KROKU)
// ========================================================
function goToStep(index, fromAutoplay = false) {
  if (index < 0) index = 0;
  if (index >= AppState.steps.length) {
    handlePrayerCompleted();
    return;
  }

  AppState.currentIndex = index;
  updateUI();
  triggerHaptic(20);
  chime.playSoftBead(stepFrequency(AppState.steps[index]));

  if (AppState.isPlaying && !fromAutoplay) {
    stopAutoplay();
  }

  if (AppState.isPlaying) {
    const textToSpeak = AppState.steps[index].speechText || AppState.steps[index].fullText;
    speaker.speak(textToSpeak, () => {
      if (AppState.isPlaying) {
        AppState.audioTimer = setTimeout(() => {
          goToNextStep(true);
        }, AppState.settings.pauseBetweenPrayers * 1000);
      }
    });
  }
}

function stepFrequency(step) {
  if (step.type === 'cross') return 440;
  if (step.type === 'large') return 587;
  return 660;
}

function goToNextStep(fromAutoplay = false) {
  if (AppState.currentIndex < AppState.steps.length - 1) {
    goToStep(AppState.currentIndex + 1, fromAutoplay);
  } else {
    handlePrayerCompleted();
  }
}

function goToPrevStep() {
  if (AppState.currentIndex > 0) {
    goToStep(AppState.currentIndex - 1);
  }
}

function handlePrayerCompleted() {
  stopAutoplay();
  releaseScreenWakeLock();
  AppState.counter++;
  localStorage.setItem('koronka_counter', AppState.counter.toString());
  document.getElementById('completion-counter-val').textContent = AppState.counter;
  document.getElementById('settings-counter-display').textContent = AppState.counter;

  // Wyświetl godny, prosty komunikat zakończenia
  document.getElementById('modal-completion').classList.remove('hidden');
}

// ========================================================
// 10. AUTOODTWARZANIE (LEKTOR AUDIO)
// ========================================================
function startAutoplay() {
  AppState.isPlaying = true;
  document.getElementById('btn-autoplay').classList.add('playing');
  document.getElementById('icon-play').classList.add('hidden');
  document.getElementById('icon-pause').classList.remove('hidden');
  requestScreenWakeLock();

  const currentStep = AppState.steps[AppState.currentIndex];
  const textToSpeak = currentStep.speechText || currentStep.fullText;
  speaker.speak(textToSpeak, () => {
    if (AppState.isPlaying) {
      AppState.audioTimer = setTimeout(() => {
        goToNextStep(true);
      }, AppState.settings.pauseBetweenPrayers * 1000);
    }
  });
}

function stopAutoplay() {
  AppState.isPlaying = false;
  if (AppState.audioTimer) {
    clearTimeout(AppState.audioTimer);
    AppState.audioTimer = null;
  }
  speaker.stop();
  document.getElementById('btn-autoplay').classList.remove('playing');
  document.getElementById('icon-play').classList.remove('hidden');
  document.getElementById('icon-pause').classList.add('hidden');
}

function toggleAutoplay() {
  if (AppState.isPlaying) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

// ========================================================
// 11. PRZEŁĄCZANIE TRYBU: KORONKA <-> RÓŻANIEC
// ========================================================
function switchMode(newMode) {
  AppState.mode = newMode;
  stopAutoplay();

  const titleEl = document.getElementById('app-title-text');
  const modeLabel = document.getElementById('mode-label');
  const inscription = document.getElementById('sacred-inscription');
  const imgJesus = document.getElementById('holy-image-jesus');
  const imgMary = document.getElementById('holy-image-mary');

  if (newMode === 'rozaniec') {
    AppState.steps = generateRosarySteps();
    titleEl.textContent = 'Różaniec';
    modeLabel.textContent = 'Koronka';
    inscription.textContent = 'KRÓLOWO POKOJU, MÓDL SIĘ ZA NAMI';
    imgJesus.classList.add('hidden');
    imgMary.classList.remove('hidden');
  } else {
    AppState.steps = generateDivineMercySteps();
    titleEl.textContent = 'Koronka';
    modeLabel.textContent = 'Różaniec';
    inscription.textContent = 'JEZU, UFAM TOBIE';
    imgJesus.classList.remove('hidden');
    imgMary.classList.add('hidden');
  }

  AppState.currentIndex = 0;
  updateUI();
  localStorage.setItem('koronka_app_mode', newMode);
}

// ========================================================
// 12. PAMIĘĆ LOKALNA (ZAPAMIĘTYWANIE POSTĘPU I WZNAWIANIE)
// ========================================================
function saveState() {
  try {
    localStorage.setItem('koronka_saved_index', AppState.currentIndex.toString());
    localStorage.setItem('koronka_app_mode', AppState.mode);
    localStorage.setItem('koronka_timestamp', Date.now().toString());
  } catch (e) {}
}

function loadState() {
  try {
    // 1. Licznik
    const savedCounter = localStorage.getItem('koronka_counter');
    if (savedCounter) {
      AppState.counter = parseInt(savedCounter, 10) || 0;
      document.getElementById('settings-counter-display').textContent = AppState.counter;
    }

    // 2. Intencja
    const savedIntention = localStorage.getItem('koronka_intention');
    if (savedIntention) {
      AppState.userIntention = savedIntention;
      document.getElementById('intention-input').value = savedIntention;
    }

    // 3. Ustawienia
    const savedSettings = localStorage.getItem('koronka_settings');
    if (savedSettings) {
      AppState.settings = Object.assign(AppState.settings, JSON.parse(savedSettings));
      applySettingsToUI();
    }

    // 4. Tryb
    const savedMode = localStorage.getItem('koronka_app_mode');
    if (savedMode && savedMode !== AppState.mode) {
      switchMode(savedMode);
    }

    // 5. Zapamiętany krok
    const savedIndex = localStorage.getItem('koronka_saved_index');
    if (savedIndex) {
      const idx = parseInt(savedIndex, 10);
      if (idx > 0 && idx < AppState.steps.length - 1) {
        const resumeBanner = document.getElementById('resume-banner');
        document.getElementById('resume-step-text').textContent = `Krok ${idx + 1} z ${AppState.steps.length}`;
        resumeBanner.classList.remove('hidden');
      }
    }
  } catch (e) {}
}

function applySettingsToUI() {
  // Czcionka
  document.documentElement.style.setProperty('--prayer-font-size', `${AppState.settings.fontSize}px`);
  document.getElementById('font-size-val').textContent = `${AppState.settings.fontSize} sp`;
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.size, 10) === AppState.settings.fontSize);
  });

  // Pauza i tempo
  document.getElementById('pause-slider').value = AppState.settings.pauseBetweenPrayers;
  document.getElementById('pause-val').textContent = `${AppState.settings.pauseBetweenPrayers} s`;
  document.getElementById('rate-slider').value = AppState.settings.speechRate;
  document.getElementById('rate-val').textContent = `${AppState.settings.speechRate}x`;

  // Przełączniki
  document.getElementById('toggle-vibration').checked = AppState.settings.vibration;
  document.getElementById('toggle-wakelock').checked = AppState.settings.wakelock;
  document.getElementById('toggle-mercy-hour').checked = AppState.settings.mercyHourReminder;

  // Dźwięk
  const iconOn = document.getElementById('icon-voice-on');
  const iconOff = document.getElementById('icon-voice-off');
  if (AppState.settings.soundEnabled) {
    iconOn.classList.remove('hidden');
    iconOff.classList.add('hidden');
  } else {
    iconOn.classList.add('hidden');
    iconOff.classList.remove('hidden');
  }
}

function saveSettings() {
  try {
    localStorage.setItem('koronka_settings', JSON.stringify(AppState.settings));
  } catch (e) {}
}

// ========================================================
// 13. PRZYPOMNIENIE O GODZINIE MIŁOSIERDZIA (15:00)
// ========================================================
function setupMercyHourReminder() {
  if (!AppState.settings.mercyHourReminder) return;
  if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  // Sprawdzaj co 30 sekund czy minęła 15:00
  setInterval(() => {
    if (!AppState.settings.mercyHourReminder) return;
    const now = new Date();
    if (now.getHours() === 15 && now.getMinutes() === 0 && now.getSeconds() < 35) {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Godzina Miłosierdzia (15:00)', {
          body: 'Zapraszamy do modlitwy Koronką do Miłosierdzia Bożego.',
          icon: 'assets/icon-192.png'
        });
      }
    }
  }, 30000);
}

// ========================================================
// 14. GESTY SWIPE (PRZESUNIĘCIE PALCEM DLA TELEFONÓW)
// ========================================================
function initSwipeGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  const stage = document.getElementById('prayer-stage');
  const textArea = document.getElementById('prayer-tap-text-area');

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX < 0) {
        // Swipe w lewo -> Dalej
        goToNextStep();
      } else {
        // Swipe w prawo -> Wstecz
        goToPrevStep();
      }
    }
  };

  [stage, textArea].forEach(el => {
    if (el) {
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
  });
}

// ========================================================
// 15. INICJALIZACJA I NASŁUCHIWANIE ZDARZEŃ
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateUI();
  initSwipeGestures();
  setupMercyHourReminder();
  requestScreenWakeLock();

  // 1. Kliknięcie w paciorek na schemacie serca SVG
  document.querySelectorAll('.bead-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const stepNum = parseInt(item.getAttribute('data-step') || '1', 10);
      goToStep(stepNum - 1);
    });
  });

  // 2. Kliknięcie tekstu modlitwy przechodzi dalej
  document.getElementById('prayer-tap-text-area').addEventListener('click', () => {
    goToNextStep();
  });

  // 3. Przyciski dolnego docku
  document.getElementById('btn-next').addEventListener('click', () => goToNextStep());
  document.getElementById('btn-prev').addEventListener('click', () => goToPrevStep());
  document.getElementById('btn-autoplay').addEventListener('click', () => toggleAutoplay());

  // 4. Przełącznik trybu (Koronka <-> Różaniec)
  document.getElementById('btn-switch-mode').addEventListener('click', () => {
    switchMode(AppState.mode === 'koronka' ? 'rozaniec' : 'koronka');
  });

  // 5. Przycisk dźwięku / wyciszenia
  document.getElementById('btn-audio').addEventListener('click', () => {
    AppState.settings.soundEnabled = !AppState.settings.soundEnabled;
    applySettingsToUI();
    saveSettings();
    if (!AppState.settings.soundEnabled) stopAutoplay();
  });

  // 6. Baner wznowienia
  document.getElementById('btn-resume-continue').addEventListener('click', () => {
    const savedIdx = parseInt(localStorage.getItem('koronka_saved_index') || '0', 10);
    document.getElementById('resume-banner').classList.add('hidden');
    goToStep(savedIdx);
  });

  document.getElementById('btn-resume-restart').addEventListener('click', () => {
    document.getElementById('resume-banner').classList.add('hidden');
    goToStep(0);
  });

  // 7. Modale
  const modalSettings = document.getElementById('modal-settings');
  const modalIntention = document.getElementById('modal-intention');
  const modalSchema = document.getElementById('modal-schema');
  const modalInstall = document.getElementById('modal-install');
  const modalCompletion = document.getElementById('modal-completion');

  // Otwieranie
  document.getElementById('btn-settings').addEventListener('click', () => modalSettings.classList.remove('hidden'));
  document.getElementById('btn-intention').addEventListener('click', () => modalIntention.classList.remove('hidden'));
  document.getElementById('btn-open-schema-modal').addEventListener('click', () => {
    modalSettings.classList.add('hidden');
    modalSchema.classList.remove('hidden');
  });
  document.getElementById('btn-open-intention-modal').addEventListener('click', () => {
    modalSettings.classList.add('hidden');
    modalIntention.classList.remove('hidden');
  });
  document.getElementById('btn-open-install-modal').addEventListener('click', () => {
    modalSettings.classList.add('hidden');
    modalInstall.classList.remove('hidden');
  });

  // Zamykanie
  document.getElementById('btn-close-settings').addEventListener('click', () => modalSettings.classList.add('hidden'));
  document.getElementById('btn-close-intention').addEventListener('click', () => modalIntention.classList.add('hidden'));
  document.getElementById('btn-close-schema').addEventListener('click', () => modalSchema.classList.add('hidden'));
  document.getElementById('btn-close-install').addEventListener('click', () => modalInstall.classList.add('hidden'));
  document.getElementById('btn-completion-close').addEventListener('click', () => modalCompletion.classList.add('hidden'));
  document.getElementById('btn-completion-restart').addEventListener('click', () => {
    modalCompletion.classList.add('hidden');
    goToStep(0);
  });

  // Zamknij kliknięciem w tło
  [modalSettings, modalIntention, modalSchema, modalInstall, modalCompletion].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // 8. Zmiana czcionki (20sp, 24sp, 28sp, 32sp)
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.settings.fontSize = parseInt(btn.dataset.size, 10);
      applySettingsToUI();
      saveSettings();
    });
  });

  // 9. Suwak pauzy i tempa
  document.getElementById('pause-slider').addEventListener('input', (e) => {
    AppState.settings.pauseBetweenPrayers = parseFloat(e.target.value);
    document.getElementById('pause-val').textContent = `${AppState.settings.pauseBetweenPrayers} s`;
    saveSettings();
  });

  document.getElementById('rate-slider').addEventListener('input', (e) => {
    AppState.settings.speechRate = parseFloat(e.target.value);
    document.getElementById('rate-val').textContent = `${AppState.settings.speechRate}x`;
    saveSettings();
  });

  // 10. Przełączniki
  document.getElementById('toggle-vibration').addEventListener('change', (e) => {
    AppState.settings.vibration = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-wakelock').addEventListener('change', (e) => {
    AppState.settings.wakelock = e.target.checked;
    saveSettings();
    if (e.target.checked) requestScreenWakeLock();
    else releaseScreenWakeLock();
  });

  document.getElementById('toggle-mercy-hour').addEventListener('change', (e) => {
    AppState.settings.mercyHourReminder = e.target.checked;
    saveSettings();
    if (e.target.checked) setupMercyHourReminder();
  });

  // 11. Zerowanie licznika
  document.getElementById('btn-reset-counter').addEventListener('click', () => {
    if (confirm('Czy chcesz wyzerować licznik odmówionych Koronek?')) {
      AppState.counter = 0;
      localStorage.setItem('koronka_counter', '0');
      document.getElementById('settings-counter-display').textContent = '0';
    }
  });

  // 12. Zapisywanie intencji
  document.getElementById('btn-save-intention').addEventListener('click', () => {
    AppState.userIntention = document.getElementById('intention-input').value.trim();
    localStorage.setItem('koronka_intention', AppState.userIntention);
    modalIntention.classList.add('hidden');
    updateUI();
  });

  document.getElementById('btn-clear-intention').addEventListener('click', () => {
    AppState.userIntention = '';
    document.getElementById('intention-input').value = '';
    localStorage.removeItem('koronka_intention');
    modalIntention.classList.add('hidden');
    updateUI();
  });

  // 13. Obsługa klawiatury (Spacja / Strzałki)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowRight') {
      e.preventDefault();
      goToNextStep();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      goToPrevStep();
    }
  });
});

// Rejestracja Service Worker (PWA Offline)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js?v=20').catch(() => {});
  });
}
