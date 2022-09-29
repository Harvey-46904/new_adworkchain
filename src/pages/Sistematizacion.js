import React from "react";
import { Player, ControlBar } from 'video-react';
 import 'video-react/dist/video-react.css'; 
 import video from '../assets/videos/iron.mp4'
 import video2 from '../assets/videos/strange.mp4'
 import video3 from '../assets/videos/thanos.mp4'
 import video4 from '../assets/videos/spiderman.mp4'
 import video5 from '../assets/videos/thor.mp4'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import ReactFullpage from '@fullpage/react-fullpage';
 import '../styles/mystyle.css'

class Sistematizacion extends React.Component {
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
                          
                          <div className="section video_responsive ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                               
                                    <div  className=" container-fluid layer">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8" >
                                                    <div className=""> <h1 className=" text-center titulo_blockchain">ERP</h1></div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                            <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nunc ex,
                                                        vel sagittis risus gravida ac. Ut consequat accumsan facilisis. Orci varius natoque
                                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id mauris
                                                        id turpis ultricies hendrerit. Nulla tempor lectus eu dapibus feugiat. Phasellus
                                                            interdum vestibulum mattis. Quisque aliquam tincidunt vestibulum. Donec vel condimentum
                                                            lorem.</h4>
                                            </div>                
                                        </div>
                                    </div>
                                </Player>
                               
                            </div>  
                            
                            <div className="section  ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video2}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                                <div  className=" container-fluid layer">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8" >
                                                    <div className=""> <h1 className=" text-center titulo_blockchain">CMR</h1></div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                            <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nunc ex,
                                                        vel sagittis risus gravida ac. Ut consequat accumsan facilisis. Orci varius natoque
                                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id mauris
                                                        id turpis ultricies hendrerit. Nulla tempor lectus eu dapibus feugiat. Phasellus
                                                            interdum vestibulum mattis. Quisque aliquam tincidunt vestibulum. Donec vel condimentum
                                                            lorem.</h4>
                                            </div>                
                                        </div>
                                    </div>
                                </Player>
                               
                            </div>

                            <div className="section  ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video3}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                                <div  className=" container-fluid layer">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8" >
                                                    <div className=""> <h1 className=" text-center titulo_blockchain">PAGINAS WEB</h1></div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                            <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nunc ex,
                                                        vel sagittis risus gravida ac. Ut consequat accumsan facilisis. Orci varius natoque
                                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id mauris
                                                        id turpis ultricies hendrerit. Nulla tempor lectus eu dapibus feugiat. Phasellus
                                                            interdum vestibulum mattis. Quisque aliquam tincidunt vestibulum. Donec vel condimentum
                                                            lorem.</h4>
                                            </div>                
                                        </div>
                                    </div>
                                </Player>
                               
                            </div>

                            <div className="section  ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video4}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                                <div  className=" container-fluid layer">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8" >
                                                    <div className=""> <h1 className=" text-center titulo_blockchain">E-COMMERCE</h1></div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                            <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nunc ex,
                                                        vel sagittis risus gravida ac. Ut consequat accumsan facilisis. Orci varius natoque
                                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id mauris
                                                        id turpis ultricies hendrerit. Nulla tempor lectus eu dapibus feugiat. Phasellus
                                                            interdum vestibulum mattis. Quisque aliquam tincidunt vestibulum. Donec vel condimentum
                                                            lorem.</h4>
                                            </div>                
                                        </div>
                                    </div>
                                </Player>
                               
                            </div>

                            <div className="section  ">
                                <Player
                                    autoPlay={true}
                                    muted={true}
                                    playsInline
                                    poster="/assets/poster.png"
                                    src={video5}
                                    loop={true}
                                  
                                >
                                <ControlBar disableCompletely={true} />
                                <div  className=" container-fluid layer">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8" >
                                                    <div className=""> <h1 className=" text-center titulo_blockchain">SOLUCIONES A LA MEDIDA</h1></div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                            <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus nunc ex,
                                                        vel sagittis risus gravida ac. Ut consequat accumsan facilisis. Orci varius natoque
                                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id mauris
                                                        id turpis ultricies hendrerit. Nulla tempor lectus eu dapibus feugiat. Phasellus
                                                            interdum vestibulum mattis. Quisque aliquam tincidunt vestibulum. Donec vel condimentum
                                                            lorem.</h4>
                                            </div>                
                                        </div>
                                    </div>
                                </Player>
                               
                            </div>



                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}
 
export default Sistematizacion;