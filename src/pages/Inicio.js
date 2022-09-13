import React, { useRef, Suspense } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import '../styles/App.css'

import Img1 from '../assets/img/1.jpg'
import Img2 from '../assets/img/fondo.jpg'
import Img3 from '../assets/img/fondo.jpg'
import Img4 from '../assets/img/fondo.jpg'
import Img5 from '../assets/img/fondo.jpg'
import Img6 from '../assets/img/fondo.jpg'
import Model from "../components/Model.js";
extend({ OrbitControls });
class Inicio extends React.Component {

    render() { 

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
            enableZoom={true}
          />
        );
      };
      
      // Loads the skybox texture and applies it to the scene.
      function SkyBox() {
        const { scene } = useThree();
        const {
          camera,
        } = useThree();
      
        const loader = new CubeTextureLoader();
        // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
        const texture = loader.load([
          Img1,
          Img2,
          Img3,
          Img4,
          Img5,
          Img6
        ]);
      
        // Set the scene background property to the resulting texture.
        scene.background = texture;
        scene.size=30;
        
        return null;
      }
      
      // Geometry
      function Sphere() {
        const { scene, gl } = useThree();
        // The cubeRenderTarget is used to generate a texture for the reflective sphere.
        // It must be updated on each frame in order to track camera movement and other changes.
        const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
          format: RGBFormat,
          generateMipmaps: true,
          minFilter: LinearMipmapLinearFilter
        });
        const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
        cubeCamera.position.set(0, 0, 0);
        scene.add(cubeCamera);
      
        // Update the cubeCamera with current renderer and scene.
        useFrame(() => cubeCamera.update(gl, scene));
      
        return (
          <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
            <directionalLight intensity={0.5} />
            <sphereGeometry attach="geometry" args={[2, 32, 32]} />
            <meshBasicMaterial
              attach="material"
              envMap={cubeCamera.renderTarget.texture}
              color="white"
              roughness={0.1}
              metalness={1}
            />
          </mesh>
        );
      }
      

        return ( 
          <div className="">
            <Canvas style={{height:'100vh'}} camera={{position:[0,0,0],fov:60}} size={{width:window.innerWidth, height:window.innerHeight}}>
            
        
            <SkyBox camera={{position:[100,10,0]}}/>
           
            <CameraControls/>
            </Canvas>
          </div>
          

         );
    }
}
 
export default Inicio;