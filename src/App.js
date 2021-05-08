import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("fr");
  return (
    <div className="App">
      <BrowserRouter>
        <Header data ={{
              language,
              setLanguage
        }} />
        <Main data ={{
              language,
              setLanguage
        }}/>
        <Footer data ={{
              language,
              setLanguage
        }}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
