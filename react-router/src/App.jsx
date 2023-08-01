import React from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <h1 id="header">Sup Re-Rou</h1>
        <Navbar />
        <MainContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
