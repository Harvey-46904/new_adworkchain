import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/estilos_scroll.css"


function InicioItems() {


    const [claseuno, setclaseuno] = React.useState("normal")
    const [clasedos, setclasedos] = React.useState("normal")
    const [clasetres, setclasetres] = React.useState("normal")
    const [clasecuatro, setclasecuatro] = React.useState("normal")
  
   const ir_servicios = () => {
    window.open("http://localhost:3000/servicios","_self" );
   }

   const ir_contactanos = () => {
    window.open("http://localhost:3000/contactanos","_self" );
   }

   const ir_nosotros = () => {
    window.open("http://localhost:3000/nosotros", "_self")
   }

   const ir_incubadoras = () => {
    window.open ("http://localhost:3000/incubadoras", "_self")
   }
    return ( 

<div className=" container-fluid  contain_servicios   ">

    <div className="row ">


            <div className="col-md-11  " >
                <div className="row justify-content-center">
                    <div className="col-md-10 offset-1">

                                <div className="row " onMouseEnter={() => setclaseuno("resaltado")} onMouseLeave={() => setclaseuno("normal")} onClick={ir_servicios} > 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${claseuno} `} >
                                                   SERVICIOS
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasedos("resaltado")} onMouseLeave={() => setclasedos("normal")} onClick={ir_nosotros}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasedos} `}  >
                                                    SOBRE NOSOTROS
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasetres("resaltado")} onMouseLeave={() => setclasetres("normal")} onClick={ir_incubadoras}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasetres} `}  >
                                                   INCUBADORAS
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasecuatro("resaltado")} onMouseLeave={() => setclasecuatro("normal")} onClick={ir_contactanos}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasecuatro} `}  >
                                                    CONTÁCTANOS
                                                </div>
                                        </div>
                                </div>
                                
                    </div>
                    
                </div>
            </div>        
    
            

        
            <div className="col-md-1 selectores">
                    <div className=" row ">
                        <ol className=" selector test ">
                                        <li className="test">
                                            <label id="puntouno"  className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntodos" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntotres" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntocuatro"  className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntocinco" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntoseis" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntosiete"  className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntoocho" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntonueve" className="punto">•</label>
                                        </li>
                        </ol>
                                
                    </div>  
            </div>   
            
    </div>  

</div>

     );
}

export default InicioItems;