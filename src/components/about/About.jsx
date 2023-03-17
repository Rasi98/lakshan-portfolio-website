import React from "react";
import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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
  //justify-content: space-between;
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
  justify-content: center;
  align-items: center;
  gap: 20px;
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
const Emoji = styled.span`
  font-style: normal;
`;
const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin-top: 2.4rem;
`;

const SocialLogo = styled.div`
  transition: transform 0.4s ease;
  
    :hover{
      transform: scale(1.6);
    }
`;

const Link = styled.a`
  text-decoration:none;
  :visited{
    color: white;
    text-decoration: none;
  }
  :hover{
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 40%;
  border-radius: 60%;
  border: 2px dashed #3ae3da;
  padding: 10px;
  animation: profilePicAnimate 2s infinite ease alternate;

  @keyframes profilePicAnimate {
    to {
      transform: translateY(7px);
    }
  }
`;

const About = () => {
    return(
        <Section>
          <Container>
            <Left>
                <Img src={"../../src/assets/images/lakshan2.png"}/>
            </Left>
            <Right>
                <Title>&lt;About/&gt;</Title>
                <Desc>
                    Hi there <Emoji>&#128075;</Emoji>, I'm Lakshan Rasingolla, a passionate
                    front-end software developer with over a year of industry experience.  I've been always
                    dedicated to creating innovative and visually appealing web experiences that leave a
                    lasting impression on users. I believe that every website should be unique, intuitive,
                    and aesthetically pleasing, which is why I always strive to push the boundaries of what's
                    possible with the latest technologies. Let's collaborate and bring your web project to life...!
                </Desc>
                <SocialLinks>
                    <SocialLogo>
                        <Link href={"https://github.com/Rasi98"} target={"_blank"}>
                            <GitHubIcon style={{height:'30px',width:'30px'}}/>
                        </Link>
                    </SocialLogo>
                    <SocialLogo>
                        <Link href={"https://www.linkedin.com/in/lakshan-rasingolla/"} target={"_blank"}>
                            <LinkedInIcon style={{height:'30px',width:'30px'}}/>
                        </Link>
                    </SocialLogo>
                    <SocialLogo>
                        <Link href={"https://www.instagram.com/lakshan_98_/"} target={"_blank"}>
                            <InstagramIcon style={{height:'30px',width:'30px'}}/>
                        </Link>
                    </SocialLogo>
                </SocialLinks>
            </Right>
          </Container>
        </Section>
    )
}
export default About;