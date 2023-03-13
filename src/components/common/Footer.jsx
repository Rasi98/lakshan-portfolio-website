import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 4%;
`;

const FooterText = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
  color: lightgray;
`;

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}


const Footer = () => {
    return(
        <Section>
           <FooterText>&#169; {getYear()} | Developed by Lakshan Rasingolla</FooterText>
        </Section>
    )
}

export default Footer;