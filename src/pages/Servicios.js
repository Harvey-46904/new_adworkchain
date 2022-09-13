import React from "react";
import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";
import '../styles/neon.css'
class Servicios extends React.Component {
  

    render() { 
        return (  
            <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style={{height:'20vh'}}>
                <div className="centrado_total">
                    <h1 className="glow">MIJIOT</h1>
                </div>
                </FullpageSection>
                <FullpageSection style={{height:'20vh'}}>
                <div className="centrado_total">
                    <h1  >SOBRE NOSOTROS</h1>
                </div>
                </FullpageSection>
                <FullpageSection style={{height:'20vh'}}>
                <div className="centrado_total">
                    <h1 >INCUBADORAS</h1>
                </div>
                </FullpageSection>
                <FullpageSection style={{height:'100vh'}}>
                <div className="centrado_total">
                    <h1 >CONTÁCTANOS</h1>
                </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
            );
    }
}
 
export default Servicios;