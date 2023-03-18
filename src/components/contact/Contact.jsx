import React, {useRef, useState, useEffect} from "react";
import Footer from "../common/Footer.jsx"
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map.jsx";
import { ToastContainer, toast, Flip } from 'react-toastify';
import ReactLoading from 'react-loading';
import emailData from '../static/emailjs.json';
import {Box, Grid} from "@mui/material";

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-weight: 200;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 5px;
  
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
`;

const InputArea = styled.textarea`
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 5px;

  ::-webkit-input-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
`;

const Button = styled.button`
  height: 40px;
  padding: 7px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1.1rem;
  background-color: rgb(20, 203, 189, 0.8);
  border: none;
  color: white;

  :hover {
    cursor: pointer;
    background-color: rgb(8, 209, 152, 0.8);
  }
`;
const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [messege , setMessege] = useState("");
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const formRef = useRef(null);
    const inputRefs = {
        name : useRef(),
        email : useRef(),
        messege : useRef(),
    }

    useEffect(() => {
        const width = window.innerWidth;
        if (width<=600){
            setIsMobile(true);
        }
    },[])

    const notify = () => toast.success("Messege sent successfully!");
    const error = () => toast.error("Please fill all the fields!");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ValidateInput()){
            setLoading(true);
            emailjs.sendForm(emailData.serviceID, emailData.templateID, formRef.current, emailData.publicKey)
                .then((result) => {
                    if (result.text === "OK"){
                        handleReset();
                        setLoading(false);
                        notify();
                    }
                }, (error) => {
                    console.log(error.text);
                    setLoading(false);
                });
        }
        else {
            error();
        }
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessege("");
    };

    const ValidateInput = () => {
        if (name === "" || email === "" || messege === ""){
            return false;
        }
        else {
            return true;
        }
    };

    const Spin = ({ type, color }) => (
        <ReactLoading type={type} color={color} height={20} width={20}/>
    );

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return(
        <Box>
            <Grid container sx={{ height:'100vh',scrollSnapAlign:'center', padding:{xs:'1rem 1rem 0',md:'2rem 4rem 0'}}}>
                {!isMobile &&
                    <Grid item xs={12} md={6}>
                            <Map/>
                    </Grid>
                }
                <Grid item xs={12} md={6}>
                    <Grid container
                          sx={{ height: '100%', padding:'1rem'}}
                          direction={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Title>Contact Me</Title>
                            <Input
                                ref={inputRefs.name}
                                type={"text"}
                                name={"name"}
                                placeholder={"Your name"}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <Input
                                ref={inputRefs.email}
                                type={"email"}
                                name={"email"}
                                placeholder={"Your email"}
                                value={email}
                                onChange={e => handleEmailChange(e)}
                            />
                            <InputArea
                                ref={inputRefs.messege}
                                placeholder={"Write your messege here"}
                                value={messege} name={"message"}
                                rows={10}
                                onChange={e => setMessege(e.target.value)}
                            />
                            <Button type={"submit"}>
                                {loading ? (<Load><Spin type={"spin"} color={"#ffffff"}/></Load>) : <span>Send</span>}
                            </Button>
                        </Form>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container
                          sx={{ height: '100%',width:'100%', padding:'1rem'}}
                          direction={"column"}
                          justifyContent={"flex-end"}
                          alignItems={"center"}>
                        <Footer/>
                    </Grid>

                </Grid>
            </Grid>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
                closeButton={false}
            />
        </Box>

    )
}
export default Contact;