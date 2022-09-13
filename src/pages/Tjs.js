
import React, { useRef, useState } from 'react'
import { Canvas,useLoader ,useFrame } from '@react-three/fiber'
import M1 from '../assets/img/cuarto/puerta.jpg'
import M2 from '../assets/img/cuarto/pared.jpg'
import M3 from '../assets/img/cuarto/galaxia.jpg'
import M4 from '../assets/img/cuarto/marco.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
class Tjs extends React.Component {
    
    
    render() { 
       
function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

  function Puerta(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M1)
   
    return(
        <mesh
        position={[0,-0.7, 0]}
        ref={mesh}
        onPointerEnter={(e) => alert('black')} // see note 1
      
        >
            <boxGeometry args={[1.8,4,0]}  />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
  }
  
  function Marco(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M4)
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    return(
        <mesh
        position={[0,-0.6, 0]}
        ref={mesh}
      
      
        >
            <boxGeometry args={[2.3,4.2,0]}  />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
  }
  function Galaxia(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M3)
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    return(
        <mesh
        position={[0,-0.7, 0]}
        ref={mesh}
        onPointerEnter={(e) => alert('black')} // see note 1
      
        >
            <boxGeometry args={[1.8,4,0]}  />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
  }
  function Pared(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M2)
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    return(
        <mesh
        position={[0,0, 0]}
        ref={mesh}
        >
            <boxGeometry args={[13.99,7.7,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
 
    );
  }
 
return(
  <Canvas style={{height:'100vh'}}>
     <ambientLight intensity={0.5} />
     
     <Pared/>
      <Marco/>
     <Galaxia/>
     <Puerta/>
    </Canvas>
   
);
  
    }
}
 
export default Tjs;