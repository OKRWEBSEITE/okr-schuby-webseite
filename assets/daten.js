/* ============================================================
   OrtsKulturRing Schuby e.V. – Termin- und Kursdaten
   ------------------------------------------------------------
   PHASE 2: Noch STATISCHE Beispieldaten (aus der echten Kursliste
   2. Halbjahr 2025). Ab Phase 4 ersetzt/ergänzt durch Google Sheets.

   Struktur:
   - typ: "kurs" | "veranstaltung"
   - Kurse haben zusätzlich: rubrik (sport/gesundheit/allgemein/koch/sprache/kinder)
   - Veranstaltungen haben zusätzlich: veranstaltungsart (buerger/allgemein)

   Kurs-ID-Schema (Vorschlag): OKR-<Jahr>-<Halbjahr>-<lfd. Nr.>
   ============================================================ */

const RUBRIK_META = {
  sport:      { label: "Sportkurse",       farbe: "#2B7DA0" },  /* abgedunkelt für WCAG AA (4,6:1 statt 4,1:1) */
  gesundheit: { label: "Gesundheitskurse", farbe: "#27837D" },  /* abgedunkelt für WCAG AA (4,5:1 statt 3,3:1) */
  allgemein:  { label: "Allgemeine Kurse", farbe: "#6B7280" },
  koch:       { label: "Kochkurs",         farbe: "#AD6220" },  /* abgedunkelt für WCAG AA (4,6:1 statt 3,1:1) */
  sprache:    { label: "Sprachkurse",      farbe: "#7C5CBF" },
  kinder:     { label: "Kinderkurse",      farbe: "#986E1F", icon: "assets/kinderkurse-icon.png" }  /* abgedunkelt für WCAG AA (4,6:1 statt 2,2:1) */
};

const VERANSTALTUNG_META = {
  buerger:   { label: "Bürger im Gespräch",  farbe: "#A43020" },
  allgemein: { label: "Allgemeine Termine",  farbe: "#1D5A8C" }
};

const TERMINE = [

];
