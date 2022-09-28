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
import FondosBlockchain from "../components/DesarrolloBlockchain/FondosBlockchain";
import ItemsBlockchain from "../components/DesarrolloBlockchain/ItemsBlockchain";

class DesarrolloBlockchain extends React.Component {
    state = {  } 
    render() { 
        return (

<React.Fragment>

    <FondosBlockchain/>  
    <ItemsBlockchain/>

</React.Fragment>

        );
    }
}
 
export default DesarrolloBlockchain;