import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
    
  );
}

export default App;
