import React from "react";
import styled from "styled-components";
import Navbar from "../common/Navbar.jsx";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Typewriter from 'typewriter-effect';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 75px;
`;

const Name = styled.h3`
  font-size: 30px;
`;

const Desc = styled.span`
  text-align: end;
  font-style: italic;
  color: lightgray;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const Button = styled.button`
  width: 100px;
  padding: 7px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.1rem;
  background-color: rgb(20,203,189,0.8);
  border: 0;
  color: white;
  margin-top: 0.8rem;

  :hover{
    cursor: pointer;
    background-color: rgb(8, 209, 152, 0.8);
  }
`;

const RightSection = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  height: 500px;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  position: absolute;
  border-radius: 50%;
  border: 2px dashed lightseagreen;
  
  //@keyframes animate {
  //  to{
  //    transform: translateY(10px);
  //  }
  //}
`;

const Home = () => {
    return(
        <Section>
            <Navbar/>
            <Container>
                <LeftSection>
                    <Title>
                        <Typewriter
                            options={{
                                strings: ['< HelloWorld />'],
                                autoStart: true,
                                loop: true,
                                delay: 200,
                                pauseFor: 2000
                            }}
                        />
                    </Title>

                    <Name>_Jenson Ackless_</Name>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the.</Desc>
                    <Line/>
                    <Button>More</Button>
                </LeftSection>
                <RightSection>
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere args={[1,100,200]} scale={2}>
                            <MeshDistortMaterial color={"#009991"} attach={"material"} distort={0.24} speed={2}/>
                        </Sphere>
                    </Canvas>
                    <Img src={"../src/assets/images/me.png"}></Img>
                </RightSection>
            </Container>
        </Section>
    )
}
export default Home;