import React from "react";
import styled from "styled-components";
import {Grid} from "@mui/material";

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 4rem;
    margin-bottom: 1.4rem;
  }
`;

const Desc = styled.span`
  text-align: center;
  font-style: italic;
  color: white;
  font-size: 1.3rem;
  line-height: 1.5;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    text-align: justify;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    gap: 3rem;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Img = styled.img`
    width: 80px;

  @media only screen and (max-width: 600px) {
    width: 50px;
  }
`;

const Skills = () => {
    return(
        <Grid container sx={{ height:'100vh',scrollSnapAlign:'center',padding:{xs:'1rem',md:'2rem 4rem'}}}>
            <Grid item xs={12} md={6}>
                <Grid container
                      sx={{ height: '100%', padding:'1rem',gap:{xs:'1.5rem',sm:'1rem',marginBottom:{md:'2rem'}}}}
                      direction={"column"}
                      justifyContent={{xs:'flex-start',md:'flex-start',lg:'center'}}
                      alignItems={"center"}>
                    <Title>&lt;Skills/&gt;</Title>
                    <Desc>
                        I have been working with several cutting edge tools & techniques related to
                        frontend, backend & databases.Whether you need a simple website or a complex web application,
                        I have the skills, expertise & courage to bring your vision to life.
                    </Desc>
                    <Desc>Here are a few technologies I’ve been working with recently....</Desc>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container sx={{ height: '100%' }} justifyContent={"center"} alignItems={"center"}>
                    <Row>
                        <Col><Img src={"./img/html.png"}/>HTML</Col>
                        <Col><Img src={"./img/css.png"}/>CSS</Col>
                        <Col><Img src={"./img/javascript.png"}/>JavaScript</Col>
                    </Row>
                    <Row>
                        <Col><Img src={"./img/react.png"}/>React</Col>
                        <Col><Img src={"./img/node.png"}/>NodeJs</Col>
                        <Col><Img src={"./img/mongo.png"}/>MongoDB</Col>
                    </Row>
                    <Row>
                        <Col><Img src={"./img/python.png"}/>Python</Col>
                        <Col><Img src={"./img/java.png"}/>Java</Col>
                        <Col><Img src={"./img/sql.png"}/>SQL</Col>
                    </Row>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Skills;