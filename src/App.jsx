import styled from 'styled-components'
import { Hero } from './components/Hero'
import { My } from './components/My'
import { Who } from './components/Who'
import { Works } from './components/Works'
// import { Test } from './components/Test'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
background: url("./img/bg.jpg");
&::-webkit-scrollbar{
  display: none;
  /* width: 1440px; */
}
`;

function App() {

  return (
  
    <Container>
    <Hero/>
      <Who/>
      <Works/>
      <My/>
      {/* <Test/> */}
    </Container>    
    
  )
}

export default App
