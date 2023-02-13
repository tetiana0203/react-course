import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      
      <Main />
      <List />
      <Footer />
    </div>
    
  );
}

export default App;
