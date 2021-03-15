import React from "react"
import "bootstrap/scss/bootstrap.scss"
import Header from "./components/Header";
import  Navigationbar  from "./components/Navigationbar";
import SearchForm from "./components/SearchFrom"


function App () {
  
    return (
      <div>
      <Navigationbar/>
      <Header/>
      <SearchForm/>
      </div>
    );
  
}

export default App;
