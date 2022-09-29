import React from "react";
import { Player } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/iron.mp4'
import video2 from '../assets/videos/strange.mp4'
import video3 from '../assets/videos/thanos.mp4'
import video4 from '../assets/videos/spiderman.mp4'
import video5 from '../assets/videos/thor.mp4'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";


class DesarrolloBlockchain extends React.Component {

    render() {
        
                                            const sub_itemes=[
                                            {
                                                "fondo":video,
                                            "titulo":"Token",
                                            "descripcion":"BLABLALBLALBAl"
                        
                    },
                                            {
                                                "fondo":video2,
                                            "titulo":"NFT",
                                            "descripcion":"BLABLALBLALBAl"
                    },
                                            {
                                                "fondo":video3,
                                            "titulo":"DAPP",
                                            "descripcion":"BLABLALBLALBAl"
                    },
                                            {
                                                "fondo":video4,
                                            "titulo":"METAVERSO",
                                            "descripcion":"BLABLALBLALBAl"
                    },
                                            {
                                                "fondo":video5,
                                            "titulo":"SISTEMAS DESCENTRALIZADOS",
                                            "descripcion":"BLABLALBLALBAl"
                    },
                                            {
                                                "fondo":video,
                                            "titulo":"WALLET",
                                            "descripcion":"BLABLALBLALBAl"
                    },
                                            {
                                                "fondo":video2,
                                            "titulo":"SMART CONTRACT",
                                            "descripcion":"BLABLALBLALBAl"
                    },
                                            ]
        
                const Itemes=[];
        
                for (let ite of sub_itemes) {
                                                Itemes.push(
                                                    <FullpageSection style={{ height: '100vh' }} >
                            <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={ite.fondo}
                                loop={true}
                            >
                                <div className=" container-fluid layer">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8" >
                                            <div className=""> <h1 className=" text-center titulo_blockchain">{ite.titulo}</h1></div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <h4 className="text-center">{ite.descripcion}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Player>
                        </FullpageSection>
                                                )
                                            } 
                                            
        return (
            <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                        
                        {Itemes}

                    
                </FullPageSections>
            </Fullpage>
        );



    }
}

export default DesarrolloBlockchain;
