import React from "react";
import FondoCryptoversox from "../components/Cryptoversox/FondoCryptoversox";
import FotosCryptoversox from "../components/Cryptoversox/FotosCryptoversox";
import '../styles/estilos_cryptoversox.css'

class Cryptoversox extends React.Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <FondoCryptoversox/>
                <FotosCryptoversox/>
                
            </React.Fragment>

        );
    }
}
 
export default Cryptoversox ;