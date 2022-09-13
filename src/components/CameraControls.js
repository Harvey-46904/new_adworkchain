import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls class.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
  
    const {
      camera,
      gl: { domElement }
    } = useThree();
  
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame(() => controls.current.update());
    return (
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        autoRotate={true}
        enableZoom={false}
      />
    );
  };
 
export default CameraControls;