import React from "react";
import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Grid} from '@mui/material'

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

const Emoji = styled.span`
  font-style: normal;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin-top: 2.4rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 80%;
    margin-top: 3rem;
  }
`;

const SocialLogo = styled.div`
  transition: transform 0.4s ease;
  
    :hover{
      transform: scale(1.6);
    }

  @media only screen and (max-width: 900px) {
    transition: none;
    
    :hover{
      transform: none;
    }
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

  @media only screen and (max-width: 600px) {
    height: 200px;
    animation: none;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    height: 330px;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 5px 15px;
  border: 2px solid rgb(20,203,189);
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  background-color: rgb(20,203,189,0.2);
  color: white;
  
  :hover {
    background-color: rgb(20,203,189);
  }

  //@media only screen and (max-width: 600px) {
  //  display: block;
  //}
  //
  //@media only screen and (min-width: 600px) and (max-width: 900px) {
  //  display: block;
  //}
  
`;

const About = () => {
    return(
            <Grid container sx={{ height:'100vh',scrollSnapAlign:'center',padding:{xs:'1rem',md:'2rem 4rem'}}} >
                <Grid item xs={12} md={6}>
                    <Grid container sx={{ height: '100%' }} justifyContent={"center"} alignItems={"center"}>
                        <Img src={"./img/lakshan2.png"}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container
                          sx={{ height: '100%', padding:'1rem',gap:{xs:'1.5rem',sm:'1rem'}}}
                          direction={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}>
                        <Title>&lt;About/&gt;</Title>
                        <Desc>
                            Hi there <Emoji>&#128075;</Emoji>, I'm Lakshan Rasingolla, a passionate
                            front-end software developer with over a year of industry experience.  I've been always
                            dedicated to creating innovative and visually appealing web experiences that leave a
                            lasting impression on users. I believe that every website should be unique, intuitive,
                            and aesthetically pleasing, which is why I always strive to push the boundaries of what's
                            possible with the latest technologies. Let's collaborate and bring your web project to life...!
                        </Desc>
                        <Button><Link href={"https://drive.google.com/file/d/1B6Rx2FVV8Blvqa-pJlbBXHaUwbt7sqYV/view?usp=sharing"} target={"_blank"}>View Resume</Link></Button>
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
                    </Grid>
                </Grid>
            </Grid>
    )
}
export default About;