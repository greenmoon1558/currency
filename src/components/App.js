import React, { Component } from 'react';
 import '../css/App.css';
import Header from "./Header";
import CardList from "../containers/CardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div className="page__container">
            <Header />
            <CardList /> 
           
          </div>
        </main>
      </div>
    );
  }
}

export default App;
