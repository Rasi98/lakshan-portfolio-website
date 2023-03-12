import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import styled from "styled-components";

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
      <Contact/>
    </Container>
  )
}

export default App