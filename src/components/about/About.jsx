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
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
`;

const Desc = styled.span`
  text-align: start;
  font-style: italic;
  color: lightgray;
  font-size: 1.2rem;
`;

const About = () => {
    return(
        <Section>
          <Container>
            <Left></Left>
            <Right>
                <Title>&lt;About/&gt;</Title>
                <Desc>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged.</Desc>
            </Right>
          </Container>
        </Section>
    )
}
export default About;