Ü087 - Einführung React 
Martin | 31.07.2023 


Aufgabe 1

Gegeben ist die im Anhang aufgeführte HTML Seite (HTML+CSS). Die Aufgabe besteht darin, die HTML-Struktur in separate React Komponenten zu übertragen und sie miteinander zu verknüpfen. 

Hinweis: Da React bereits eine standard index.html mitliefert, müssen nicht alle Teile des HTML Codes überführt werden! 


Beispielhaftes Vorgehen: 
Erstelle eine neue React App mit dem Befehl npx create-react-app html-components.
Erstelle eine neue .js-Datei im src Verzeichnis.
Erstelle in der neuen .js-Datei die Komponenten zu den einzelnen HTML-Abschnitten.
Vergiss nicht, das Styling zu übernehmen und im HTML-Code den Platzhalter HIER_NAME_EINFÜGEN zu ersetzen.
Lösche ggfs. die App.* Dateien und die entsprechenden Referenzen dazu aus der Datei index.js.
Binde die neu erstellten Komponenten in die index.js Datei ein, sodass diese gerendert werden. 
Öffne die Webseite im Browser und mache einen Screenshot für die Abgabe.


Aufgabe 2

Füge der Webseite von Aufgabe 1 dynamische Komponenten hinzu und platziere sie sinnvoll auf der Webseite. Mache erneut einen Screenshot für die Abgabe. 

Erstelle einen Counter, welcher über einen Button erhöht werden kann. Jedes Mal, wenn der Button geklickt wird, soll sich der Zähler um 2 erhöhen. 
Erstelle ein Uhrzeit-Widget, welches die aktuelle Uhrzeit im Format HH:MM:SS wiedergibt. Die Anzeige soll sich jede Sekunde aktualisieren. 


Anhang - Code

index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ü087-Webseite</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <header>
	<h1>HIER_NAME_EINFÜGEN's React Komponenten</h1>
  </header>
  <main>
	<section>
  	<h2>Willkommen</h2>
  	<p>Herzlich willkommen auf meiner einfachen Webseite!</p>
	</section>
	<section>
  	<h2>Über mich</h2>
  	<p>
    	Hier ist eine kurze Beschreibung über mich und meine Interessen.
  	</p>
	</section>
	<section>
  	<h2>Kontakt</h2>
  	<p>
    	Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
    	kontakt@meinewebseite.de
  	</p>
	</section>
  </main>
  <footer>
	<p>&copy; 2023 Meine Webseite</p>
  </footer>
</body>

</html>



style.css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

header h1 {
  margin: 0;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: #333;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}


