import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FooterText = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
  color: lightgray;

  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 1rem;
  }
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