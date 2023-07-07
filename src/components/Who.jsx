import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Cube } from './Cube'

const Section = styled.div`
height: 100vh;
/* background-color: rebeccapurple; */
scroll-snap-align: center ;
display: flex;
justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
flex: 1;

@media only screen and (max-width: 768px) {
    display: none;
  }
`


const Right = styled.div`
  flex: 1;
  margin-left: 20px;
flex-direction: column;
justify-content: center;
gap: 25px;

@media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
const Title = styled.h1`
font-size: 40px;
padding-top: 90px;
margin: 10px;
padding-left: 30px;

@media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`
const Whatwedo = styled.div`
display: flex;
align-items: center;
gap: 5px;
border: 0;
padding:0;
`
const Line = styled.img`
height: 80px;
border: 0;
padding: 0;
padding-left: 30px;
`
const Subtitle = styled.h2`
color: #da4ea2;
font-size: 25px;
`
const Desc = styled.p`
font-size: 30px;
color: lightgray;
padding-left: 30px;
margin: 10px;
`
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 300;
width: 120px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
margin-left: 60px;
/* padding-left: 30px; */
`

export const Who = () => {
  return (
    <Section>
      {/* <Navbar/> */}
      <Container>
        <Left>
        <Canvas camera={{fov:20, position:[6,6,6]}}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
        <Cube/>
           </Canvas>
          </Left>
        <Right>
        <Title>Just CODE it Anyway </Title>
          <Whatwedo>
             <Line src="./img/wline.png"/>
            <Subtitle>Who we are</Subtitle>
          </Whatwedo>
          <Desc>A creative designers and developers with a passion for the arts.</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}
 