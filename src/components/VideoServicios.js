import React from "react";
import { Player, ControlBar } from 'video-react';
//import 'video-react/dist/video-react.css'; 
import video from '../assets/videos/video_op.mp4'
import "../styles/mystyle.css"


class VideoServicios extends React.Component {
    
    render() { 
        return (

            
               <div className="app videox">
                  <Player  autoPlay={true}
                    muted='true'
                        playsInline
                        poster="/assets/poster.png"
                        src={video}
                        loop
                        > 
                        <ControlBar disableCompletely={true} />
                  </Player>
                    

                </div> 
            
        );
    }
}
 
export default VideoServicios;