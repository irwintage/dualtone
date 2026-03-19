════════════════════════════════════════════════════════
  DUALTONE — Chrysasynth Wellness
  Version 1.0
════════════════════════════════════════════════════════

DESCRIPTION
───────────
DualTone is a dual-source ambient sound environment built
as a Progressive Web App (PWA) by Chrysasynth.

Two independent sound sources (A and B) can be selected
from a library of 12 sounds across 4 categories.
A crossfader controls the mix between the two sources
in real time — from 100% A to 100% B, or any blend in between.

All audio is generated synthetically using the Web Audio API
via Tone.js. No external audio files are required.


SOUND LIBRARY — 12 SOUNDS × 3 VARIANTS EACH
─────────────────────────────────────────────

ATMOSPHERES
  · Ambient Drone     — Soft Haze / Far Veil / Celestial Echo
  · Harmonic Drone    — Pure Fifth / Deep Octave / Open Triad
  · Synth Pad         — Warm Pad / Cold Pad / Ethereal Pad

NATURE
  · Soft Rain         — Light Drizzle / Summer Rain / Deep Shower
  · Mountain Wind     — Gentle Breeze / Deep Wind / Distant Gust
  · Deep Cave         — Low Resonance / Wet Echo / Mineral Breath

TEXTURES
  · Living Textures   — Fire / Underwater / Thunder
  · Granular Texture  — Fine Grains / Slow Grains / Sound Dust
  · Metal Resonance   — Tibetan Bowl / Deep Bell / Wind Chime

SACRED
  · Chakra Tone       — Root 396Hz / Heart 341Hz / Crown 172Hz
  · Sacred Frequencies — 528 Hz / 396 Hz / 432 Hz
  · Binaural Beat     — Delta 2Hz / Theta 6Hz / Alpha 10Hz


HOW TO USE
──────────
1. Open the app and tap "Enable Audio" to activate the audio engine.
2. Tap the Source A orb (left) or Source B orb (right) to enter
   selection mode — a hint will appear below the crossfader.
3. Tap any sound card in the grid to assign it to the active source.
4. Tap a card already assigned to cycle through its 3 variants.
5. Drag the crossfader to blend between Source A and Source B.
   Center position = 50/50 equal mix.


FILE STRUCTURE
──────────────
dualtone/
├── index.html              Main app file
├── manifest.json           PWA manifest
├── service-worker.js       Offline support
├── Tone.js                 Web Audio engine (Tone.js v14.8.49)
├── icon-192.png            App icon (192×192)
├── icon-512.png            App icon (512×512)
└── fonts/
    ├── cinzel-v26-latin-regular.woff2
    ├── cinzel-v26-latin-500.woff2
    ├── inter-v20-latin-300.woff2
    ├── inter-v20-latin-regular.woff2
    └── inter-v20-latin-500.woff2


OFFLINE SUPPORT
───────────────
DualTone works fully offline after the first visit.
The service worker caches all assets on first load.
No internet connection is required for subsequent use.
To update the app after changes, increment the cache
version in service-worker.js (CACHE_NAME = 'dualtone-v2').


TECHNICAL NOTES
───────────────
· Built with HTML / CSS / JavaScript — no framework
· Audio engine : Tone.js v14.8.49 (Web Audio API)
· All sounds are synthesized in real time — no audio files
· Equal-power crossfade algorithm for smooth blending
· Fonts : Cinzel (display) + Inter (UI) — loaded locally
· PWA installable on iOS (Safari) and Android (Chrome)


DEPLOYMENT
──────────
Upload all files to your Hostinger directory maintaining
the exact folder structure above. The app is accessible
via direct URL and can be added to the home screen on
mobile devices as a standalone app.

For iOS installation :
  Safari → Share → Add to Home Screen

For Android installation :
  Chrome → Menu → Add to Home Screen


CREDITS
───────
Designed & developed by Chrysasynth
Part of the FORGE Wellness collection
chrysasynth.com

════════════════════════════════════════════════════════
