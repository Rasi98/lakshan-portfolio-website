import React from "react";
import styled from "styled-components";

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
  gap: 40px;
  list-style: none;
`;
const ListItem = styled.li``;

const Navbar = () => {
    return(
        <Section>
            <Container>
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