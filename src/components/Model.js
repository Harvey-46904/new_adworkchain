import React from "react"

import { ThreeMFLoader} from "three/examples/jsm/loaders/3MFLoader";
import { useLoader } from "@react-three/fiber";
import model from "../assets/models/crab.3mf";


const Model = () => {
    const geom = useLoader(ThreeMFLoader, model);
    return (
        <group>
            <primitive object={geom}/>
        </group>
    );
};

export default Model;