import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
  
`;
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 25px 0px;

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    justify-content: center;
  }
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    justify-content: center;
  }
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
`;
const ListItem = styled.li`
  font-family: 'Roboto';
  transition: transform 0.6s ease;
  display: inline-block;
  position: relative;
  
  :hover{
    cursor: pointer;
    color: rgba(89, 239, 226, 0.8);
    transform: scale(1.2);
  }
  
  ::after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -3px;
    left: 0;
    background-color: rgba(89, 239, 226, 0.8);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 5px 15px;
  border: 2px solid rgb(20,203,189);
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  background-color: rgb(20,203,189,0.1);
  color: rgb(20,203,189);

  :hover{
    cursor: pointer;
    color: white;
    border: 2px solid rgb(8, 209, 152,0.8);
    background-color: rgb(8, 209, 152,0.8);
  }
`;

const Navbar = () => {
    return(
        <Section>
            <Container>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Skills</ListItem>
                        <ListItem>Contact</ListItem>
                        <Button>Resume</Button>
                    </List>
            </Container>
        </Section>
    )
}

export default Navbar;