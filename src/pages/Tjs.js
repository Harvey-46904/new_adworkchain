
import React, { useRef, useState, Suspense } from 'react'
import { Canvas,useLoader ,useFrame } from '@react-three/fiber'
import M1 from '../assets/img/cuarto/puerta.jpg'
import M2 from '../assets/img/cuarto/pared.jpg'
import M3 from '../assets/img/cuarto/galaxia.jpg'
import M4 from '../assets/img/cuarto/marco.jpg'
import Mc from '../assets/img/cuarto/cuadro.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Model from '../components/Model'
import Scene from '../components/Scene'
import * as THREE from 'three'
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
function Cuadro(){
  const [clicked,setClicked]=useState(false);
  const markedRef=useRef();
  const vec=new THREE.Vector3();


    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, Mc)
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))


    useFrame(state=>{
      if(clicked){
        state.camera.lookAt(markedRef.current.position)
        state.camera.position.lerp(vec.set(-3,20,-20),.01)
        state.camera.updateProjectionMatrix()
      }return null;
    }

    );
    return(
        <mesh

        position={[-3,1, 0]}
        ref={markedRef}
        onClick={() => setClicked(!clicked)}
        >
            <boxGeometry args={[1,1,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
 
    );
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
 
  function Prueba () {
   
   
    
    var bola_geo = new THREE.SphereGeometry(200,50,50);
    var bola_mat = new THREE.MeshBasicMaterial({color: 0xC8E511});
     let bola = new THREE.Mesh(bola_geo, bola_mat);
     
       bola.position.set(0,0,0)
  }
  

return(
  <Canvas style={{height:'100vh'}}>

     <ambientLight intensity={0.5} />
     
     <Pared/>
     <Marco/>
     <Galaxia/>
     <Puerta/>
     <Cuadro/>

  <Suspense>
  
    <Model>
    <ambientLight/>
    </Model>
    <Prueba/>
  </Suspense>
<Scene></Scene>
  
    </Canvas>
   
);
  
    }
}
 
export default Tjs;