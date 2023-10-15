import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";


const Cube = () => {
    return(
            <Canvas camera={{position:[0,4,5]}}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1.2}/>
                <directionalLight position={[3,2,1]}/>
                <mesh>
                    <boxGeometry args={[3,3,3]}/>
                    <meshStandardMaterial color={"rgb(15,128,121)"}/>
                </mesh>
            </Canvas>
    );
}

export default Cube;