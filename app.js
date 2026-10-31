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

  const OJCZE_NASZ_FULL = 'Ojcze nasz, któryś jest w niebie,\nświęć się imię Twoje, przyjdź królestwo Twoje,\nbądź wola Twoja jako w niebie, tak i na ziemi.\n\nChleba naszego powszedniego daj nam dzisiaj\ni odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom,\ni nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.';
  const OJCZE_NASZ_SPEECH = 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj i odpuść nam nasze winy jako i my odpuszczamy naszym winowajcom i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.';

  const ZDROVAS_FULL = 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą.\nBłogosławionaś Ty między niewiastami\ni błogosławiony owoc żywota Twojego, Jezus.\n\nŚwięta Maryjo, Matko Boża, módl się za nami grzesznymi,\nteraz i w godzinę śmierci naszej. Amen.';
  const ZDROVAS_SPEECH = 'Zdrowaś Marijo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Marijo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.';

  const WIERZE_W_BOGA_FULL = 'Wierzę w Boga, Ojca wszechmogącego,\nStworzyciela nieba i ziemi,\ni w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego,\nktóry się począł z Ducha Świętego,\nnarodził się z Maryi Panny,\numęczon pod Ponckim Piłatem,\nukrzyżowan, umarł i pogrzebion.\nZstąpił do piekieł, trzeciego dnia zmartwychwstał.\nWstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego.\nStamtąd przyjdzie sądzić żywych i umarłych.\n\nWierzę w Ducha Świętego, święty Kościół powszechny,\nświętych obcowanie, grzechów odpuszczenie,\nciała zmartwychwstanie, żywot wieczny. Amen.';
  const WIERZE_W_BOGA_SPEECH = 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi, i w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.';

  const OJCZE_PRZEDWIECZNY_FULL = 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew,\nDuszę i Bóstwo najmilszego Syna Twojego,\na Pana naszego Jezusa Chrystusa,\nna przebłaganie za grzechy nasze i całego świata.';
  const OJCZE_PRZEDWIECZNY_SPEECH = 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.';

  const BOLESNA_MEKA_FULL = 'Dla Jego bolesnej męki,\nmiej miłosierdzie dla nas i całego świata.';
  const BOLESNA_MEKA_SPEECH = 'Dla Jego bolesnej męki, miej miłosierdzie dla nas i całego świata.';

  // Krok 1: Złoty Krzyżyk – Znak Krzyża
  steps.push({
    stepIndex: 1,
    part: 'Wprowadzenie',
    title: 'Znak Krzyża',
    shortText: '+ W imię Ojca i Syna, i Ducha Świętego. Amen.',
    fullText: '+ W imię Ojca i Syna, i Ducha Świętego. Amen.',
    speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
    type: 'cross',
    decade: 0,
    beadNumber: 1,
    beadId: 'bead-cross'
  });

  // Krok 2: Pierwszy duży niebieski paciorek – Wzbudzenie intencji
  steps.push({
    stepIndex: 2,
    part: 'Modlitwy wstępne',
    title: 'Wzbudzenie intencji',
    shortText: 'Na początku — wzbudzić intencję',
    fullText: 'Na początku — wzbudzić intencję',
    speechText: 'Na początku — wzbudzić intencję.',
    type: 'large',
    decade: 0,
    beadNumber: 2,
    beadId: 'bead-stem-large'
  });

  // Krok 3: 1. mały czerwony paciorek – Modlitwa Pańska (Ojcze nasz)
  steps.push({
    stepIndex: 3,
    part: 'Modlitwy wstępne',
    title: 'Ojcze nasz',
    shortText: 'Ojcze nasz...',
    fullText: OJCZE_NASZ_FULL,
    speechText: OJCZE_NASZ_SPEECH,
    type: 'small',
    decade: 0,
    beadNumber: 3,
    beadId: 'bead-stem-red-1'
  });

  // Krok 4: 2. mały czerwony paciorek – Pozdrowienie Anielskie (Zdrowaś Maryjo)
  steps.push({
    stepIndex: 4,
    part: 'Modlitwy wstępne',
    title: 'Zdrowaś Maryjo',
    shortText: 'Zdrowaś Maryjo...',
    fullText: ZDROVAS_FULL,
    speechText: ZDROVAS_SPEECH,
    type: 'small',
    decade: 0,
    beadNumber: 4,
    beadId: 'bead-stem-red-2'
  });

  // Krok 5: 3. mały czerwony paciorek – Skład Apostolski (Wierzę w Boga)
  steps.push({
    stepIndex: 5,
    part: 'Modlitwy wstępne',
    title: 'Wierzę w Boga',
    shortText: 'Wierzę w Boga...',
    fullText: WIERZE_W_BOGA_FULL,
    speechText: WIERZE_W_BOGA_SPEECH,
    type: 'small',
    decade: 0,
    beadNumber: 5,
    beadId: 'bead-stem-red-3'
  });

  // 5 dziesiątek (Kroki 6–60)
  let currentStep = 6;
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
      shortText: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew,\nDuszę i Bóstwo najmilszego Syna Twojego,\na Pana naszego Jezusa Chrystusa,\nna przebłaganie za grzechy nasze i całego świata.',
      fullText: OJCZE_PRZEDWIECZNY_FULL,
      speechText: OJCZE_PRZEDWIECZNY_SPEECH,
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
        fullText: BOLESNA_MEKA_FULL,
        speechText: BOLESNA_MEKA_SPEECH,
        type: 'small',
        decade: d,
        beadNumber: b,
        beadId: `bead-dec${d}-${b}`
      });
    }
  }

  // Krok 61: Na zakończenie (3x) - Święty Boże
  steps.push({
    stepIndex: 61,
    part: 'Zakończenie',
    title: 'Święty Boże (3x)',
    shortText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny... (3x)',
    fullText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny,\nzmiłuj się nad nami i nad całym światem.\n(3x)',
    speechText: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem. Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem. Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem.',
    type: 'holyGod',
    decade: 6,
    beadNumber: 1,
    beadId: 'bead-connector'
  });

  // Krok 62: Zakończenie – Znak Krzyża Świętego
  steps.push({
    stepIndex: 62,
    part: 'Zakończenie',
    title: 'Znak Krzyża',
    shortText: '+ W imię Ojca i Syna, i Ducha Świętego. Amen.',
    fullText: '+ W imię Ojca i Syna, i Ducha Świętego. Amen.',
    speechText: 'W imię Ojca i Syna, i Ducha Świętego. Amen.',
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
function getRosaryMysteriesForToday() {
  const day = new Date().getDay(); // 0 = Niedziela, 1 = Poniedziałek, ..., 6 = Sobota
  if (day === 1 || day === 6) {
    return {
      name: 'Tajemnice Radosne',
      days: 'Poniedziałek i Sobota',
      items: [
        'Zwiastowanie Najświętszej Maryi Pannie',
        'Nawiedzenie świętej Elżbiety',
        'Narodzenie Pana Jezusa w Betlejem',
        'Ofiarowanie Pana Jezusa w świątyni',
        'Odnalezienie Pana Jezusa w świątyni'
      ]
    };
  } else if (day === 2 || day === 5) {
    return {
      name: 'Tajemnice Bolesne',
      days: 'Wtorek i Piątek',
      items: [
        'Modlitwa Pana Jezusa w Ogrójcu',
        'Biczowanie Pana Jezusa',
        'Cierniem ukoronowanie Pana Jezusa',
        'Dźwiganie krzyża na Kalwarię',
        'Ukrzyżowanie i śmierć Pana Jezusa'
      ]
    };
  } else if (day === 4) {
    return {
      name: 'Tajemnice Światła',
      days: 'Czwartek',
      items: [
        'Chrzest Pana Jezusa w Jordanie',
        'Objawienie siebie na weselu w Kanie Galilejskiej',
        'Głoszenie Królestwa Bożego i wzywanie do nawrócenia',
        'Przemienienie na Górze Tabor',
        'Ustanowienie Najświętszej Eucharystii'
      ]
    };
  } else {
    return {
      name: 'Tajemnice Chwalebne',
      days: 'Środa i Niedziela',
      items: [
        'Zmartwychwstanie Pana Jezusa',
        'Wniebowstąpienie Pana Jezusa',
        'Zesłanie Ducha Świętego',
        'Wniebowzięcie Najświętszej Maryi Panny',
        'Ukoronowanie Maryi na Królową Nieba i Ziemi'
      ]
    };
  }
}

function generateRosarySteps() {
  const steps = [];
  const mysteryInfo = getRosaryMysteriesForToday();
  
  const OJCZE_NASZ_FULL = 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj i odpuść nam nasze winy jako i my odpuszczamy naszym winowajcom i nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.';
  const ZDROVAS_FULL = 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.';
  // Wymowa TTS: „Maryjo" → „Marijo" dla poprawnej wymowy w polskim syntetyzatorze mowy
  const ZDROVAS_SPEECH = 'Zdrowaś Marijo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Marijo, Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci naszej. Amen.';
  const WIERZE_W_BOGA_FULL = 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi, i w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.';
  const CHWALA_OJCU_FULL = 'Chwała Ojcu i Synowi, i Duchowi Świętemu, jak była na początku, teraz i zawsze, i na wieki wieków. Amen.';
  const FATIMA_FULL = 'O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia piekielnego, zaprowadź wszystkie dusze do nieba i dopomóż szczególnie tym, którzy najbardziej potrzebują Twojego miłosierdzia.';
  const POD_TWOJA_OBRONE_FULL = 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, swojemu Synowi nas oddawaj.\n\n+ W imię Ojca i Syna, i Ducha Świętego. Amen.';

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

  // Krok 2: Pierwszy duży niebieski paciorek (Ojcze nasz)
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
    title: 'Zdrowaś Maryjo (1/3 – o cnotę Wiary)',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: ZDROVAS_FULL + ' (o przymnożenie Wiary)',
    speechText: ZDROVAS_SPEECH,
    type: 'small', decade: 0, beadNumber: 3, beadId: 'bead-stem-red-1'
  });

  // Krok 4: 2. mały czerwony paciorek (Zdrowaś Maryjo o nadzieję)
  steps.push({
    stepIndex: 4,
    part: 'Modlitwy wstępne',
    title: 'Zdrowaś Maryjo (2/3 – o cnotę Nadziei)',
    shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
    fullText: ZDROVAS_FULL + ' (o ugruntowanie Nadziei)',
    speechText: ZDROVAS_SPEECH,
    type: 'small', decade: 0, beadNumber: 4, beadId: 'bead-stem-red-2'
  });

  // Krok 5: 3. mały czerwony paciorek (Zdrowaś Maryjo o miłość & Chwała Ojcu)
  steps.push({
    stepIndex: 5,
    part: 'Modlitwy wstępne',
    title: 'Zdrowaś Maryjo (3/3 – o cnotę Miłości) & Chwała Ojcu',
    shortText: 'Zdrowaś Maryjo... Chwała Ojcu...',
    fullText: ZDROVAS_FULL + ' (o rozpalenie Miłości)\n\n' + CHWALA_OJCU_FULL,
    speechText: ZDROVAS_SPEECH + ' ' + CHWALA_OJCU_FULL,
    type: 'small', decade: 0, beadNumber: 5, beadId: 'bead-stem-red-3'
  });

  let cur = 6;
  for (let d = 1; d <= 5; d++) {
    let largeBeadId = 'bead-connector';
    if (d === 2) largeBeadId = 'bead-large-2';
    else if (d === 3) largeBeadId = 'bead-large-3';
    else if (d === 4) largeBeadId = 'bead-large-4';
    else if (d === 5) largeBeadId = 'bead-large-5';

    const mysteryName = mysteryInfo.items[d - 1] || `Tajemnica ${d}`;

    // Duży paciorek: Rozważenie tajemnicy & Ojcze nasz
    steps.push({
      stepIndex: cur++,
      part: `${mysteryInfo.name} · Dziesiątka ${d} z 5`,
      title: `Tajemnica ${d}: ${mysteryName} · Ojcze nasz`,
      shortText: `Tajemnica ${d}: ${mysteryName} · Ojcze nasz...`,
      fullText: `Tajemnica ${d}: ${mysteryName}\n\n${OJCZE_NASZ_FULL}`,
      speechText: `Tajemnica ${d}: ${mysteryName}. ${OJCZE_NASZ_FULL}`,
      type: 'large', decade: d, beadNumber: 0, beadId: largeBeadId
    });

    // 10 małych paciorków: Zdrowaś Maryjo (na 10. paciorku również Chwała Ojcu & Modlitwa Fatimska)
    for (let b = 1; b <= 10; b++) {
      if (b < 10) {
        steps.push({
          stepIndex: cur++,
          part: `Dziesiątka ${d} · ${b} z 10`,
          title: `Zdrowaś Maryjo (${b}/10)`,
          shortText: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą...',
          fullText: ZDROVAS_FULL,
          speechText: ZDROVAS_SPEECH,
          type: 'small', decade: d, beadNumber: b, beadId: `bead-dec${d}-${b}`
        });
      } else {
        steps.push({
          stepIndex: cur++,
          part: `Dziesiątka ${d} · 10 z 10`,
          title: `Zdrowaś Maryjo (10/10) · Chwała Ojcu · O mój Jezu`,
          shortText: 'Zdrowaś Maryjo... Chwała Ojcu... O mój Jezu...',
          fullText: `${ZDROVAS_FULL}\n\n${CHWALA_OJCU_FULL}\n\n${FATIMA_FULL}`,
          speechText: `${ZDROVAS_SPEECH} ${CHWALA_OJCU_FULL} ${FATIMA_FULL}`,
          type: 'small', decade: d, beadNumber: b, beadId: `bead-dec${d}-${b}`
        });
      }
    }
  }

  // Krok 61: Zakończenie – Pod Twoją obronę & Znak Krzyża (Krzyżyk)
  steps.push({
    stepIndex: cur++,
    part: 'Zakończenie',
    title: 'Pod Twoją obronę & Znak Krzyża',
    shortText: 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko...',
    fullText: POD_TWOJA_OBRONE_FULL,
    speechText: 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, swojemu Synowi nas oddawaj. W imię Ojca i Syna, i Ducha Świętego. Amen.',
    type: 'closing', decade: 6, beadNumber: 2, beadId: 'bead-cross'
  });

  return steps;
}

// ========================================================
// 2. STAN APLIKACJI I USTAWIENIA
// ========================================================
const AppState = {
  mode: 'koronka', // 'koronka' lub 'rozaniec'
  textMode: 'full', // 'full' (pełny), 'collapsed' (zwinięty), 'hidden' (ukryty)
  steps: generateDivineMercySteps(),
  currentIndex: 0, // 0 do 60 (co daje krok 1 do 61)
  isPlaying: false,
  audioTimer: null,
  wakeLock: null,
  userIntention: '',
  counter: 0,
  resumeIndex: null, // krok do wznowienia, gdy widoczny jest baner „Poprzednia modlitwa”
  settings: {
    fontSize: 13,
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
// 4. ZRÓŻNICOWANA WIBRACJA HAPTYCZNA DLA SENIORÓW I MODLITWY W KIESZENI
// ========================================================
function triggerHaptic(typeOrStep = 'small') {
  if (!AppState.settings.vibration) return;
  try {
    const type = typeof typeOrStep === 'object' && typeOrStep !== null ? typeOrStep.type : typeOrStep;
    
    // 1. Obsługa wibracji natywnej Capacitor (Android/iOS)
    const Haptics = (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) || null;
    if (Haptics) {
      if (type === 'cross' || type === 'closing') {
        Haptics.notification({ type: 'SUCCESS' }).catch(() => {});
      } else if (type === 'large' || type === 'holyGod') {
        Haptics.impact({ style: 'HEAVY' }).catch(() => {});
      } else {
        Haptics.impact({ style: 'MEDIUM' }).catch(() => {});
      }
    }

    // 2. Standardowa wibracja Web Vibration API (Android / PWA)
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
      if (type === 'cross' || type === 'closing') {
        // Złoty Krzyżyk / Zakończenie: 3 wyraziste impulsy
        navigator.vibrate([80, 50, 80, 50, 140]);
      } else if (type === 'large' || type === 'holyGod') {
        // Duże paciorki (Ojcze Przedwieczny, Święty Boże): podwójna wyczuwalna wibracja
        navigator.vibrate([100, 60, 100]);
      } else {
        // Małe paciorki: wyraźny, wyczuwalny impuls 75ms
        navigator.vibrate(75);
      }
    }
  } catch (e) {
    // Bezpieczne wyciszenie wyjątków
  }
}

// Funkcja pomocnicza: poprawa wymowy trudnych słów przez syntezator mowy (np. Maryjo -> Marijo)
function prepareSpeechText(rawText) {
  if (!rawText) return '';
  return rawText
    .replace(/Maryjo/g, 'Marijo')
    .replace(/Maryi/g, 'Marii');
}

// Wtyczki aplikacji natywnej (Capacitor) – w przeglądarce/PWA są niedostępne
const NativePlugins = (window.Capacitor && window.Capacitor.Plugins) || {};

// ========================================================
// 5. BLOKADA WYGASZANIA EKRANU (SCREEN WAKE LOCK API)
// ========================================================
async function requestScreenWakeLock() {
  if (!AppState.settings.wakelock) return;
  if (NativePlugins.KeepAwake) {
    NativePlugins.KeepAwake.keepAwake().catch(() => {});
    return;
  }
  if (!('wakeLock' in navigator)) return;
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
  if (NativePlugins.KeepAwake) {
    NativePlugins.KeepAwake.allowSleep().catch(() => {});
  }
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
    this.activeToken = 0;
    this.keepAliveInterval = null;
    this.loadVoices();
  }

  loadVoices() {
    if (!this.synth) return;
    const updateVoice = () => {
      const voices = this.synth.getVoices();
      this.voice = voices.find(v => v.lang.startsWith('pl') || v.lang.includes('PL')) || voices[0] || null;
    };
    updateVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = updateVoice;
    }
  }

  speak(text, onEndCallback, displayText = null) {
    this.stop();
    const token = ++this.activeToken;

    if (AppState.settings.soundEnabled && NativePlugins.TextToSpeech) {
      this.speakNative(text, onEndCallback, token);
      return;
    }
    if (!AppState.settings.soundEnabled || !this.synth) {
      if (onEndCallback && AppState.isPlaying) setTimeout(onEndCallback, 1500);
      return;
    }

    // Wyświetl tekst modlitwy (zwięzły displayText, aby nie zasłaniał wizerunku ani paciorków)
    const textContainer = document.getElementById('prayer-text');
    const textToShow = displayText || text;
    if (textContainer) {
      const lines = textToShow.split('\n');
      let globalWordIdx = 0;
      textContainer.innerHTML = lines.map(line => {
        if (!line.trim()) return '<span class="prayer-line-break"></span>';
        const words = line.split(/\s+/).filter(Boolean);
        return words.map(w => `<span id="word-${globalWordIdx++}">${w}</span>`).join(' ');
      }).join('<br>');
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pl-PL';
    if (this.voice) utterance.voice = this.voice;
    utterance.rate = AppState.settings.speechRate || 1.0;
    utterance.pitch = 0.95;

    let wordIdx = 0;
    utterance.onboundary = (event) => {
      if (this.activeToken !== token) return;
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

    const cleanup = () => {
      if (this.keepAliveInterval) {
        clearInterval(this.keepAliveInterval);
        this.keepAliveInterval = null;
      }
      const prev = document.querySelector('.highlight-spoken');
      if (prev) prev.classList.remove('highlight-spoken');
      const voiceWave = document.getElementById('voice-wave');
      if (voiceWave) voiceWave.classList.add('hidden');
    };

    utterance.onend = () => {
      if (this.activeToken !== token) return;
      cleanup();
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = (event) => {
      if (this.activeToken !== token) return;
      cleanup();
      // Anulowane lub przerwane wypowiedzi NIE mogą wywoływać przejścia dalej
      if (event && (event.error === 'canceled' || event.error === 'interrupted')) {
        return;
      }
      if (onEndCallback) onEndCallback();
    };

    const voiceWave = document.getElementById('voice-wave');
    if (voiceWave) voiceWave.classList.remove('hidden');

    // Podtrzymanie syntezy dla długich modlitw (zapobiega usypianiu silnika Chrome po 14s)
    this.keepAliveInterval = setInterval(() => {
      if (this.activeToken !== token) {
        clearInterval(this.keepAliveInterval);
        return;
      }
      if (this.synth && this.synth.speaking && !this.synth.paused) {
        this.synth.pause();
        this.synth.resume();
      }
    }, 10000);

    this.synth.speak(utterance);
    updateMediaSession();
  }

  speakNative(text, onEndCallback, token) {
    const voiceWave = document.getElementById('voice-wave');
    if (voiceWave) voiceWave.classList.remove('hidden');

    const finish = () => {
      if (this.activeToken !== token) return;
      if (voiceWave) voiceWave.classList.add('hidden');
      if (onEndCallback) onEndCallback();
    };

    NativePlugins.TextToSpeech.speak({
      text,
      lang: 'pl-PL',
      rate: AppState.settings.speechRate || 1.0,
      pitch: 0.95,
      category: 'playback'
    }).then(finish, finish);
    updateMediaSession();
  }

  stop() {
    this.activeToken++;
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
    if (NativePlugins.TextToSpeech) {
      NativePlugins.TextToSpeech.stop().catch(() => {});
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    const voiceWave = document.getElementById('voice-wave');
    if (voiceWave) voiceWave.classList.add('hidden');
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
  progressIndicator.textContent = `Krok ${step.stepIndex} z ${total} · ${step.title}`;
  const progressFill = document.getElementById('prayer-progress-fill');
  if (progressFill) progressFill.style.width = `${(step.stepIndex / total) * 100}%`;

  // 2. Aktualizacja tekstu modlitwy
  const titleEl = document.getElementById('prayer-title');
  const textEl = document.getElementById('prayer-text');
  titleEl.textContent = step.title;
  textEl.textContent = step.shortText;

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

  // Paciorki odmówione do bieżącego kroku
  const completedBeads = new Set();
  for (let i = 0; i < AppState.currentIndex; i++) {
    if (AppState.steps[i] && AppState.steps[i].beadId) {
      completedBeads.add(AppState.steps[i].beadId);
    }
  }

  // Wyczyść klasy i oznacz paciorki odmówione
  allBeadElements.forEach(el => {
    el.classList.remove('active');
    if (completedBeads.has(el.id) && el.id !== currentBeadId) {
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
        // Krzyżyk ma własne złote lśnienie – aureola tylko wokół paciorków
        haloGroup.style.display = currentBeadId === 'bead-cross' ? 'none' : 'block';
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

  // Wywołanie wibracji bezpośrednio przy aktywacji użytkownika
  triggerHaptic(AppState.steps[index]);

  // Przerwij poprzednie oczekiwanie na kolejny krok
  if (AppState.audioTimer) {
    clearTimeout(AppState.audioTimer);
    AppState.audioTimer = null;
  }

  // Zatrzymaj poprzednio odczytywany tekst
  speaker.stop();

  AppState.currentIndex = index;
  updateUI();
  chime.playSoftBead(stepFrequency(AppState.steps[index]));

  if (AppState.isPlaying && !fromAutoplay) {
    stopAutoplay();
  }

  // Odmawianie wraz z lektorem lub bez (wg stanu soundEnabled)
  if (AppState.settings.soundEnabled) {
    const textToSpeak = prepareSpeechText(AppState.steps[index].speechText || AppState.steps[index].fullText);
    const textToShow = AppState.steps[index].shortText || AppState.steps[index].fullText;
    speaker.speak(textToSpeak, () => {
      if (AppState.isPlaying) {
        AppState.audioTimer = setTimeout(() => {
          goToNextStep(true);
        }, AppState.settings.pauseBetweenPrayers * 1000);
      }
    }, textToShow);
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
  const compVal = document.getElementById('completion-counter-val');
  if (compVal) compVal.textContent = AppState.counter;
  const setVal = document.getElementById('settings-counter-display');
  if (setVal) setVal.textContent = AppState.counter;

  // Wyświetl godny, prosty komunikat zakończenia
  const modalComp = document.getElementById('modal-completion');
  if (modalComp) modalComp.classList.remove('hidden');
}

// ========================================================
// 10. AUTOODTWARZANIE (LEKTOR AUDIO)
// ========================================================
function startAutoplay() {
  AppState.isPlaying = true;
  updateAutoplayButtonUI();
  requestScreenWakeLock();

  const currentStep = AppState.steps[AppState.currentIndex];
  if (currentStep) {
    if (AppState.settings.soundEnabled) {
      const textToSpeak = prepareSpeechText(currentStep.speechText || currentStep.fullText);
      const textToShow = currentStep.shortText || currentStep.fullText;
      speaker.speak(textToSpeak, () => {
        if (AppState.isPlaying) {
          AppState.audioTimer = setTimeout(() => {
            goToNextStep(true);
          }, AppState.settings.pauseBetweenPrayers * 1000);
        }
      }, textToShow);
    } else {
      const delay = Math.max(2500, AppState.settings.pauseBetweenPrayers * 1000);
      AppState.audioTimer = setTimeout(() => {
        goToNextStep(true);
      }, delay);
    }
  }
}

function updateAutoplayButtonUI() {
  const btnAutoplay = document.getElementById('btn-autoplay');
  if (!btnAutoplay) return;
  if (AppState.isPlaying) {
    btnAutoplay.classList.add('playing');
    btnAutoplay.setAttribute('title', 'Zatrzymaj autoodtwarzanie');
    btnAutoplay.setAttribute('aria-label', 'Zatrzymaj autoodtwarzanie');
    btnAutoplay.innerHTML = '<span class="autoplay-icon">⏸</span><span class="autoplay-label">PAUZA</span>';
  } else {
    btnAutoplay.classList.remove('playing');
    btnAutoplay.setAttribute('title', 'Włącz autoodtwarzanie (odmawianie automatyczne)');
    btnAutoplay.setAttribute('aria-label', 'Włącz odmawianie automatyczne');
    btnAutoplay.innerHTML = '<span class="autoplay-icon">▶</span><span class="autoplay-label">AUTO</span>';
  }
}

function stopAutoplay() {
  AppState.isPlaying = false;
  if (AppState.audioTimer) {
    clearTimeout(AppState.audioTimer);
    AppState.audioTimer = null;
  }
  speaker.stop();
  updateAutoplayButtonUI();
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
function updateRosarySvgViewBox() {
  const stage = document.getElementById('prayer-stage');
  const svg = document.getElementById('rosary-heart-svg');
  const heartGroup = document.getElementById('rosary-layout');
  if (!stage || !svg || !heartGroup) return;

  const w = stage.clientWidth || window.innerWidth;
  const h = stage.clientHeight || window.innerHeight;
  if (!w || !h) return;

  const vbWidth = 460;
  // Dynamiczna wysokość viewBox dopasowana 1:1 do proporcji ekranu
  const vbHeight = Math.round(460 * (h / w));
  svg.setAttribute('viewBox', `0 0 ${vbWidth} ${vbHeight}`);

  // Schemat paciorków w kształcie serca bezpośrednio pod głową Pana Jezusa:
  // Duży niebieski paciorek łącznika (bead-connector na środku, Y=348)
  // znajduje się bezpośrednio pod brodą Jezusa (na dekolcie tuniki).
  const imgAspect = 635 / 1234;
  const stageAspect = w / h;
  let imgHeight, imgTop;
  if (stageAspect > imgAspect) {
    imgHeight = h;
    imgTop = 0;
  } else {
    imgHeight = w / imgAspect;
    imgTop = (h - imgHeight) / 2;
  }

  // Pozycja brody Jezusa na ekranie w pikselach:
  const screenChinY = (imgTop + 10) + (imgHeight * 0.95 * (265 / 1234));
  // Środek dużego niebieskiego paciorka łącznika bezpośrednio pod brodą (+4px):
  const targetBeadY_screen = screenChinY + 4;
  const targetBeadY_svg = targetBeadY_screen * (460 / w);
  const dy = targetBeadY_svg - 348.0;

  heartGroup.setAttribute('transform', `translate(0, ${dy.toFixed(1)})`);
}

function updateStemBeadsLayout() {
  const beadStemLarge = document.getElementById('bead-stem-large');
  const beadStemRed1 = document.getElementById('bead-stem-red-1');
  const beadStemRed2 = document.getElementById('bead-stem-red-2');
  const beadStemRed3 = document.getElementById('bead-stem-red-3');

  // W Koronce i w Różańcu: 1 duży niebieski paciorek + 3 małe czerwone paciorki + duży niebieski łącznik
  if (beadStemLarge) beadStemLarge.setAttribute('transform', 'translate(230.0, 444.0)');
  if (beadStemRed1) beadStemRed1.setAttribute('transform', 'translate(230.0, 420.0)');
  if (beadStemRed2) beadStemRed2.setAttribute('transform', 'translate(230.0, 396.0)');
  if (beadStemRed3) {
    beadStemRed3.setAttribute('transform', 'translate(230.0, 372.0)');
    beadStemRed3.style.display = '';
  }
}

function switchMode(newMode) {
  AppState.mode = newMode;
  stopAutoplay();

  const titleEl = document.getElementById('app-title-text');
  const modeLabel = document.getElementById('mode-label');
  const inscription = document.getElementById('sacred-inscription');
  const imgJesus = document.getElementById('holy-image-jesus');
  const imgMary = document.getElementById('holy-image-mary');
  const cameoImg = document.getElementById('cameo-mode-img');
  const cameoBtn = document.getElementById('btn-switch-mode');
  const bannerImg = document.getElementById('banner-img');

  updateRosarySvgViewBox();
  updateStemBeadsLayout();

  const wrapper = document.getElementById('image-wrapper');
  if (wrapper) wrapper.classList.toggle('mode-mary', newMode === 'rozaniec');
  const app = document.getElementById('app');
  if (app) {
    app.classList.toggle('mode-koronka', newMode !== 'rozaniec');
    app.classList.toggle('mode-rozaniec', newMode === 'rozaniec');
  }

  if (newMode === 'rozaniec') {
    AppState.steps = generateRosarySteps();
    if (titleEl) titleEl.textContent = 'Różaniec Święty';
    if (modeLabel) modeLabel.textContent = 'Koronka';
    if (inscription) inscription.textContent = 'KRÓLOWO POKOJU, MÓDL SIĘ ZA NAMI';
    if (imgJesus) imgJesus.classList.add('hidden');
    if (imgMary) imgMary.classList.remove('hidden');
    if (cameoImg) {
      cameoImg.src = 'assets/cameo-jesus-clean.png';
      cameoImg.alt = 'Jezus Miłosierny';
    }
    if (cameoBtn) {
      cameoBtn.title = 'Przełącz na Koronkę do Miłosierdzia Bożego';
      cameoBtn.setAttribute('aria-label', cameoBtn.title);
    }
    const wilnoText = document.getElementById('wilno-inscription-text');
    if (wilnoText) {
      wilnoText.textContent = 'KRÓLOWO POKOJU, MÓDL SIĘ ZA NAMI';
      wilnoText.style.color = 'var(--gold-light)';
    }
  } else {
    AppState.steps = generateDivineMercySteps();
    if (titleEl) titleEl.textContent = 'Koronka do Bożego Miłosierdzia';
    if (modeLabel) modeLabel.textContent = 'Różaniec';
    if (inscription) inscription.textContent = 'JEZU, UFAM TOBIE';
    if (imgJesus) imgJesus.classList.remove('hidden');
    if (imgMary) imgMary.classList.add('hidden');
    if (cameoImg) {
      cameoImg.src = 'assets/cameo-mary-clean.png';
      cameoImg.alt = 'Matka Boża';
    }
    if (cameoBtn) {
      cameoBtn.title = 'Przełącz na Różaniec Święty';
      cameoBtn.setAttribute('aria-label', cameoBtn.title);
    }
    const wilnoText = document.getElementById('wilno-inscription-text');
    if (wilnoText) {
      wilnoText.textContent = 'JEZU, UFAM TOBIE';
      wilnoText.style.color = '#c4261d';
    }
  }

  AppState.currentIndex = 0;
  updateUI();
  localStorage.setItem('koronka_app_mode', newMode);

  // Odczytaj początkowy Znak Krzyża jeśli lektor jest włączony
  if (AppState.settings.soundEnabled) {
    const firstStep = AppState.steps[0];
    if (firstStep) {
      speaker.speak(prepareSpeechText(firstStep.speechText || firstStep.fullText), null, firstStep.shortText);
    }
  }
}

// ========================================================
// 12. PAMIĘĆ LOKALNA (ZAPAMIĘTYWANIE POSTĘPU I WZNAWIANIE)
// ========================================================
function saveState() {
  try {
    // Dopóki użytkownik nie wybrał „Kontynuuj” / „Od nowa”, nie nadpisujemy zapamiętanego kroku
    if (AppState.resumeIndex === null || AppState.currentIndex !== 0) {
      localStorage.setItem('koronka_saved_index', AppState.currentIndex.toString());
    }
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
      // Nowy zbalansowany układ: mniejszy tekst modlitwy (13 sp domyślnie)
      if (!localStorage.getItem('koronka_layout_v4')) {
        AppState.settings.fontSize = 13;
        localStorage.setItem('koronka_layout_v4', '1');
        saveSettings();
      }
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
        AppState.resumeIndex = idx;
        document.getElementById('resume-step-text').textContent = `Krok ${idx + 1} z ${AppState.steps.length}`;
        setResumeBannerVisible(true);
      }
    }
    // 6. Zapamiętany tryb widoczności tekstu (pełny / zwinięty / ukryty)
    const savedTextMode = localStorage.getItem('koronka_text_mode');
    if (savedTextMode && ['full', 'collapsed', 'hidden'].includes(savedTextMode)) {
      setTextMode(savedTextMode);
    }
  } catch (e) {}
}

function setResumeBannerVisible(visible) {
  const b = document.getElementById('resume-banner');
  if (b) b.classList.toggle('hidden', !visible);
  const r = document.getElementById('btn-restart-always');
  if (r) r.classList.toggle('hidden', visible);
}

function setTextMode(mode) {
  AppState.textMode = mode;
  try {
    localStorage.setItem('koronka_text_mode', mode);
  } catch (e) {}

  const header = document.getElementById('prayer-tap-text-area');
  const btnRestore = document.getElementById('btn-restore-text');
  const btnCollapse = document.getElementById('btn-text-collapse');
  const toggleSettings = document.getElementById('toggle-prayer-text');

  if (toggleSettings) {
    toggleSettings.checked = (mode !== 'hidden');
  }

  if (header) {
    if (mode === 'hidden') {
      header.classList.remove('collapsed');
      header.classList.add('text-hidden');
      if (btnRestore) btnRestore.classList.remove('hidden');
    } else if (mode === 'collapsed') {
      header.classList.add('collapsed');
      header.classList.remove('text-hidden');
      if (btnRestore) btnRestore.classList.add('hidden');
      if (btnCollapse) btnCollapse.setAttribute('title', 'Rozwiń tekst modlitwy');
    } else {
      header.classList.remove('collapsed', 'text-hidden');
      if (btnRestore) btnRestore.classList.add('hidden');
      if (btnCollapse) btnCollapse.setAttribute('title', 'Zwiń tekst modlitwy');
    }
  }

  updateRosarySvgViewBox();
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
  const togglePrayerText = document.getElementById('toggle-prayer-text');
  if (togglePrayerText) {
    togglePrayerText.checked = (AppState.textMode !== 'hidden');
  }

  // Dźwięk
  const iconOn = document.getElementById('icon-voice-on');
  const iconOff = document.getElementById('icon-voice-off');
  if (iconOn && iconOff) {
    if (AppState.settings.soundEnabled) {
      iconOn.classList.remove('hidden');
      iconOff.classList.add('hidden');
    } else {
      iconOn.classList.add('hidden');
      iconOff.classList.remove('hidden');
    }
  }
  const musicBtn = document.getElementById('btn-audio');
  if (musicBtn) {
    musicBtn.classList.toggle('muted', !AppState.settings.soundEnabled);
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
  updateStemBeadsLayout();
  updateUI();
  updateAutoplayButtonUI();
  initSwipeGestures();
  setupMercyHourReminder();
  requestScreenWakeLock();

  // 1. Kliknięcie w paciorek na schemacie serca SVG
  document.querySelectorAll('.bead-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const beadId = item.id;
      const matching = [];
      AppState.steps.forEach((s, idx) => {
        if (s.beadId === beadId) matching.push(idx);
      });
      if (matching.length === 1) {
        goToStep(matching[0]);
      } else if (matching.length > 1) {
        matching.sort((a, b) => Math.abs(a - AppState.currentIndex) - Math.abs(b - AppState.currentIndex));
        goToStep(matching[0]);
      } else {
        const stepNum = parseInt(item.getAttribute('data-step') || '1', 10);
        goToStep(stepNum - 1);
      }
    });
  });

  // 2. Kliknięcie tekstu modlitwy przechodzi dalej (z pominięciem kontrolek)
  document.getElementById('prayer-tap-text-area').addEventListener('click', (e) => {
    if (e.target.closest('.text-controls')) return;
    goToNextStep();
  });

  // Kontrolki tekstu modlitwy (Aa rozmiar, zwiń, ukryj)
  const btnTextSize = document.getElementById('btn-text-size-down');
  const btnCollapse = document.getElementById('btn-text-collapse');
  const btnHide = document.getElementById('btn-text-hide');
  const btnRestore = document.getElementById('btn-restore-text');

  if (btnTextSize) {
    btnTextSize.addEventListener('click', (e) => {
      e.stopPropagation();
      const SIZES = [11, 12, 13, 15, 17];
      const idx = SIZES.indexOf(AppState.settings.fontSize);
      AppState.settings.fontSize = SIZES[(idx + 1) % SIZES.length];
      applySettingsToUI();
      saveSettings();
    });
  }

  if (btnCollapse) {
    btnCollapse.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextMode = AppState.textMode === 'collapsed' ? 'full' : 'collapsed';
      setTextMode(nextMode);
    });
  }

  if (btnHide) {
    btnHide.addEventListener('click', (e) => {
      e.stopPropagation();
      setTextMode('hidden');
    });
  }

  if (btnRestore) {
    btnRestore.addEventListener('click', (e) => {
      e.stopPropagation();
      setTextMode('full');
    });
  }

  // Kliknięcie w tło wizerunku przechodzi dalej (z pominięciem kontrolek i paciorków)
  const prayerStage = document.getElementById('prayer-stage');
  if (prayerStage) {
    prayerStage.addEventListener('click', (e) => {
      if (
        e.target.closest('#bottom-floating-controls') ||
        e.target.closest('.bead-item') ||
        e.target.closest('.prayer-floating-capsule') ||
        e.target.closest('.top-bar') ||
        e.target.closest('#btn-restore-text') ||
        e.target.closest('#btn-restart') ||
        e.target.closest('#btn-restart-always') ||
        e.target.closest('.modal-overlay')
      ) return;
      goToNextStep();
    });
  }

  // 3. Przyciski akcji na dole ekranu (zabezpieczone przed propagacją do tła)
  const btnNext = document.getElementById('btn-next');
  if (btnNext) btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    goToNextStep();
  });
  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    goToPrevStep();
  });
  const btnAutoplay = document.getElementById('btn-autoplay');
  if (btnAutoplay) btnAutoplay.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAutoplay();
  });

  // 4. Przełącznik trybu (Koronka <-> Różaniec) - medalion w lewym dolnym rogu
  const btnSwitchMode = document.getElementById('btn-switch-mode');
  if (btnSwitchMode) {
    btnSwitchMode.addEventListener('click', (e) => {
      e.stopPropagation();
      switchMode(AppState.mode === 'koronka' ? 'rozaniec' : 'koronka');
    });
  }

  // 5. Przycisk dźwięku / lektora (🎵 błękitna nutka)
  const btnAudio = document.getElementById('btn-audio');
  if (btnAudio) {
    btnAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      AppState.settings.soundEnabled = !AppState.settings.soundEnabled;
      applySettingsToUI();
      saveSettings();
      if (!AppState.settings.soundEnabled) {
        stopAutoplay();
        speaker.stop();
      } else {
        const curStep = AppState.steps[AppState.currentIndex];
        if (curStep) {
          speaker.speak(prepareSpeechText(curStep.speechText || curStep.fullText), null, curStep.shortText);
        }
      }
    });
  }

  // Górna ikona 🙏 (Jak odmawiać Koronkę)
  const btnSchemaTop = document.getElementById('btn-schema-top');
  if (btnSchemaTop) {
    btnSchemaTop.addEventListener('click', () => {
      const modalSchema = document.getElementById('modal-schema');
      if (modalSchema) modalSchema.classList.remove('hidden');
    });
  }

  // 6. Baner wznowienia (opcjonalny)
  const btnResumeContinue = document.getElementById('btn-resume-continue');
  if (btnResumeContinue) {
    btnResumeContinue.addEventListener('click', () => {
      const savedIdx = AppState.resumeIndex || 0;
      AppState.resumeIndex = null;
      setResumeBannerVisible(false);
      goToStep(savedIdx);
    });
  }

  // Przycisk „Od nowa” (↺) – z potwierdzeniem
  const modalRestart = document.getElementById('modal-restart');
  const restartFromBeginning = () => {
    if (modalRestart) modalRestart.classList.add('hidden');
    AppState.resumeIndex = null;
    setResumeBannerVisible(false);
    goToStep(0);
  };

  const handleRestartClick = (e) => {
    if (e) e.stopPropagation();
    if (AppState.currentIndex > 0 && modalRestart) {
      modalRestart.classList.remove('hidden');
    } else {
      restartFromBeginning();
    }
  };

  const btnRestart = document.getElementById('btn-restart');
  if (btnRestart) btnRestart.addEventListener('click', handleRestartClick);

  const btnRestartAlways = document.getElementById('btn-restart-always');
  if (btnRestartAlways) btnRestartAlways.addEventListener('click', handleRestartClick);

  const btnRestartConfirm = document.getElementById('btn-restart-confirm');
  if (btnRestartConfirm) btnRestartConfirm.addEventListener('click', restartFromBeginning);
  const btnRestartCancel = document.getElementById('btn-restart-cancel');
  if (btnRestartCancel) btnRestartCancel.addEventListener('click', () => modalRestart && modalRestart.classList.add('hidden'));
  if (modalRestart) {
    modalRestart.addEventListener('click', (e) => {
      if (e.target === modalRestart) modalRestart.classList.add('hidden');
    });
  }

  // Klawiatura (ułatwienie modlitwy na komputerach i tabletach)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      goToNextStep();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevStep();
    } else if (e.key === 'Home' || e.key.toLowerCase() === 'r') {
      e.preventDefault();
      handleRestartClick();
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      if (btnAudio) btnAudio.click();
    }
  });

  const btnResumeRestart = document.getElementById('btn-resume-restart');
  if (btnResumeRestart) {
    btnResumeRestart.addEventListener('click', () => {
      AppState.resumeIndex = null;
      setResumeBannerVisible(false);
      goToStep(0);
    });
  }

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
    if (e.target.checked) {
      triggerHaptic('large');
    }
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

  const togglePrayerText = document.getElementById('toggle-prayer-text');
  if (togglePrayerText) {
    togglePrayerText.addEventListener('change', (e) => {
      setTextMode(e.target.checked ? 'full' : 'hidden');
    });
  }

  // Dynamiczne dopasowanie schematu serca do pełnej szerokości ekranu
  window.addEventListener('resize', updateRosarySvgViewBox);
  window.addEventListener('orientationchange', updateRosarySvgViewBox);
  updateRosarySvgViewBox();

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

// Rejestracja Service Worker (PWA Offline) – w aplikacji natywnej pliki są już wbudowane w pakiet
if ('serviceWorker' in navigator && !window.Capacitor) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js?v=50').catch(() => {});
  });
}
