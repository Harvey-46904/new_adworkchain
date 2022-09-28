import React from "react";
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';
import ReactFullpage from '@fullpage/react-fullpage';
import video from '../assets/videos/iron.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mystyle.css'
//import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";
class Items extends React.Component {

    render() {
        /*
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
        /*
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
                } */
        return (
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper className="video_responsive">
                          
                          <div className="section  ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                                <div className="layer"> <h1 className="text-danger text-center">Hola</h1></div>
                       
                                </Player>
                               
                            </div>  <div className="section  ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                                <div className="layer"> <h1 className="text-danger text-center">Hola</h1></div>
                       
                                </Player>
                               
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}

export default Items;