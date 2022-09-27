import React from "react";

import foto from '../../assets/img/power.jpg'
import '../../styles/estilos_nosotros.css'

function FotoNosotros () {
    return ( 

        <React.Fragment>

        <div className="container-fluid   contain_nosotros">
            <div className="row justify-content-center">
                <div className="col-md-9  ">
                <p className="titulo_nosotros text-center ">SOBRE NOSOTROS</p>
                    
                        <img className="foto_nosotros img-fluid mx-auto d-block" src={foto} ></img>
                <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id dignissim lorem. 
                    Fusce lacus mi, convallis vel fringilla sed, rhoncus eu massa. Donec ultricies,
                     orci lobortis semper pulvinar, mi purus scelerisque mi, a eleifend eros sapien 
                     ut eros. Sed libero lorem, scelerisque</p>        
                </div>
            </div>
        </div>

        </React.Fragment>

     );
}

export default FotoNosotros;