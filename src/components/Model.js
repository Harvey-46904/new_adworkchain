import React from "react";

<<<<<<< HEAD
import { ThreeMFLoader} from "three/examples/jsm/loaders/3MFLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
=======
>>>>>>> origin/stevenx_2
import { useLoader } from "@react-three/fiber";

import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import model from "../assets/models/silla/crab.3mf";
// import model from "../assets/models/silla/ArmChair_01_4k.gltf";


const Model = () => {
<<<<<<< HEAD
    const geom = useLoader(ThreeMFLoader, model);

=======
    
    const silla = useLoader(ThreeMFLoader, model);
    // const silla = useLoader(GLTFLoader, model);
    
>>>>>>> origin/stevenx_2
    return (
        <group>
            <primitive object={silla} />
        </group>
    );
};

export default Model;


