import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Skills from "./components/skills/skills.jsx";
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background-image: url("../src/assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Home/>
      <About/>
        <Skills/>
      <Contact/>
    </Container>
  )
}

export default App
