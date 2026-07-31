/* ============================================================
   OrtsKulturRing Schuby e.V. – Flyer-Versionen
   ------------------------------------------------------------
   PHASE 5: Noch statische Liste. Ab Phase 6 verwaltet das
   Pflegetool diese Liste automatisch: beim Hochladen eines neuen
   Flyers wird die bisherige "aktuell"-Version automatisch mit
   aktuell:false ins Archiv verschoben und die neue Version oben
   ergänzt.
   ============================================================ */

const FLYER_VERSIONEN = [
  {
    version: "2024-1",
    titel: "Kursflyer 1. Halbjahr 2024",
    datum: "2024-01-01",
    datei: "Flyer_OKR_2024-1.pdf",
    aktuell: true
  }
];
