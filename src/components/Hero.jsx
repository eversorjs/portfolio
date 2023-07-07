import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import {Sphere} from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%; 
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const Left = styled.div`
margin-left: 20px;
flex: 2;
flex-direction: column;
justify-content: center;
gap: 25px;

@media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`
const Title = styled.h1`
font-size: 40px;
padding-top: 90px;
margin: 10px;
padding-left: 30px;
color: white;

@media only screen and (max-width: 768px) {
    text-align: center;
  }
`
const Whatwedo = styled.div`
display: flex;
align-items: center;
gap: 5px;
/* font-size: 50; */
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
padding-left: 30px;
`
const Desc = styled.p`
font-size: 30px;
color: lightgray;
padding-left: 30px;
margin: 10px;

@media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 300;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
margin-left: 60px;
/* padding-left: 30px; */
`

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const Img = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to{
      transform: translateY(35px);
      
    }
    
  }
`
export const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Turn Ideas Into Reality </Title>
          <Whatwedo>
             <Line src="./img/wline.png"/>
            <Subtitle>What we Do</Subtitle>
          </Whatwedo>
          <Desc>we work to design, create, and maintain websites and web applications.</Desc>
          <Button>Learn More</Button>
          </Left>
        <Right>
        <Canvas >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <Sphere args={[1,100,200]} scale={2.4}>
          <MeshDistortMaterial
          color="#7a1bbe"
          attach="material"
          distort={0.6}
          speed={3}
          
          />
          </Sphere>
           </Canvas>
          <Img src="./img/img1.png"/>
        </Right>
      </Container>
    </Section>
  )
}
 