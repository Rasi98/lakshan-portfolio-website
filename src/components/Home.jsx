import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  flex-direction: row;
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
  margin-top: 0.5rem;
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
  font-weight: bold;
  font-size: 1.1rem;
  background-color: rgb(20,203,189,0.8);
  border: 0;
  color: white;
  margin-top: 0.8rem;
`;

const RightSection = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate {
    to{
      transform: translateY(15px);
    }
  }
`;

const Home = () => {
    return(
        <Section>
            <Navbar/>
            <Container>
                <LeftSection>
                    <Title>&lt;HelloWorld/&gt;</Title>
                    <Name>_Jenson Ackless_</Name>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the.</Desc>
                    <Line/>
                    <Button>More</Button>
                </LeftSection>
                <RightSection>
                    <Image src={"../src/assets/logo/logo-main.png"}></Image>
                </RightSection>
            </Container>
        </Section>
    )
}
export default Home;