import React from 'react';
import { Willkommen, UeberMich, Kontakt, Counter, Uhr } from './index';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Deniz's React Komponenten</h1>
      </header>
      <main>
        <Willkommen />
        <UeberMich />
        <Kontakt />
        <Counter />
        <Uhr />
      </main>
      <footer>
        <p>&copy; 2023 Meine Webseite</p>
      </footer>
    </div>
  );
};

export default App;
