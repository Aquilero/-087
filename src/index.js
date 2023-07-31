import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Willkommen = () => {
    return (
        <section>
            <h2>Willkommen</h2>
            <p>Herzlich willkommen auf meiner einfachen Webseite!</p>
        </section>
    );
};

const UeberMich = () => {
    return (
        <section>
            <h2>Über mich</h2>
            <p>
                Hier ist eine kurze Beschreibung über mich und meine Interessen.
            </p>
        </section>
    );
};

const Kontakt = () => {
    return (
        <section>
            <h2>Kontakt</h2>
            <p>
                Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
                kontakt@meinewebseite.de
            </p>
        </section>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 2);

    return (
        <>
            <h3>{count}</h3>
            <button onClick={increment}>+ 2</button>
        </>
    );
}

const Uhr = () => {
    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)
    return <h1>{ctime}</h1>
}

export { Willkommen, UeberMich, Kontakt, Counter, Uhr };

reportWebVitals();
