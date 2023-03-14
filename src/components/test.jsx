import React from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
    return(
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1.4}/>
                <directionalLight position={[3,2,1]}/>
                <mesh>
                    <boxGeometry args={[0.5,0.5,0.5]}/>
                    <meshStandardMaterial>
                        <RenderTexture attach={"map"}>
                            <PerspectiveCamera
                                makeDefault
                                position={[0,0,2]}
                            />
                            <color attach={"background"} args={["#009991"]}/>
                            <Text fontSize={0.5} color={"black"} font={"roboto"}>
                                LR
                            </Text>
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </Container>
    );
}

export default Test;