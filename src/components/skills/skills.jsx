import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  gap: 2rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`;

const Desc = styled.span`
  text-align: center;
  font-style: italic;
  color: lightgray;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  margin-bottom: 1rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Img = styled.img`
    width: 80px;
`;

const Skills = () => {
    return(
        <Section>
            <Container>
                <Left>
                    <Title>&lt;Skills/&gt;</Title>
                    <Desc>
                        I have been working with several cutting edge tools & techniques related to
                        frontend, backend & databases.Whether you need a simple website or a complex web application,
                        I have the skills, expertise & courage to bring your vision to life. Here are a few technologies
                        I’ve been working with recently....
                    </Desc>
                </Left>
                <Right>
                    <Row>
                        <Col><Img src={"../../src/assets/icons/html.png"}/>HTML</Col>
                        <Col><Img src={"../../src/assets/icons/css.png"}/>CSS</Col>
                        <Col><Img src={"../../src/assets/icons/javascript.png"}/>JavaScript</Col>
                    </Row>
                    <Row>
                        <Col><Img src={"../../src/assets/icons/react.png"}/>React</Col>
                        <Col><Img src={"../../src/assets/icons/node.png"}/>NodeJs</Col>
                        <Col><Img src={"../../src/assets/icons/mongo.png"}/>MongoDB</Col>
                    </Row>
                    <Row>
                        <Col><Img src={"../../src/assets/icons/python.png"}/>Python</Col>
                        <Col><Img src={"../../src/assets/icons/java.png"}/>Java</Col>
                        <Col><Img src={"../../src/assets/icons/sql.png"}/>SQL</Col>
                    </Row>
                </Right>
            </Container>
        </Section>
    )
}

export default Skills;