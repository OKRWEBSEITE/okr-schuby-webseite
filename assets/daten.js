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

  {
    id: "OKR-2025-2-01", typ: "kurs", rubrik: "gesundheit",
    titel: "Wir bleiben in Bewegung mit Wassergymnastik",
    beschreibung: "Gymnastik im warmen Wasser – schonend für die Gelenke, für alle Altersgruppen geeignet.",
    optionen: [
      { bezeichnung: "Dienstags-Gruppe", kursleiter: "Clarissa Preußer", start: "2025-09-09", wochentag: "Dienstag", uhrzeit: "13:45 Uhr", ort: "Schwimmhalle Schleswig, kleines Becken", anzahl: 10, preis: 50, kursbegrenzung: 15 },
      { bezeichnung: "Freitags-Gruppe", kursleiter: "Tanja Schimmer", start: "2025-09-12", wochentag: "Freitag", uhrzeit: "12:00 Uhr", ort: "Schwimmhalle Schleswig, kleines Becken", anzahl: 10, preis: 50, kursbegrenzung: 15 }
    ]
  },
  {
    id: "OKR-2025-2-02", typ: "kurs", rubrik: "gesundheit",
    titel: "Physiosport für den Rücken",
    beschreibung: "Kräftigung und Mobilisation für einen gesunden Rücken.",
    hinweis: "Bitte Matte oder Wolldecke mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Martina Henningsen", start: "2025-09-22", wochentag: "Montag", uhrzeit: "16:30 – 17:30 Uhr", ort: "Schule Schuby", anzahl: 10, preis: 25, kursbegrenzung: 12 }
    ]
  },
  {
    id: "OKR-2025-2-03", typ: "kurs", rubrik: "allgemein",
    titel: "Malen und Zeichnen mit Bleistift, Kohle und Pastellfarben",
    beschreibung: "Zeichentechniken für Einsteiger und Fortgeschrittene. Zzgl. Materialumlage.",
    optionen: [
      { bezeichnung: "", kursleiter: "Robert Schulze", start: "2025-09-16", wochentag: "Dienstag", uhrzeit: "10:00 – 11:30 Uhr", ort: "Haus der ehem. Diakoniestation Schuby", anzahl: 10, preis: 44, kursbegrenzung: 12 }
    ]
  },
  {
    id: "OKR-2025-2-04", typ: "kurs", rubrik: "sport",
    titel: "Bodyfit für Jedermann",
    beschreibung: "Ganzkörpertraining für alle Fitnesslevel.",
    hinweis: "Sportbekleidung und Handtuch mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Claudia Crusius", start: "2025-09-11", wochentag: "Donnerstag", uhrzeit: "16:45 – 17:45 Uhr", ort: "Schule Schuby, Turnhalle", anzahl: 10, preis: 27, kursbegrenzung: 15 }
    ]
  },
  {
    id: "OKR-2025-2-05", typ: "kurs", rubrik: "sport",
    titel: "Dance Anfängergruppe (Line Dance)",
    beschreibung: "Line Dance zu Country, Rock&Pop, Schlager und Oldies – ohne Partner, für jede Altersschicht.",
    optionen: [
      { bezeichnung: "", kursleiter: "Marianne Scheel", start: "2025-09-11", wochentag: "Donnerstag", uhrzeit: "17:00 – 18:00 Uhr", ort: "Schule Schuby", anzahl: 7, preis: 16.50, kursbegrenzung: 16 }
    ]
  },
  {
    id: "OKR-2025-2-06", typ: "kurs", rubrik: "sport",
    titel: "Line Dance (Fortgeschrittene)",
    beschreibung: "Line Dance zu Country, Rock&Pop, Schlager und Oldies – ohne Partner, für jede Altersschicht.",
    optionen: [
      { bezeichnung: "", kursleiter: "Marianne Scheel", start: "2025-09-11", wochentag: "Donnerstag", uhrzeit: "18:00 – 19:00 Uhr", ort: "Schule Schuby", anzahl: 7, preis: 16.50, kursbegrenzung: 16 }
    ]
  },
  {
    id: "OKR-2025-2-07", typ: "kurs", rubrik: "allgemein",
    titel: "Orientalisches Trommeln",
    beschreibung: "Die Welt des Rhythmus gemeinsam entdecken – unabhängig von Alter, Kultur und musikalischer Vorerfahrung.",
    optionen: [
      { bezeichnung: "", kursleiter: "Horst Damm", start: "2025-09-09", wochentag: "Dienstag", uhrzeit: "18:30 – 19:30 Uhr", ort: "Haus der ehemaligen Sozialstation", anzahl: 10, preis: 25, kursbegrenzung: 12 }
    ]
  },
  {
    id: "OKR-2025-2-08", typ: "kurs", rubrik: "allgemein",
    titel: "Orientalisches Trommeln für Anfänger",
    beschreibung: "Einstieg ins Trommeln.",
    hinweis: "Eigene Trommel bitte mitbringen, falls vorhanden.",
    optionen: [
      { bezeichnung: "", kursleiter: "Eleonore Burzlaff", start: "2025-09-10", wochentag: "Mittwoch", uhrzeit: "18:30 – 19:30 Uhr", ort: "Treffpunkt Parkplatz Schule Schuby", anzahl: 5, preis: 12.50, kursbegrenzung: 10 }
    ]
  },
  {
    id: "OKR-2025-2-09", typ: "kurs", rubrik: "kinder",
    titel: "Hobbyhorse",
    beschreibung: "Reiten ohne Pferd – für alle, die Spaß an Bewegung und Choreografie haben.",
    hinweis: "Sportbekleidung, eigenes Steckenpferd falls vorhanden mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Justine Villain", start: "2025-09-11", wochentag: "Donnerstag", uhrzeit: "15:00 – 16:00 Uhr", ort: "Sporthalle Schuby", anzahl: 10, preis: 15, kursbegrenzung: 12 }
    ]
  },
  {
    id: "OKR-2025-2-10", typ: "kurs", rubrik: "sport",
    titel: "Outdoorsport – Bewegung an frischer Luft",
    beschreibung: "Dehn-, Streck-, Lauf-, Koordinations- und Entspannungsübungen an der frischen Luft (angelehnt an Heigl).",
    optionen: [
      { bezeichnung: "", kursleiter: "Martina Henningsen", start: "2025-09-22", wochentag: "Montag", uhrzeit: "15:15 – 16:15 Uhr", ort: "Schule Schuby", anzahl: 10, preis: 25, kursbegrenzung: 12 }
    ]
  },
  {
    id: "OKR-2025-2-11", typ: "kurs", rubrik: "koch",
    titel: "Weihnachten & Co.",
    beschreibung: "Gemeinsames weihnachtliches Kochen. Kursgebühr zzgl. Kochumlage.",
    hinweis: "Bitte kleine Behältnisse mitbringen.",
    optionen: [
      { bezeichnung: "Termin 1", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2025-11-10", wochentag: "Montag", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: 10 },
      { bezeichnung: "Termin 2", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2025-11-11", wochentag: "Dienstag", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: 10 },
      { bezeichnung: "Termin 3", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2025-11-18", wochentag: "Dienstag", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: 10 }
    ]
  },
  {
    id: "OKR-2025-2-12", typ: "kurs", rubrik: "kinder",
    titel: "Musikalische Früherziehung",
    beschreibung: "Für Kinder von 4–6 Jahren. Anmeldung/Rückfragen auch bei Anneke Hinz, 0160 98778104.",
    hinweis: "Bitte dicke Socken oder Hausschuhe mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Diana Marten", start: "2025-09-15", wochentag: "Montag", uhrzeit: "15:30 – 16:30 Uhr", ort: "Musikraum Grundschule Schuby", anzahl: 10, preis: 80, kursbegrenzung: 10 }
    ]
  },

  /* ---- Veranstaltungen: ohne Anmeldung ---- */
  {
    id: "OKR-2025-2-BIG-01", typ: "veranstaltung", veranstaltungsart: "buerger",
    titel: "Tipps für gesunde und ausgewogene Ernährung – Die Mischung macht's!",
    beschreibung: "Referentin: Peggy Dambach, AOK Nordwest. Ohne Anmeldung – einfach vorbeikommen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Peggy Dambach (AOK Nordwest)", start: "2025-10-14", wochentag: "Dienstag", uhrzeit: "19:00 Uhr", ort: "Dag-Hammarskjöld-Haus, Bahnhofstr. 3", anzahl: 1, preis: 0, kursbegrenzung: null }
    ]
  },
  {
    id: "OKR-2025-2-BIG-02", typ: "veranstaltung", veranstaltungsart: "buerger",
    titel: "„Drohnen“ (unbemannte Luftfahrzeuge) – Was können die? Was dürfen die?",
    beschreibung: "Referent: Michael Frank Stever. Ohne Anmeldung – einfach vorbeikommen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Michael Frank Stever", start: "2025-11-11", wochentag: "Dienstag", uhrzeit: "19:00 Uhr", ort: "Dag-Hammarskjöld-Haus, Bahnhofstr. 3", anzahl: 1, preis: 0, kursbegrenzung: null }
    ]
  },
  {
    id: "OKR-2025-2-ALLG-01", typ: "veranstaltung", veranstaltungsart: "allgemein",
    titel: "Beispiel: Allgemeiner Vereinstermin (Platzhalter)",
    beschreibung: "Dieses Kärtchen zeigt nur das Design für allgemeine Termine (z. B. Vorstandssitzungen). Echte Termine folgen über die hochgeladene Terminliste.",
    optionen: [
      { bezeichnung: "", kursleiter: "Terminverwalter", start: "2025-09-20", wochentag: "Samstag", uhrzeit: "10:00 Uhr", ort: "wird noch bekanntgegeben", anzahl: 1, preis: 0, kursbegrenzung: null }
    ]
  }
];
