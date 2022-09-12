import React from "react";
import logo from "../assets/img/construccion.png"
import '../styles/App.css'
class Inicio extends React.Component {

    render() { 
        return ( <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          HOLA MUNDO
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sigueme :)
          </a>
        </header>
      </div>  );
    }
}
 
export default Inicio;