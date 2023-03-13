import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
    return(
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Sphere args={[1,100,200]} scale={2}>
                    <MeshDistortMaterial color={"#28B463"} attach={"material"} distort={0.5} speed={2}/>
                </Sphere>
            </Canvas>
        </Container>
    );
}

export default Test;