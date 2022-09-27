import React from "react";
import ContactForm from "../components/Contactanos/ContactForm";
import FondoContact from "../components/Contactanos/FondoContact";

import '../styles/estilos_contact.css'

class Contactanos extends React.Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <FondoContact/>
                <ContactForm  />
                <p className="titulo_con">CONTACTANOS</p>
            </React.Fragment>

        );
    }
}
 
export default Contactanos ;