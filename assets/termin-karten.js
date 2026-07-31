/* ============================================================
   OrtsKulturRing Schuby e.V. – gemeinsame Termin-/Kurskarten-Logik
   ------------------------------------------------------------
   Wird von termine.html UND index.html (Rubrik "Bürger im Gespräch")
   verwendet, damit überall exakt dieselbe Kachel-Optik entsteht.
   Voraussetzung: assets/daten.js ist bereits eingebunden
   (liefert TERMINE, RUBRIK_META, VERANSTALTUNG_META).
   ============================================================ */

function formatDatum(datumStr){
  const d = new Date(datumStr + "T00:00:00");
  return d.toLocaleDateString("de-DE", { day:"2-digit", month:"2-digit", year:"2-digit" });
}

function rubrikMetaFuer(termin){
  return termin.typ === "kurs" ? RUBRIK_META[termin.rubrik] : VERANSTALTUNG_META[termin.veranstaltungsart];
}

function terminKatKey(termin){
  return termin.typ === "kurs" ? "kurs:" + termin.rubrik : "veranstaltung:" + termin.veranstaltungsart;
}

function badgeHtml(termin){
  const meta = rubrikMetaFuer(termin);
  const iconHtml = meta.icon ? `<img src="${meta.icon}" alt="">` : "";
  let html = `<span class="rubrik-badge" style="background:${meta.farbe}">${iconHtml}${meta.label}</span>`;
  if (termin.typ === "veranstaltung") {
    html += `<span class="termin-badge gratis">Kostenlos</span>`;
  }
  return html;
}

/* Zusätzliches, optionales Textfeld (z. B. "Bitte Sportbekleidung mitbringen") –
   wird nur angezeigt, wenn tatsächlich befüllt. Gilt für alle Termine/Kurse. */
function hinweisHtml(termin){
  if (!termin.hinweis) return "";
  return `<p class="termin-hinweis">${termin.hinweis}</p>`;
}

function kartenHtml(termin){
  const opts = termin.optionen;
  const mehrereOptionen = opts.length > 1;

  let optionenHtml = "";
  if (mehrereOptionen) {
    optionenHtml = `<ul class="kurs-optionen">` + opts.map(o => `
      <li>
        <span class="opt-title">${o.bezeichnung || o.wochentag}: ${formatDatum(o.start)}, ${o.uhrzeit}</span>
        ${o.kursleiter} · ${o.ort}${o.preis ? ` · <span class="kurs-preis">${o.preis.toFixed(2).replace(".", ",")} €</span>` : ""}
      </li>`).join("") + `</ul>`;
  } else {
    const o = opts[0];
    optionenHtml = `
      <p class="termin-meta"><strong>${termin.typ === "kurs" ? "Start" : "Termin"}:</strong> ${o.wochentag}, ${formatDatum(o.start)}, ${o.uhrzeit}</p>
      <p class="termin-meta"><strong>${termin.typ === "kurs" ? "Kursleitung" : "Referent/in"}:</strong> ${o.kursleiter}</p>
      <p class="termin-meta"><strong>Ort:</strong> ${o.ort}</p>
      ${termin.typ === "kurs" ? `<p class="termin-meta"><strong>Kosten:</strong> ${o.anzahl} × Termine, <span class="kurs-preis">${o.preis.toFixed(2).replace(".", ",")} €</span></p>` : ""}
    `;
  }

  const footer = termin.typ === "kurs"
    ? `<div class="card-footer">
         <a class="btn btn-primary" href="anmeldung.html?kurs=${encodeURIComponent(termin.id)}">Jetzt anmelden</a>
         <span class="keine-anmeldung">Kurs-Nr. ${termin.id}</span>
       </div>`
    : `<div class="card-footer"><span class="keine-anmeldung">Ohne Anmeldung — einfach vorbeikommen.</span></div>`;

  return `
    <article class="termin-card">
      <div class="badge-row">${badgeHtml(termin)}</div>
      <h3>${termin.titel}</h3>
      <p class="termin-meta">${termin.beschreibung}</p>
      ${optionenHtml}
      ${hinweisHtml(termin)}
      ${footer}
    </article>`;
}
