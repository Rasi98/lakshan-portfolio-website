import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map.jsx";
import Footer from "../common/Footer.jsx";
import { ToastContainer, toast, Flip } from 'react-toastify';
import ReactLoading from 'react-loading';
import emailData from '../static/emailjs.json';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 96%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Right = styled.div`
  flex: 2;
  padding: 30px;
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-weight: 200;
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
    const formRef = useRef(null);
    const inputRefs = {
        name : useRef(),
        email : useRef(),
        messege : useRef(),
    }

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
    }

    return(
        <Section>
            <Container>
                <Left>
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
                </Left>
                <Right>
                    <Map/>
                </Right>
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
            </Container>
            <Footer/>
        </Section>
    )
}
export default Contact;