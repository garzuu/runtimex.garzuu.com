const LOCALES = ["en", "it"];

const T = {
  en: {
    // Nav
    "nav.features":   "Features",
    "nav.algorithms": "Algorithms",
    "nav.platforms":  "Platforms",
    "nav.download":   "Download",
    "nav.privacy":    "Privacy Policy",
    "nav.support":    "Support",

    // Index — hero
    "hero.title":         "Plan your dive,<br><span class=\"accent\">dive the plan.</span>",
    "hero.sub":           "RuntimeX is a technical dive planning app built for precision. Bühlmann ZHL-16C and VPM-B engines, CCR support, multi-gas decompression, PDF export — everything runs on your device.",
    "hero.cta.app":       "Get the App",
    "hero.cta.features":  "See Features",
    "hero.stat.algos":    "Deco Algorithms",
    "hero.stat.gases":    "Gas Mixes",
    "hero.stat.platforms":"Platforms",
    "hero.stat.accounts": "Accounts Needed",

    // Index — features
    "features.title": "Everything you need in the water",
    "features.sub":   "Designed for technical divers who demand accuracy without complexity.",
    "feat.deco.title": "Decompression Engine",
    "feat.deco.desc":  "Full Bühlmann ZHL-16C implementation with configurable gradient factors (GF Low / GF High). VPM-B conservatism slider from 0 to 5. NDL calculation, lost-gas scenarios, and SAC-based gas consumption for every phase of your dive.",
    "feat.deco.li1":   "Gradient factors (GF Low / GF High)",
    "feat.deco.li2":   "NDL & ceiling tracking",
    "feat.deco.li3":   "Lost-gas worst-case scenarios",
    "feat.deco.li4":   "SAC bottom & deco consumption",
    "feat.ccr.title":  "CCR Support",
    "feat.ccr.desc":   "Closed-Circuit Rebreather mode with constant-ppO₂ loop gas, configurable low/high setpoint, diluent mix, and full bailout scenario planning.",
    "feat.gas.title":  "Multi-Gas Planning",
    "feat.gas.desc":   "Bottom gas plus unlimited deco and travel gases, each with per-gas ppO₂ limits. Switch gases automatically at optimal depths.",
    "feat.chart.title":"Interactive Profile Chart",
    "feat.chart.desc": "Depth/time profile with gradient fill. Tap to toggle: dashed ceiling line showing decompression obligation over time, plus a live stats panel (TTS, Runtime, NDL, stop count).",
    "feat.pdf.title":  "PDF Export",
    "feat.pdf.desc":   "Full-page report with key metrics, dive parameters, gas inventory, profile chart, deco schedule, gas consumption, and lost-gas scenarios. Share or print via system share sheet.",
    "feat.save.title": "Saved Plans",
    "feat.save.desc":  "Name and save any generated plan. Sidebar with plan list showing depth, time, gas, TTS, and stop count. Load or delete with confirmation anytime.",

    // Index — algorithms
    "algo.title": "Two proven algorithms.<br>One app.",
    "algo.sub":   "Choose the model that matches your training and diving style.",
    "algo.buhl.desc":  "The industry standard for dissolved-gas decompression modelling. Fine-tune conservatism with gradient factors — GF Low controls first stop depth, GF High controls surfacing ceiling.",
    "algo.buhl.hint1": "First stop depth",
    "algo.buhl.hint2": "Surfacing ceiling",
    "algo.vpm.desc":   "Bubble-based model that accounts for nucleation of microbubbles. Adjust conservatism on a simple 0–5 slider — no deep knowledge of model internals required.",
    "algo.vpm.hint":   "0 (aggressive) → 5 (conservative)",

    // Index — platforms
    "platforms.title": "macOS, Windows, Linux, iOS & Android.",
    "platforms.sub":   "One app, every platform. Plan on desktop, dive with your phone — everything stays offline.",

    // Index — offline banner
    "offline.title": "100% Offline. Always.",
    "offline.desc":  "No Wi-Fi at the dive site? No problem. RuntimeX requires zero network connection — plans are computed and saved entirely on your device. Your data never leaves your hands.",

    // Index — settings
    "settings.title": "Configured your way",
    "settings.sub":   "Set persistent defaults once. Override per dive whenever you need to.",

    // Index — download CTA
    "dl.cta.title": "Ready to download RuntimeX?",
    "dl.cta.sub":   "Available for macOS, Windows, Linux and Android. No account, no backend.",
    "dl.cta.dmg":   "Download DMG",
    "dl.cta.exe":   "Download EXE",
    "dl.cta.page":  "Download page",
    "dl.cta.brew":  "Homebrew tap",

    // Download page — hero
    "dl.hero.badge": "v1.0.1 · all platforms",
    "dl.hero.title": "Download <span class=\"accent\">RuntimeX</span>",
    "dl.hero.sub":   "Offline-first technical dive planner. Available for macOS, Windows, Linux and Android. No account, no backend — everything runs on your device.",
    "dl.meta.platforms": "macOS · Windows · Linux · Android",
    "dl.meta.privacy":   "No account, no backend",
    "dl.meta.source":    "CI-built from private repo",
    "dl.meta.label.platforms": "Platforms",
    "dl.meta.label.privacy":   "Privacy",
    "dl.meta.label.source":    "Source",

    // Download page — macOS
    "dl.macos.badge": "DMG · Signed & Notarized",
    "dl.macos.s1": "<strong>Download the DMG</strong> using the button on the right or with <code>curl</code>.",
    "dl.macos.s2": "<strong>Open the DMG</strong> — double-click the downloaded file to mount it.",
    "dl.macos.s3": "<strong>Drag RuntimeX into Applications</strong> — drag the app icon onto the Applications shortcut inside the DMG window.",
    "dl.macos.s4": "<strong>Launch</strong> — open RuntimeX from Launchpad or Spotlight. Because the app is signed and notarized by Apple, no security warning will appear.",
    "dl.macos.s5": "<strong>Eject the DMG</strong> — right-click the mounted volume in Finder and eject it.",
    "dl.dl.label": "Download",
    "dl.sha.label": "SHA256 checksum",
    "dl.comingSoon": "coming soon",

    // Download page — iOS
    "dl.appStore.label": "Open App Store",
    "dl.how.ios.1": "RuntimeX is now available on the App Store.",
    "dl.how.ios.2": "Open it in the App Store and install it with no extra setup.",

    // Download page — Homebrew
    "dl.brew.badge": "macOS · Terminal",
    "dl.brew.s1": "<strong>Install Homebrew</strong> if you don't have it yet — see <a href=\"https://brew.sh\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--accent)\">brew.sh</a>.",
    "dl.brew.s2": "<strong>Add the tap</strong> — this registers the RuntimeX cask repository with Homebrew.",
    "dl.brew.s3": "<strong>Install the cask</strong> — Homebrew downloads and installs RuntimeX automatically.",
    "dl.brew.s4": "<strong>Update later</strong> — run <code>brew upgrade --cask runtimex</code> when a new version is available.",
    "dl.brew.s5": "<strong>Uninstall</strong> — run <code>brew uninstall --cask runtimex</code> to remove it completely.",
    "dl.brew.cmd.label": "Terminal commands",
    "dl.brew.repo":  "Open tap repo",
    "dl.brew.note":  "The tap is auto-updated by CI after each release. The SHA256 in the cask always matches the file at <a href=\"/downloads/RuntimeX-macos.dmg\">/downloads/RuntimeX-macos.dmg</a>.",

    // Download page — Windows
    "dl.win.badge": "Installer EXE · x64",
    "dl.win.s1": "<strong>Download the installer</strong> using the button on the right.",
    "dl.win.s2": "<strong>Run the installer</strong> — double-click <code>RuntimeX-windows.exe</code>. Windows may show a SmartScreen prompt; click <em>More info → Run anyway</em>.",
    "dl.win.s3": "<strong>Follow the wizard</strong> — choose the install folder (default: <code>C:\\Program Files\\RuntimeX</code>) and optionally create a desktop shortcut.",
    "dl.win.s4": "<strong>Launch</strong> — find RuntimeX in the Start menu or on the desktop.",
    "dl.win.s5": "<strong>Uninstall</strong> — use <em>Add or Remove Programs</em> in Windows Settings.",

    // Download page — Linux
    "dl.linux.badge": "tar.gz · x64",
    "dl.linux.s1": "<strong>Download the tarball</strong> and verify the SHA256 checksum if needed.",
    "dl.linux.s2": "<strong>Extract it</strong> to a folder of your choice, for example <code>~/.local/share/runtimex</code>.",
    "dl.linux.s3": "<strong>Run the binary</strong> — execute <code>./runtimex</code> inside the extracted folder. You can add it to your <code>$PATH</code> or create a desktop entry.",
    "dl.linux.s4": "<strong>Optional: create a launcher</strong> — create a <code>.desktop</code> file in <code>~/.local/share/applications/</code> for Gnome/KDE integration.",
    "dl.linux.cmd.label": "Download & install",

    // Download page — Android
    "dl.android.badge": "APK · arm64",
    "dl.android.s1": "<strong>Enable Unknown sources</strong> — go to <em>Settings → Apps → Special app access → Install unknown apps</em> and enable it for your browser or Files app.",
    "dl.android.s2": "<strong>Download the APK</strong> from the button on the right, directly on your Android device.",
    "dl.android.s3": "<strong>Open the APK</strong> — tap the downloaded file in your notifications or Files app and confirm the install prompt.",
    "dl.android.s4": "<strong>Launch</strong> — find RuntimeX in your app drawer.",
    "dl.android.s5": "<strong>Update</strong> — install the new APK; if Android blocks it, uninstall the previous version first.",
    "dl.android.cmd.label": "Download",
    "dl.android.warning": "This APK is sideloaded from CI and is not distributed via the Play Store. You must enable <em>Install unknown apps</em> before installing.",

    // Download page — how to install (compact steps)
    "dl.how.title":       "How to install",
    "dl.how.macos.1":     "Choose DMG or Homebrew.",
    "dl.how.macos.2":     "DMG — open the downloaded file and drag RuntimeX into your Applications folder.",
    "dl.how.macos.3":     "Homebrew — copy the command, paste it into Terminal and press Enter.",
    "dl.how.macos.4":     "First time? Run <code>brew trust garzuu/runtimex</code> once so future updates work with <code>brew upgrade --cask runtimex</code>.",
    "dl.how.macos.5":     "Blocked by Gatekeeper on first launch? Go to System Settings → Privacy & Security → Open Anyway.",
    "dl.how.windows.1":   "Download and run the installer.",
    "dl.how.windows.2":   "SmartScreen may appear — click <em>More info → Run anyway</em>.",
    "dl.how.windows.3":   "Follow the wizard. Find RuntimeX in the Start menu when done.",
    "dl.how.linux.1":     "Download the tarball.",
    "dl.how.linux.2":     "Extract: <code>tar -xzf RuntimeX-linux.tar.gz -C ~/.local/share/runtimex</code>",
    "dl.how.linux.3":     "Run: <code>~/.local/share/runtimex/runtimex</code>",
    "dl.how.android.1":   "Enable unknown sources — <em>Settings → Apps → Special app access → Install unknown apps</em>.",
    "dl.how.android.2":   "Download the APK on your device.",
    "dl.how.android.3":   "Tap the downloaded file and confirm the install.",
    "dl.how.android.4":   "To update, install the new APK; if Android blocks it, uninstall the previous version first.",

    // Support page
    "support.title": "Support",
    "support.sub":   "Need help with RuntimeX? Start here.",
    "support.faq.title": "Frequently Asked Questions",
    "support.contact.title": "Contact",
    "support.contact.desc": "For bugs, feature requests, or anything else, open an issue on GitHub.",
    "support.contact.btn": "Open an issue",

    // Privacy page
    "privacy.title": "Privacy Policy",

    // Footer
    "footer.copy": "MIT / Apache 2.0",
  },

  it: {
    // Nav
    "nav.features":   "Funzionalità",
    "nav.algorithms": "Algoritmi",
    "nav.platforms":  "Piattaforme",
    "nav.download":   "Scarica",
    "nav.privacy":    "Informativa privacy",
    "nav.support":    "Supporto",

    // Index — hero
    "hero.title":         "Pianifica l'immersione,<br><span class=\"accent\">eseguila alla perfezione.</span>",
    "hero.sub":           "RuntimeX è un'app di dive planning tecnico progettata per la precisione. Motori Bühlmann ZHL-16C e VPM-B, supporto CCR, decompressione multi-gas, export PDF — tutto gira sul tuo dispositivo.",
    "hero.cta.app":       "Ottieni l'App",
    "hero.cta.features":  "Scopri le funzioni",
    "hero.stat.algos":    "Algoritmi deco",
    "hero.stat.gases":    "Miscele gas",
    "hero.stat.platforms":"Piattaforme",
    "hero.stat.accounts": "Account necessari",

    // Index — features
    "features.title": "Tutto ciò che ti serve sott'acqua",
    "features.sub":   "Progettato per i subacquei tecnici che esigono precisione senza complessità.",
    "feat.deco.title": "Motore di decompressione",
    "feat.deco.desc":  "Implementazione completa di Bühlmann ZHL-16C con gradient factors configurabili (GF Low / GF High). Slider di conservatism VPM-B da 0 a 5. Calcolo NDL, scenari lost-gas e consumo gas SAC-based per ogni fase dell'immersione.",
    "feat.deco.li1":   "Gradient factors (GF Low / GF High)",
    "feat.deco.li2":   "NDL e ceiling tracking",
    "feat.deco.li3":   "Scenari lost-gas worst-case",
    "feat.deco.li4":   "Consumo SAC fondo e deco",
    "feat.ccr.title":  "Supporto CCR",
    "feat.ccr.desc":   "Modalità Closed-Circuit Rebreather con ppO₂ costante nel loop, setpoint alto/basso configurabile, diluente e pianificazione completa del bailout.",
    "feat.gas.title":  "Pianificazione multi-gas",
    "feat.gas.desc":   "Gas di fondo più gas deco e travel illimitati, ognuno con limite ppO₂ individuale. Cambio gas automatico alle profondità ottimali.",
    "feat.chart.title":"Grafico profilo interattivo",
    "feat.chart.desc": "Profilo profondità/tempo con gradient fill. Tocca per attivare: linea ceiling tratteggiata che mostra l'obbligo deco nel tempo, più un pannello statistiche live (TTS, Runtime, NDL, numero di stop).",
    "feat.pdf.title":  "Export PDF",
    "feat.pdf.desc":   "Report completo con metriche chiave, parametri dell'immersione, inventario gas, grafico profilo, schedule deco, consumo gas e scenari lost-gas. Condividi o stampa tramite il pannello di condivisione di sistema.",
    "feat.save.title": "Piani salvati",
    "feat.save.desc":  "Dai un nome e salva qualsiasi piano generato. Barra laterale con lista piani che mostra profondità, tempo, gas, TTS e numero di stop. Carica o elimina con conferma in qualsiasi momento.",

    // Index — algorithms
    "algo.title": "Due algoritmi consolidati.<br>Un'unica app.",
    "algo.sub":   "Scegli il modello che si adatta alla tua formazione e al tuo stile di immersione.",
    "algo.buhl.desc":  "Lo standard di settore per la modellazione della decompressione a gas disciolti. Regola il conservatism con i gradient factors — GF Low controlla la profondità del primo stop, GF High il ceiling di risalita.",
    "algo.buhl.hint1": "Profondità primo stop",
    "algo.buhl.hint2": "Ceiling di risalita",
    "algo.vpm.desc":   "Modello a bolle che tiene conto della nucleazione delle microbolle. Regola il conservatism con un semplice slider 0–5 — nessuna conoscenza approfondita del modello richiesta.",
    "algo.vpm.hint":   "0 (aggressivo) → 5 (conservativo)",

    // Index — platforms
    "platforms.title": "macOS, Windows, Linux, iOS e Android.",
    "platforms.sub":   "Un'app, ogni piattaforma. Pianifica sul desktop, immergiti con lo smartphone — tutto offline.",

    // Index — offline banner
    "offline.title": "100% Offline. Sempre.",
    "offline.desc":  "Nessun Wi-Fi in barca? Nessun problema. RuntimeX non richiede alcuna connessione di rete — i piani vengono calcolati e salvati interamente sul tuo dispositivo. I tuoi dati non lasciano mai le tue mani.",

    // Index — settings
    "settings.title": "Configurato come vuoi tu",
    "settings.sub":   "Imposta i valori predefiniti una volta. Modificali per ogni immersione quando necessario.",

    // Index — download CTA
    "dl.cta.title": "Pronto a scaricare RuntimeX?",
    "dl.cta.sub":   "Disponibile per macOS, Windows, Linux e Android. Nessun account, nessun backend.",
    "dl.cta.dmg":   "Scarica DMG",
    "dl.cta.exe":   "Scarica EXE",
    "dl.cta.page":  "Pagina download",
    "dl.cta.brew":  "Tap Homebrew",

    // Download page — hero
    "dl.hero.badge": "v1.0.1 · tutte le piattaforme",
    "dl.hero.title": "Scarica <span class=\"accent\">RuntimeX</span>",
    "dl.hero.sub":   "Dive planner tecnico offline-first. Disponibile per macOS, Windows, Linux e Android. Nessun account, nessun backend — tutto gira sul tuo dispositivo.",
    "dl.meta.platforms": "macOS · Windows · Linux · Android",
    "dl.meta.privacy":   "Nessun account, nessun backend",
    "dl.meta.source":    "Build CI da repo privato",
    "dl.meta.label.platforms": "Piattaforme",
    "dl.meta.label.privacy":   "Privacy",
    "dl.meta.label.source":    "Sorgente",

    // Download page — macOS
    "dl.macos.badge": "DMG · Firmato e Notarizzato",
    "dl.macos.s1": "<strong>Scarica il DMG</strong> usando il pulsante a destra o con <code>curl</code>.",
    "dl.macos.s2": "<strong>Apri il DMG</strong> — fai doppio clic sul file scaricato per montarlo.",
    "dl.macos.s3": "<strong>Trascina RuntimeX in Applicazioni</strong> — trascina l'icona dell'app sul collegamento Applicazioni nella finestra del DMG.",
    "dl.macos.s4": "<strong>Avvia</strong> — apri RuntimeX dal Launchpad o da Spotlight. Poiché l'app è firmata e notarizzata da Apple, non apparirà nessun avviso di sicurezza.",
    "dl.macos.s5": "<strong>Espelli il DMG</strong> — tasto destro sul volume montato nel Finder ed espelli.",
    "dl.dl.label": "Download",
    "dl.sha.label": "Checksum SHA256",
    "dl.comingSoon": "presto disponibile",

    // Download page — iOS
    "dl.appStore.label": "Apri App Store",
    "dl.how.ios.1": "RuntimeX è ora disponibile su App Store.",
    "dl.how.ios.2": "Aprilo dall'App Store e installalo senza configurazioni aggiuntive.",

    // Download page — Homebrew
    "dl.brew.badge": "macOS · Terminale",
    "dl.brew.s1": "<strong>Installa Homebrew</strong> se non ce l'hai ancora — vedi <a href=\"https://brew.sh\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--accent)\">brew.sh</a>.",
    "dl.brew.s2": "<strong>Aggiungi il tap</strong> — questo registra il repository cask di RuntimeX in Homebrew.",
    "dl.brew.s3": "<strong>Installa il cask</strong> — Homebrew scarica e installa RuntimeX automaticamente.",
    "dl.brew.s4": "<strong>Aggiorna in seguito</strong> — esegui <code>brew upgrade --cask runtimex</code> quando è disponibile una nuova versione.",
    "dl.brew.s5": "<strong>Disinstalla</strong> — esegui <code>brew uninstall --cask runtimex</code> per rimuoverlo completamente.",
    "dl.brew.cmd.label": "Comandi da terminale",
    "dl.brew.repo":  "Apri il tap repo",
    "dl.brew.note":  "Il tap viene aggiornato automaticamente dalla CI dopo ogni release. Il SHA256 nel cask corrisponde sempre al file su <a href=\"/downloads/RuntimeX-macos.dmg\">/downloads/RuntimeX-macos.dmg</a>.",

    // Download page — Windows
    "dl.win.badge": "Installer EXE · x64",
    "dl.win.s1": "<strong>Scarica l'installer</strong> usando il pulsante a destra.",
    "dl.win.s2": "<strong>Esegui l'installer</strong> — doppio clic su <code>RuntimeX-windows.exe</code>. Windows potrebbe mostrare un avviso SmartScreen; clicca <em>Ulteriori informazioni → Esegui comunque</em>.",
    "dl.win.s3": "<strong>Segui il wizard</strong> — scegli la cartella di installazione (predefinita: <code>C:\\Programmi\\RuntimeX</code>) e crea opzionalmente un collegamento sul desktop.",
    "dl.win.s4": "<strong>Avvia</strong> — trova RuntimeX nel menu Start o sul desktop.",
    "dl.win.s5": "<strong>Disinstalla</strong> — usa <em>Aggiungi o Rimuovi Programmi</em> nelle Impostazioni di Windows.",

    // Download page — Linux
    "dl.linux.badge": "tar.gz · x64",
    "dl.linux.s1": "<strong>Scarica il tarball</strong> e verifica il checksum SHA256 se necessario.",
    "dl.linux.s2": "<strong>Estrailo</strong> in una cartella a tua scelta, ad esempio <code>~/.local/share/runtimex</code>.",
    "dl.linux.s3": "<strong>Avvia il binario</strong> — esegui <code>./runtimex</code> nella cartella estratta. Puoi aggiungerlo al <code>$PATH</code> o creare un desktop entry.",
    "dl.linux.s4": "<strong>Opzionale: crea un launcher</strong> — crea un file <code>.desktop</code> in <code>~/.local/share/applications/</code> per l'integrazione con Gnome/KDE.",
    "dl.linux.cmd.label": "Scarica e installa",

    // Download page — Android
    "dl.android.badge": "APK · arm64",
    "dl.android.s1": "<strong>Abilita sorgenti sconosciute</strong> — vai in <em>Impostazioni → App → Accesso speciale → Installa app sconosciute</em> e abilitalo per il browser o l'app File.",
    "dl.android.s2": "<strong>Scarica l'APK</strong> usando il pulsante a destra, direttamente sul tuo dispositivo Android.",
    "dl.android.s3": "<strong>Apri l'APK</strong> — tocca il file scaricato nelle notifiche o nell'app File e conferma l'installazione.",
    "dl.android.s4": "<strong>Avvia</strong> — trova RuntimeX nel cassetto delle app.",
    "dl.android.s5": "<strong>Aggiorna</strong> — installa il nuovo APK; se Android lo blocca, disinstalla prima la versione precedente.",
    "dl.android.cmd.label": "Download",
    "dl.android.warning": "Questo APK viene distribuito via CI e non tramite il Play Store. Devi abilitare <em>Installa app sconosciute</em> prima di installarlo.",

    // Download page — how to install (compact steps)
    "dl.how.title":       "Come installare",
    "dl.how.macos.1":     "Scegli DMG o Homebrew.",
    "dl.how.macos.2":     "DMG — apri il file scaricato e trascina RuntimeX nella cartella Applicazioni.",
    "dl.how.macos.3":     "Homebrew — copia il comando, incollalo nel Terminale e premi Invio.",
    "dl.how.macos.4":     "Prima volta? Esegui <code>brew trust garzuu/runtimex</code> una sola volta per abilitare gli aggiornamenti automatici con <code>brew upgrade --cask runtimex</code>.",
    "dl.how.macos.5":     "Bloccato da Gatekeeper? Vai in Impostazioni di Sistema → Privacy e Sicurezza → Apri comunque.",
    "dl.how.windows.1":   "Scarica e avvia l'installer.",
    "dl.how.windows.2":   "SmartScreen potrebbe apparire — clicca <em>Ulteriori informazioni → Esegui comunque</em>.",
    "dl.how.windows.3":   "Segui il wizard. Trovi RuntimeX nel menu Start al termine.",
    "dl.how.linux.1":     "Scarica il tarball.",
    "dl.how.linux.2":     "Estrai: <code>tar -xzf RuntimeX-linux.tar.gz -C ~/.local/share/runtimex</code>",
    "dl.how.linux.3":     "Avvia: <code>~/.local/share/runtimex/runtimex</code>",
    "dl.how.android.1":   "Abilita sorgenti sconosciute — <em>Impostazioni → App → Accesso speciale → Installa app sconosciute</em>.",
    "dl.how.android.2":   "Scarica l'APK sul tuo dispositivo.",
    "dl.how.android.3":   "Tocca il file scaricato e conferma l'installazione.",
    "dl.how.android.4":   "Per aggiornare, installa il nuovo APK; se Android lo blocca, disinstalla prima la versione precedente.",

    // Support page
    "support.title": "Supporto",
    "support.sub":   "Hai bisogno di aiuto con RuntimeX? Inizia da qui.",
    "support.faq.title": "Domande frequenti",
    "support.contact.title": "Contatti",
    "support.contact.desc": "Per bug, richieste di funzionalità o qualsiasi altra cosa, apri una issue su GitHub.",
    "support.contact.btn": "Apri una issue",

    // Privacy page
    "privacy.title": "Informativa sulla Privacy",

    // Footer
    "footer.copy": "MIT / Apache 2.0",
  },
};

function detectLocale() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && LOCALES.includes(saved)) return saved;
  } catch (_) {}
  return navigator.language?.startsWith("it") ? "it" : "en";
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (_) {}

  const t = T[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key in t) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (key in t) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key in t) el.title = t[key];
  });

  // Update toggle button label to show opposite language
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "en" ? "IT" : "EN";
}

function initI18n() {
  const lang = detectLocale();
  applyLang(lang);

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.lang || "en";
    applyLang(current === "en" ? "it" : "en");
  });
}

// Auto-init when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
