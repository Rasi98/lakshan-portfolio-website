import React, {useEffect, useState} from "react";
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
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 75px;
  margin-bottom: 1.5rem;
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Name = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: rgb(56, 215, 201);
`;
const NormalText = styled.h5`
  font-size: 25px;
  font-family: 'Lobster', cursive;
  font-weight: 100;
`;

const Desc = styled.span`
  text-align: end;
  font-style: italic;
  color: lightcyan; 
  line-height: 1.5;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const Button = styled.button`
  width: fit-content;
  padding: 10px 25px;
  border: 2px solid rgb(20,203,189);
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: rgb(20,203,189,0.1);
  color: rgb(20,203,189);
  margin-top: 0.8rem;

  :hover{
    cursor: pointer;
    color: white;
    border: 2px solid rgb(8, 209, 152,0.8);
    background-color: rgb(8, 209, 152,0.8);
  }
`;

const RightSection = styled.div`
  flex: 1;
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
  animation: animate1 2s infinite ease alternate;
  position: absolute;
  border-radius: 50%;
  border: 2px dashed #3ae3da;
  
  @keyframes animate1 {
    to{
      transform: translateY(5px);
    }
  }
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
                    <Heading><NormalText>Hi there! I'm </NormalText>&nbsp;<Name>Lakshan Rasingolla</Name></Heading>
                    <Desc>" I'm a front-end software developer who is crafting clean, elegant and efficient code that brings ideas into reality.
                        I enjoy the journey of coding and creating exceptional digital solutions "</Desc>
                    <Line/>
                    <Button>Let's talk</Button>
                </LeftSection>
                <RightSection>
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere className={"canvas"} args={[1,100,200]} scale={2}>
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