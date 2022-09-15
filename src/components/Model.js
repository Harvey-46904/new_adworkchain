import React from "react"

import { ThreeMFLoader} from "three/examples/jsm/loaders/3MFLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from "@react-three/fiber";
import model from "../assets/models/chair.3mf";


const Model = () => {
    const geom = useLoader(ThreeMFLoader, model);

    return (
        <group position={[2,-1.7,2.7]} scale={[0.02,0.02,0.02]} rotation={[89.5,85,0]}>
            <primitive object={geom}/>
        </group>
    );
};

export default Model;