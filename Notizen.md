## NICHT ANFASSEN
main.jsx
package.json
package-lock.json
.gitignore
vite.config.js
eslint.config.js

> node_modules

## MANCHMAL ANFASSEN
index.html

## PROJEKTSTRUKTUR
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Main.jsx
├── App.jsx
├── index.css   ← globale Styles
└── main.jsx    ← Einstiegspunkt

## BEFEHLE
npm run dev      ← Entwicklungsserver starten
npm run build    ← Production Build erstellen
npm run preview  ← Build lokal anzeigen

## REGELN
- Komponentendateien immer GROSS schreiben → Footer.jsx
- return kommt VOR dem JSX, nicht mittendrin
- index.css gilt GLOBAL für die gesamte App
- Alles sichtbare muss in <App /> eingebunden sein

## KOMPONENTEN
- Jede Komponente in eigene Datei auslagern
- In App.jsx importieren → import Footer from './components/Footer.jsx'
- Styles mit className (nicht class!)

## CSS
- index.css → globale Styles (body, margin, Schriftart)
- App.css → Styles für App-Komponente
- !important nutzen wenn Styles überschrieben werden

## STRUKTUR EINER KOMPONENTE
function MeineKomponente() {
  return (
    <div className="meine-klasse">
      <h1>Inhalt</h1>
    </div>
  )
}

export default MeineKomponente

## GEMINI

Alt + G  ← Chat anzuzeigen