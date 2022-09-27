import React from "react";
import { Player } from 'video-react';
 import 'video-react/dist/video-react.css'; 
 import video from '../assets/videos/iron.mp4'
 import video2 from '../assets/videos/strange.mp4'
 import video3 from '../assets/videos/thanos.mp4'
 import video4 from '../assets/videos/spiderman.mp4'
 import video5 from '../assets/videos/thor.mp4'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";

class DesarrolloBlockchain extends React.Component {
    state = {  } 
    render() { 
        return (

<React.Fragment>

    <div className="container-fluid contain_db bg-danger">     
        <div className="row justify-content-center">
            <div className="col-md-16 bg-info">
                

                            <Fullpage>
                                <FullpageNavigation/>
                                <FullPageSections>
                                   
                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player 
                                        autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video}
                                                loop={true}
                                                > 
                                      
                                        </Player>
                                          
                                                            <p className="item_style text-center">TOKEN</p> 
                                                     


                                    </FullpageSection> <p>hola</p>
                                    
                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video2}
                                                loop={true}
                                                > 
                                     
                                        </Player>

                                        
                                              <p className="item_style text-center">NFT</p>  
                                       
                                    </FullpageSection>
                                    
                                   
                                
                                
                                </FullPageSections>
                           </Fullpage>





            </div>        
        </div>
    </div>   

</React.Fragment>

        );
    }
}
 
export default DesarrolloBlockchain;