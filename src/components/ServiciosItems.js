import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/estilos_scroll.css"


function ServiciosItems() {


    const [claseuno, setclaseuno] = React.useState("normal")
    const [clasedos, setclasedos] = React.useState("normal")
    const [clasetres, setclasetres] = React.useState("normal")
    const [clasecuatro, setclasecuatro] = React.useState("normal")
    const [clasecinco, setclasecinco] = React.useState("normal")
   

    return ( 

<div className=" container-fluid  contain_servicios r  ">

    <div className="row ">


            <div className="col-md-11  " >
                <div className="row justify-content-center">
                    <div className="col-md-10 offset-1">

                                <div className="row " onMouseEnter={() => setclaseuno("resaltado")} onMouseLeave={() => setclaseuno("normal")}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${claseuno} `} >
                                                    DESARROLLO BLOCKCHAIN
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasedos("resaltado")} onMouseLeave={() => setclasedos("normal")}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasedos} `}  >
                                                    AUTOMATIZACIÓN
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasetres("resaltado")} onMouseLeave={() => setclasetres("normal")}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasetres} `}  >
                                                    REALIDAD AUMENTADA
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasecuatro("resaltado")} onMouseLeave={() => setclasecuatro("normal")}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasecuatro} `}  >
                                                    REALIDAD VIRTUAL
                                                </div>
                                        </div>
                                </div>
                                <div className="row " onMouseEnter={() => setclasecinco("resaltado")} onMouseLeave={() => setclasecinco("normal")}> 
                                        <div className="col-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasecinco} `}  >
                                                CONSULTORÍAS
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

export default ServiciosItems;