# Janniks Bau-Advent 2026

Responsive, buildless Adventskalender mit 24 korrigierten Original-PDFs. Die Freischaltung erfolgt in `Europe/Berlin` ab 00:00 Uhr des jeweiligen Dezembertags 2026. Danach bleiben alle vergangenen Tage verfügbar.

## Betrieb

`docs/` auf einem Webserver bereitstellen (z. B. GitHub Pages). `npm test` prüft deutsche Mitternacht, Jahreswechsel und alle 24 PDFs.

## Zugriff

Die Datumssperre arbeitet im Browser und ist kein serverseitiger Schutz. Wer Quellcode oder Gerätezeit verändert, kann spätere PDFs vorzeitig aufrufen. Kein öffentliches Repository verwenden, wenn die Dateien verborgen bleiben sollen. Für echte Zugriffskontrolle ist ein Backend erforderlich. Die Sites-Veröffentlichung startet privat.

Die korrigierte Zuordnung wird nicht öffentlich mit ausgeliefert. PDF-Dateinamen wurden unverändert übernommen. Figurenanleitung am Ende von Tag 1, Korrekturen für Schritt 228 an Tag 12 und Schritt 442 an Tag 23.

Für eine erneute Veröffentlichung auf ChatGPT Sites den Inhalt von `docs/` beim Paketieren vorübergehend als `dist/` bereitstellen. Das Sites-Manifest verweist auf diesen Deployment-Ordner.
