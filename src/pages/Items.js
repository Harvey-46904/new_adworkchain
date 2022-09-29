import React from "react";
import { Player } from 'video-react';
import '../styles/video-react.css'; 
 import video from '../assets/videos/iron.mp4'
 import video2 from '../assets/videos/strange.mp4'
 import video3 from '../assets/videos/thanos.mp4'
 import video4 from '../assets/videos/spiderman.mp4'
 import video5 from '../assets/videos/thor.mp4'
import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";
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
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    <div className="">
                    <FullpageSection  style={{height:'100vh'}} >

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video}
                                loop={true}
                              
                      
                                > 
                       <div  className=" container-fluid layer">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8" >
                                                    <div className=""> <h1 className=" text-center titulo_blockchain">TOKEN</h1></div>
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

                          
                         
                    </FullpageSection>
                    
                    <FullpageSection  style={{height:'100vh'}} className="video_responsive" >

<Player autoPlay={true}
        muted={true}
        playsInline
        poster="/assets/poster.png"
        src={video}
        loop={true}
       

        > 
<div  className=" container-fluid layer">
                <div className="row justify-content-center">
                    <div className="col-md-8" >
                            <div className=""> <h1 className=" text-center titulo_blockchain">TOKEN</h1></div>
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

  
 
</FullpageSection>
                    
                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video3}
                                loop={true}
                                > 
                       
                        </Player>

                        
                                
                         <p className="item_style">REALIDAD AUMENTADA</p>
                    </FullpageSection>
                    
                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video4}
                                loop={true}
                                > 
                       
                        </Player>

                        
                                
                         <p className="item_style">REALIDAD VIRTUAL</p>
                    </FullpageSection>
                    
                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video5}
                                loop={true}
                                > 
                       
                        </Player>

                        
                                
                         <p className="item_style">CONSULTORIAS</p>
                    </FullpageSection>
                   
                  </div>
                </FullPageSections>
            </Fullpage>
         );
    }
}
 
export default Items;