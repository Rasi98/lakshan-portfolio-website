import React from "react";
import styled from "styled-components";
import Navbar from "../common/Navbar.jsx";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Typewriter from 'typewriter-effect';
import {Grid} from "@mui/material";

const Title = styled.h1`
  font-size: 75px;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

const Name = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: rgb(56, 215, 201);

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
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
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
    font-weight: 300;
    font-size: 0.9rem;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
  }
  
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
  }
  
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
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
  margin-top: 1rem;

  :hover{
    cursor: pointer;
    color: white;
    border: 2px solid rgb(8, 209, 152,0.8);
    background-color: rgb(8, 209, 152,0.8);
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0.8rem;
    color: white;
    border: 2px solid rgb(8, 209, 152,0.8);
    background-color: rgb(8, 209, 152,0.8);
  }
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

  @media only screen and (max-width: 600px) {
    height: 65%;
  }

  @media only screen and (max-width: 900px) {
    height: 80%;
  }
`;

const Home = () => {
    return(
        <Grid container sx={{ height:'100vh',scrollSnapAlign:'center',padding:{xs:'1rem',md:'2rem 4rem'}}}>
            <Grid item xs={12} >
                <Navbar/>
            </Grid>
            <Grid container>
                <Grid item
                      xs={12}
                      md={12}
                      lg={6}
                      p={2}
                      display={'flex'}
                      flexDirection={'column'}
                      justifyContent={'center'}
                      alignItems={{xs:'center',md:'center',lg:'flex-end'}}
                >
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
                    <Heading><NormalText>Hi there! I'm </NormalText><Name>Lakshan Rasingolla</Name></Heading>
                    <Desc>" I'm a front-end software developer who is crafting clean, elegant and efficient code that brings ideas into reality.
                        I enjoy the journey of coding and creating exceptional digital solutions "</Desc>
                    <Line/>
                    <Button>Let's talk</Button>
                </Grid>
                <Grid item xs={12} md={12} lg={6} sx={{position:'relative',padding:'3px'}}>
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere args={[1,100,200]} scale={2}>
                            <MeshDistortMaterial color={"#009991"} attach={"material"} distort={0.24} speed={2}/>
                        </Sphere>
                    </Canvas>
                    <Img src={"../src/assets/images/me.png"}></Img>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Home;