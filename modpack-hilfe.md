---
layout: default
title: Modpack Hilfe
nav_order: 5
permalink: /modpack-hilfe.html
---

<!-- AUTO_UPDATED_START -->
<p class="np-last-updated">Zuletzt aktualisiert: 09.06.2026 13:12 Uhr</p>
<!-- AUTO_UPDATED_END -->

<section class="echo-page-box echo-page-box-help">
  <div class="echo-page-image">
    <img
      src="{{ site.baseurl }}/assets/images/echo/mphelp.png"
      alt="ECHO hilft bei Modpack-Fragen"
      width="512"
      height="512"
      loading="lazy"
      decoding="async">
  </div>

  <div class="echo-page-content">
    <p class="echo-page-kicker">ECHO – Der Wegbegleiter</p>
    <h2>Modpack-Hilfe für Einstieg, Technik und einzelne Mods.</h2>
    <p>
      Hier sammelt ECHO alle wichtigen Hilfen rund um NewPath: Installation, RAM-Zuweisung,
      Voice Chat, typische Startprobleme und später auch kurze Guides zu einzelnen Mods.
    </p>
  </div>
</section>

<section class="np-page-section np-help-section">
  <div class="np-section-header">
    <p class="np-eyebrow">Modpack Hilfe</p>
    <h1 class="np-title">Alles Wichtige für Installation und Technik.</h1>
    <p class="np-lead">
      Die Modpack Hilfe ist die zentrale Hilfebibliothek für <strong>NewPath – Echoes of the Wild</strong>.
      Sie ersetzt keine Support-Tickets, soll aber die häufigsten Fragen so erklären, dass neue Spieler
      schnell selbst weiterkommen.
    </p>
  </div>

  <div class="np-note np-help-note">
    <strong>Hinweis:</strong> Die Bereiche sind bewusst aufklappbar. So bleibt die Seite übersichtlich,
    auch wenn später Bilder, Schritt-für-Schritt-Grafiken und einzelne Mod-Guides ergänzt werden.
  </div>

  <div class="np-card-grid np-card-grid-4 np-help-grid" id="mitspielen">
    <a class="np-info-card np-help-tile" href="#installation">
      <strong class="np-card-title">Installation</strong>
      <span class="np-card-text">NewPath über CurseForge installieren</span>
    </a>

    <a class="np-info-card np-help-tile" href="#ram">
      <strong class="np-card-title">RAM zuweisen</strong>
      <span class="np-card-text">Arbeitsspeicher im Launcher prüfen</span>
    </a>

    <a class="np-info-card np-help-tile" href="#voice-chat">
      <strong class="np-card-title">Voice Chat</strong>
      <span class="np-card-text">Mikrofon, Lautstärke und Gruppen</span>
    </a>

    <a class="np-info-card np-help-tile" href="#probleme">
      <strong class="np-card-title">Probleme & Support</strong>
      <span class="np-card-text">Startprobleme und typische Fehler</span>
    </a>
  </div>
</section>

<section class="np-page-section np-help-section np-help-module-section">
  <div class="np-section-header">
    <p class="np-eyebrow">Hilfemodule</p>
    <h1 class="np-title">Anleitungen im Detail</h1>
    <p class="np-lead">
      Die folgenden Module sind als Vorlage aufgebaut: links steht der Erklärungstext,
      rechts ist Platz für Bilder, Screenshots oder kleine Schritt-für-Schritt-Grafiken.
      Wichtige Hinweise können direkt im jeweiligen Modul hervorgehoben werden.
    </p>
  </div>

  <!-- =====================================================
       MODUL: Installation
       Bearbeitung:
       - TEXTBEREICH links anpassen
       - BILDBEREICH rechts mit <img> ersetzen
       - HINWEISBOX optional behalten, ändern oder entfernen
       ===================================================== -->
  <details id="installation" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">01</span>
      <span class="np-help-module-title">NewPath über CurseForge installieren</span>
      <span class="np-help-module-meta">Setup</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH: Hier später finalen Erklärungstext einsetzen. -->
        <p>
          NewPath wird ausschließlich über CurseForge veröffentlicht. Suche im CurseForge Launcher nach
          <strong>NewPath</strong> und installiere die aktuell empfohlene Version.
        </p>

        <ol class="np-help-checklist">
          <li>CurseForge Launcher öffnen.</li>
          <li>Nach <strong>NewPath</strong> suchen.</li>
          <li>Das richtige NewPath-Projekt auswählen.</li>
          <li>Auf <strong>Installieren</strong> klicken.</li>
          <li>Nach der Installation RAM-Zuweisung prüfen.</li>
        </ol>

        <!-- HINWEISBOX: Für wichtige Warnungen/Infos. Bei Bedarf Text ändern. -->
        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Achte darauf, nur die offizielle NewPath-Version zu installieren und keine eigenen Mods hinzuzufügen.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH: Platzhalter später durch echtes Bild ersetzen. -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>CurseForge-Installationsgrafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: RAM
       ===================================================== -->
  <details id="ram" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">02</span>
      <span class="np-help-module-title">RAM im CurseForge Launcher zuweisen</span>
      <span class="np-help-module-meta">Leistung</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Nach der Installation solltest du prüfen, wie viel Arbeitsspeicher dem Modpack zugewiesen ist.
          Für NewPath empfehlen wir mindestens <strong>8 GB RAM</strong>. Je nach System, Shadern,
          Ressourcenauslastung und Version können auch mehr sinnvoll sein.
        </p>

        <ol class="np-help-checklist">
          <li>CurseForge Launcher öffnen.</li>
          <li>Links unten auf die Einstellungen gehen.</li>
          <li>Unter Minecraft die Java-/Speichereinstellungen öffnen.</li>
          <li>Den Regler für zugewiesenen Speicher prüfen.</li>
          <li>Mindestens <strong>8000 MB</strong> einstellen.</li>
        </ol>

        <div class="np-help-alert np-help-alert-danger">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Zu wenig RAM kann dazu führen, dass das Spiel langsam startet, stark ruckelt oder beim Laden abstürzt.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>RAM-Zuweisungsgrafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Version
       ===================================================== -->
  <details id="version" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">03</span>
      <span class="np-help-module-title">Richtige Modpack-Version finden</span>
      <span class="np-help-module-meta">Version</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Achte darauf, dass du die aktuell empfohlene Version nutzt. Die aktive Version steht auf der Startseite
          und wird zusätzlich im Discord angekündigt.
        </p>

        <ul class="np-help-checklist">
          <li>Versionsnummer im CurseForge Launcher prüfen.</li>
          <li>Versionsangabe auf der Startseite vergleichen.</li>
          <li>Discord-Ankündigungen zu Updates beachten.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Unterschiedliche Versionen können dazu führen, dass du dem Server nicht beitreten kannst.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Screenshot der Versionsanzeige später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Voice Chat
       ===================================================== -->
  <details id="voice-chat" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">04</span>
      <span class="np-help-module-title">Voice Chat einrichten</span>
      <span class="np-help-module-meta">Kommunikation</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          NewPath nutzt eine Voice-Chat-Mod. Damit du andere Spieler hören kannst und selbst gehört wirst,
          solltest du die Grundeinstellungen einmal prüfen.
        </p>

        <ul class="np-help-checklist">
          <li>Mikrofon und Ausgabegerät auswählen.</li>
          <li>Lautstärke einzelner Spieler prüfen.</li>
          <li>Push-to-Talk oder Sprachaktivierung einstellen.</li>
          <li>Gruppen erstellen oder bestehenden Gruppen beitreten.</li>
          <li>Testen, ob dein Mikrofon im Spiel korrekt erkannt wird.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Musik, Sounds oder störendes Verhalten im Voice Chat sind nur im erlaubten Rahmen und mit Rücksicht auf andere Spieler sinnvoll.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Voice-Chat-Grafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Voice Chat Fehler
       ===================================================== -->
  <details id="voice-chat-fehler" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">05</span>
      <span class="np-help-module-title">Voice Chat funktioniert nicht</span>
      <span class="np-help-module-meta">Fehlerhilfe</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>Wenn der Voice Chat nicht funktioniert, prüfe zuerst diese Punkte:</p>

        <ul class="np-help-checklist">
          <li>Ist das richtige Mikrofon ausgewählt?</li>
          <li>Ist das richtige Ausgabegerät ausgewählt?</li>
          <li>Ist die Mikrofonlautstärke nicht auf 0?</li>
          <li>Blockiert Windows oder ein anderes Programm das Mikrofon?</li>
          <li>Ist Push-to-Talk aktiviert und die Taste korrekt belegt?</li>
        </ul>

        <div class="np-help-alert np-help-alert-danger">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Wenn du weiterhin nicht gehört wirst, öffne ein Ticket und beschreibe genau, was du bereits geprüft hast.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Screenshot der Voice-Chat-Einstellungen später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Whitelist
       ===================================================== -->
  <details id="whitelist" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">06</span>
      <span class="np-help-module-title">Whitelist und Zugang</span>
      <span class="np-help-module-meta">Serverzugang</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Der Zugang zum Server läuft über Discord und die Whitelist. Hinweise zum Ablauf findest du im Discord
          und auf der Startseite in den Server-Kurzinfos.
        </p>

        <ul class="np-help-checklist">
          <li>Discord beitreten.</li>
          <li>Regelwerk lesen.</li>
          <li>Whitelist-Anfrage stellen.</li>
          <li>Nach Freigabe dem Server beitreten.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Mit Vergabe der Whitelist akzeptierst du das Regelwerk von NewPath.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Discord-/Whitelist-Grafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Claims / Reisen
       ===================================================== -->
  <details id="claims-reisen" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">07</span>
      <span class="np-help-module-title">Claims, Grundstücke und Reisen</span>
      <span class="np-help-module-meta">Serverfunktionen</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Dieser Bereich ist für spätere Hilfen zu Claims, Grundstücken, Wegsteinen und Reisewegen gedacht.
          Die Inhalte werden ergänzt, sobald die finalen Serverregeln und Funktionen feststehen.
        </p>

        <ul class="np-help-checklist">
          <li>Claim-Grundlagen erklären.</li>
          <li>Grundstück melden.</li>
          <li>Wegsteine und Reisen erklären.</li>
          <li>Häufige Fehler oder Missverständnisse sammeln.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Dieser Abschnitt ist bewusst als Platzhalter vorbereitet und muss inhaltlich später finalisiert werden.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Claim-/Waystone-Grafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Einzelne Mods
       ===================================================== -->
  <details id="mod-guides" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">08</span>
      <span class="np-help-module-title">Einzelne Mods kurz erklärt</span>
      <span class="np-help-module-meta">Mod-Guides</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Dieser Bereich ist für kleine Anleitungen zu einzelnen Mods gedacht. Beispiele können später sein:
          wichtige Menüs, Tastenkürzel, Anfängerfragen oder besondere Funktionen.
        </p>

        <ul class="np-help-checklist">
          <li>Modname und Zweck kurz erklären.</li>
          <li>Wichtigste Bedienungsschritte nennen.</li>
          <li>Typische Anfängerfehler sammeln.</li>
          <li>Optional Bild, Beispiel oder Mini-Guide ergänzen.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Für jeden größeren Mod-Guide kann dieses Modul später kopiert und angepasst werden.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Mod-Screenshot oder Interface-Grafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Tastenkürzel
       ===================================================== -->
  <details id="tasten" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">09</span>
      <span class="np-help-module-title">Wichtige Tastenkürzel und Menüs</span>
      <span class="np-help-module-meta">Bedienung</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Hier können häufig benötigte Tastenbelegungen und Menüfunktionen gesammelt werden.
          Besonders hilfreich ist das für Mods, die neue Oberflächen oder Spezialfunktionen hinzufügen.
        </p>

        <ul class="np-help-checklist">
          <li>Taste oder Menü nennen.</li>
          <li>Funktion kurz erklären.</li>
          <li>Konflikte mit anderen Tasten erwähnen.</li>
          <li>Optional Screenshot ergänzen.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Wenn eine Taste bei dir nicht funktioniert, prüfe zuerst die Minecraft-Tastenbelegung auf Konflikte.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Tastenbelegungs-Screenshot später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Support
       ===================================================== -->
  <details id="probleme" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">10</span>
      <span class="np-help-module-title">Spiel startet nicht oder stürzt ab</span>
      <span class="np-help-module-meta">Support</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>Wenn NewPath nicht startet, prüfe zuerst:</p>

        <ul class="np-help-checklist">
          <li>Ist genug RAM zugewiesen?</li>
          <li>Ist die richtige Modpack-Version installiert?</li>
          <li>Wurde der Download vollständig abgeschlossen?</li>
          <li>Wurde das Modpack manuell verändert?</li>
          <li>Gibt es eine konkrete Fehlermeldung oder einen Crash-Report?</li>
        </ul>

        <p>
          Für Support im Discord helfen Screenshots, Fehlermeldungen und Logs enorm.
        </p>

        <div class="np-help-alert np-help-alert-danger">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Bitte poste keine riesigen Log-Dateien direkt in den Chat. Lade sie als Datei hoch oder nutze das Ticket-System.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Beispiel für Crash-Report / Fehlermeldung später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>

  <!-- =====================================================
       MODUL: Support-Ticket
       ===================================================== -->
  <details id="support-ticket" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon">11</span>
      <span class="np-help-module-title">Wann sollte ich ein Support-Ticket öffnen?</span>
      <span class="np-help-module-meta">Support</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Öffne ein Ticket, wenn du trotz Anleitung nicht weiterkommst, wenn ein Fehler mehrfach auftritt
          oder wenn du nicht sicher bist, ob ein Problem an deinem Client, am Modpack oder am Server liegt.
        </p>

        <ul class="np-help-checklist">
          <li>Problem kurz beschreiben.</li>
          <li>Screenshot oder Fehlermeldung ergänzen.</li>
          <li>Erklären, was du schon versucht hast.</li>
          <li>Falls vorhanden: Crash-Report oder Log-Datei anhängen.</li>
        </ul>

        <div class="np-help-alert np-help-alert-warning">
          <span class="np-help-alert-symbol">!</span>
          <p>
            Je genauer die Beschreibung ist, desto schneller kann das Team helfen.
          </p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <small>Ticket-Beispiel oder Support-Grafik später hier einfügen.</small>
        </div>
      </aside>
    </div>
  </details>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('details.np-help-details[open]').forEach(function (details) {
      details.removeAttribute('open');
    });
  });
</script>
