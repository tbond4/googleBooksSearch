import React from "react"
import "bootstrap/scss/bootstrap.scss"
import Header from "./components/Header";
import  Navigationbar  from "./components/Navigationbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import searchPage from "./pages/searchPage";
import savedPage from "./pages/savedPage";
import notFoundPage from "./pages/notFoundPage";

function App () {
  
    return (
      <div>
      <Router>
      <Navigationbar/>
      <Header/>
      <Switch>
        <Route exact path="/" component={searchPage}/>
        <Route exact path="/saved" component={savedPage}/>
        <Route exact path="/search" component={searchPage}/>
        <Route component={notFoundPage}/>
      </Switch>
      </Router>
      </div>
    );
  
}

export default App;
