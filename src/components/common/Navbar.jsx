import React from "react";
import styled from "styled-components";
import Cube from "../3DModels/Cube.jsx"

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 25px 0px;
`;
const List = styled.ul`
  display: flex;
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
    //color: rgba(89, 239, 226, 0.8);
    //transform: scale(1.1);
  }
`;

const Navbar = () => {
    return(
        <Section>
            <Container>
                {/*<Cube/>*/}
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
            </Container>
        </Section>
    )
}

export default Navbar;