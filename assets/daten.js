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
    id: "OKR-2026-2-01", typ: "kurs", rubrik: "gesundheit",
    titel: "Wir bleiben in Bewegung mit Wassergymnastik – Dienstags-Gruppe",
    beschreibung: "Gymnastik im warmen Wasser – schonend für die Gelenke, für alle Altersgruppen geeignet.",
    optionen: [
      { bezeichnung: "", kursleiter: "Clarissa Preußer", start: "2026-08-18", wochentag: "Dienstag", uhrzeit: "13:45 Uhr", ort: "Schwimmhalle Schleswig, kleines Becken", anzahl: 16, preis: 80, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-02", typ: "kurs", rubrik: "gesundheit",
    titel: "Wir bleiben in Bewegung mit Wassergymnastik – Freitags-Gruppe",
    beschreibung: "Gymnastik im warmen Wasser – schonend für die Gelenke, für alle Altersgruppen geeignet.",
    optionen: [
      { bezeichnung: "", kursleiter: "Tanja Schimmer", start: "2026-08-21", wochentag: "Freitag", uhrzeit: "11:45 Uhr", ort: "Schwimmhalle Schleswig, kleines Becken", anzahl: 16, preis: 80, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-03", typ: "kurs", rubrik: "gesundheit",
    titel: "Physiosport für den Rücken",
    beschreibung: "Kräftigung und Mobilisation für einen gesunden Rücken. Hinweis: Bitte Matte oder Wolldecke mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Martina Henningsen", start: "2026-08-17", wochentag: "Montag", uhrzeit: "16:30 – 17:30 Uhr", ort: "Dag-Hammarskjöld-Haus, Schuby, Bahnhofstr. 3", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-04", typ: "kurs", rubrik: "sport",
    titel: "Bodyfit für Jedermann",
    beschreibung: "Ganzkörpertraining für alle Fitnesslevel. Hinweis: Sportbekleidung und Handtuch mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Claudia Crusius", start: "2026-08-20", wochentag: "Donnerstag", uhrzeit: "16:45 – 17:45 Uhr", ort: "Schule Schuby, Turnhalle", anzahl: 10, preis: 27, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-05", typ: "kurs", rubrik: "sport",
    titel: "Line Dance Anfängergruppe",
    beschreibung: "Line Dance zu Country-Musik, Rock&Pop, Schlager und Oldies – ohne Partner, für jede Altersschicht.",
    optionen: [
      { bezeichnung: "", kursleiter: "Marianne Scheel", start: "2026-08-18", wochentag: "Dienstag", uhrzeit: "17:30 – 18:30 Uhr", ort: "Dag-Hammarskjöld-Haus, Schuby, Bahnhofstr. 3", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-06", typ: "kurs", rubrik: "sport",
    titel: "Line Dance Gruppe 1",
    beschreibung: "Line Dance zu Country-Musik, Rock&Pop, Schlager und Oldies – ohne Partner, für jede Altersschicht.",
    optionen: [
      { bezeichnung: "", kursleiter: "Marianne Scheel", start: "2026-08-20", wochentag: "Donnerstag", uhrzeit: "17:00 – 18:00 Uhr", ort: "Dag-Hammarskjöld-Haus, Schuby, Bahnhofstr. 3", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-07", typ: "kurs", rubrik: "sport",
    titel: "Line Dance Gruppe 2",
    beschreibung: "Line Dance zu Country-Musik, Rock&Pop, Schlager und Oldies – ohne Partner, für jede Altersschicht.",
    optionen: [
      { bezeichnung: "", kursleiter: "Manuela Clausen", start: "2026-08-20", wochentag: "Donnerstag", uhrzeit: "18:00 – 19:00 Uhr", ort: "Dag-Hammarskjöld-Haus, Schuby, Bahnhofstr. 3", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-08", typ: "kurs", rubrik: "allgemein",
    titel: "Orientalisches Trommeln",
    beschreibung: "Die Welt des Rhythmus gemeinsam entdecken – unabhängig von Alter, Kultur und musikalischer Vorerfahrung.",
    optionen: [
      { bezeichnung: "", kursleiter: "Horst Damm", start: "2026-08-25", wochentag: "Dienstag", uhrzeit: "18:30 – 19:30 Uhr", ort: "Haus der ehemaligen Sozialstation", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-09", typ: "kurs", rubrik: "allgemein",
    titel: "Orientalisches Trommeln für Anfänger",
    beschreibung: "Einstieg ins Trommeln – unabhängig von Alter, Kultur und musikalischer Vorerfahrung.",
    optionen: [
      { bezeichnung: "", kursleiter: "Eleonore Burzlaff", start: "2026-08-19", wochentag: "Mittwoch", uhrzeit: "18:30 – 19:30 Uhr", ort: "Schule Schuby", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-10", typ: "kurs", rubrik: "sport",
    titel: "Outdoorsport – Bewegung an frischer Luft",
    beschreibung: "Dehn-, Streck-, Lauf-, Koordinations- und Entspannungsübungen an der frischen Luft (angelehnt an Heigl).",
    optionen: [
      { bezeichnung: "", kursleiter: "Martina Henningsen", start: "2026-08-17", wochentag: "Montag", uhrzeit: "15:15 – 16:15 Uhr", ort: "Schule Schuby", anzahl: 10, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-11", typ: "kurs", rubrik: "koch",
    titel: "Gerichte zum Erntedank",
    beschreibung: "Gemeinsames herbstliches Kochen. Hinweis: Bitte kleine Behältnisse mitbringen. Kursgebühr zzgl. Kochumlage.",
    optionen: [
      { bezeichnung: "Termin 1", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2026-11-02", wochentag: "Montag", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: null },
      { bezeichnung: "Termin 2", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2026-11-03", wochentag: "Dienstag", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: null },
      { bezeichnung: "Termin 3", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2026-11-09", wochentag: "Montag", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: null },
      { bezeichnung: "Termin 4", kursleiter: "Kirsten Krummpeter (Kirstens Köök)", start: "2026-11-11", wochentag: "Mittwoch", uhrzeit: "18:30 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-12", typ: "kurs", rubrik: "allgemein",
    titel: "Workshop Malen mit Acrylfarben",
    beschreibung: "Verschiedene Techniken mit verschiedenen Materialien. Hinweis: Vorhandenes Material bitte mitbringen.",
    optionen: [
      { bezeichnung: "", kursleiter: "Robert Schulze", start: "2026-10-06", wochentag: "Dienstag", uhrzeit: "15:00 – 18:00 Uhr", ort: "Ehemalige Sozialstation, Boyebüll 8", anzahl: 1, preis: 9, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-13", typ: "kurs", rubrik: "allgemein",
    titel: "Kerzen Workshop",
    beschreibung: "Zwei individuelle Kerzenständer aus Gips und zehn Stabkerzen gestalten – ganz nach eigenem Geschmack (dippen und verzieren mit Schiebefolie). Materialien werden gestellt.",
    optionen: [
      { bezeichnung: "", kursleiter: "Hella Kleinschmidt", start: "2026-11-10", wochentag: "Dienstag", uhrzeit: "19:00 – 21:00 Uhr", ort: "Begegnungsstätte Boyebüll 8, Schuby", anzahl: 1, preis: 35, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-14", typ: "kurs", rubrik: "allgemein",
    titel: "Ohrringe selber gestalten – Fimo-Workshop",
    beschreibung: "Aus einer großen Anzahl fertiger Fimo-Schmuckteile persönliche Ohrringe zusammenstellen. 25 € für 2 Ohrring-Paare, jedes weitere Paar 10 € extra.",
    optionen: [
      { bezeichnung: "", kursleiter: "Hella Kleinschmidt", start: "2026-09-30", wochentag: "Mittwoch", uhrzeit: "19:00 – 20:30 Uhr", ort: "Begegnungsstätte Boyebüll 8, Schuby", anzahl: 1, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-15", typ: "kurs", rubrik: "gesundheit",
    titel: "Kundalini Yoga",
    beschreibung: "Neuer Kurs – der Einstieg ist jederzeit möglich!",
    optionen: [
      { bezeichnung: "", kursleiter: "Martina Rathjen", start: "2026-08-25", wochentag: "Dienstag", uhrzeit: "19:00 – 20:15 Uhr", ort: "Gemeinderaum der Kirche, Bahnhofstraße, Schuby", anzahl: 10, preis: 60, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-16", typ: "kurs", rubrik: "allgemein",
    titel: "Rum Latino – Se habla español",
    beschreibung: "Rum-Tasting mit Ingo Annies als Moderator. Vorgestellt werden 6 Rum aus dem spanischsprachigen Raum. Kosten sind vorab zu überweisen. Dauer ca. 2,5 Stunden.",
    optionen: [
      { bezeichnung: "", kursleiter: "Ingo Annies", start: "2026-10-23", wochentag: "Freitag", uhrzeit: "19:30 Uhr", ort: "Sportlerheim", anzahl: 1, preis: 25, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-17", typ: "kurs", rubrik: "koch",
    titel: "Männer kochen",
    beschreibung: "Gemeinsames Kochen für Männer. Hinweis: Bitte kleine Behältnisse mitbringen. Kursgebühr zzgl. Kochumlage.",
    optionen: [
      { bezeichnung: "Termin 1", kursleiter: "Gerd Kesseler", start: "2026-10-14", wochentag: "Mittwoch", uhrzeit: "19:00 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: null },
      { bezeichnung: "Termin 2", kursleiter: "Gerd Kesseler", start: "2026-11-11", wochentag: "Mittwoch", uhrzeit: "19:00 Uhr", ort: "Schule Schuby", anzahl: 1, preis: 8, kursbegrenzung: null }
    ]
  },

  {
    id: "OKR-2026-2-18", typ: "kurs", rubrik: "gesundheit",
    titel: "Erste Hilfe für den Hund ( Mit dem eigenen Hund)",
    beschreibung: "Handeln im Notfall ( Wundversorgung usw. alles im Notfall zu handel",
    optionen: [
      { bezeichnung: "", kursleiter: "Sarah Kreimendahl u. Katharina Bündel", start: "2026-09-27", wochentag: "Sonntag", uhrzeit: "10.00", ort: "Schuby Boyebüll 8", anzahl: 1, preis: 35, kursbegrenzung: 15 }
    ]
  },

  {
    id: "OKR-2026-2-19", typ: "kurs", rubrik: "gesundheit",
    titel: "Erste Hilfe für den Hund ( Mit dem eigenen Hund)",
    beschreibung: "Handeln im Notfall ( Wundversorgung usw. alles im Notfall zu handel",
    optionen: [
      { bezeichnung: "", kursleiter: "Sarah Kreimendahl u. Katharina Bündel", start: "2026-09-27", wochentag: "Sonntag", uhrzeit: "10.00", ort: "Schuby Boyebüll 8", anzahl: 1, preis: 35, kursbegrenzung: 15 }
    ]
  },

  {
    id: "OKR-2026-2-20", typ: "kurs", rubrik: "allgemein",
    titel: "IPad und IPhone für Senioren",
    beschreibung: "Sie lernen den Umgang mit Ihrem eigenen Gerät",
    optionen: [
      { bezeichnung: "", kursleiter: "Matthias Alexander", start: "2026-09-14", wochentag: "Montag", uhrzeit: "17.30", ort: "Schuby, Boyebüll 8", anzahl: 10, preis: 50, kursbegrenzung: 12 }
    ]
  }
];
