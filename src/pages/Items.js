import React from "react";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; 
import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";
class Items extends React.Component {
  
    render() { 

        const sub_itemes=[
            {
                "fondo":"ulr",
                "titulo":"Token",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"NFT",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"DAPP",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"METAVERSO",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"SISTEMAS DESCENTRALIZADOS",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"WALLET",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"SMART CONTRACT",
                "descripcion":"BLABLALBLALBAl"
            },
        ]

        const Itemes=[];

        for (let ite of sub_itemes) {
            Itemes.push(
                <FullpageSection style={{height:'100vh'}}>
                  <div className="centrado_sub_item">
                        <h1 style={{color:'black'}} className="Titulo_item">{ite.titulo}</h1>
                        <p style={{color:"black"}} >
                           {ite.descripcion}
                        </p>
                    </div>
                </FullpageSection>
            )
        }
        return ( 
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    
                    <FullpageSection style={{height:'100vh'}}>
                    <Player
                    autoPlay='true'
                    muted='true'
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                        <div className="centrado_sub_item">
                        <h1 style={{color:'red'}} className="Titulo_item">lala</h1>
                        <p style={{color:"red"}} >
                          LALALA
                        </p>
                    </div>
                  
                    </FullpageSection>
                    {Itemes}
                </FullPageSections>
            </Fullpage>
         );
    }
}
 
export default Items;