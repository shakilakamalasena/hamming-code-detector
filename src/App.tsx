import React from "react";
import HammingEncoder from "./components/HammingEncoder";
import HammingDecoder from "./components/HammingDecoder";
import "./app.css";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Hamming Code Detector</h1>
            </header>
            <main>
                <HammingEncoder />
                <HammingDecoder />
            </main>
            <footer>
                <p>&copy; Shakila Kamalasena</p>
            </footer>
        </div>
    );
}

export default App;
