import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser"
import styled from 'styled-components';



const Section = styled.div`
height: 100vh;
scroll-snap-align: center ;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  `
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  /* flex-direction: column; */
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`
const Input = styled.input`
  padding: 10px;
  background-color: #eeecec;
  border: none;
  border-radius: 10px;
`
const Textarea = styled.textarea`
  padding: 20px;
  background-color: #eeecec;
  border: none;
  border-radius: 10px;
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
`
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Rightimg = styled.img`
width: 100%;
border-color: rgba(0,0,0,0); 
padding-top: 10px;
`


export const My = () => {

  const ref = useRef()  

const [success,setSuccess] = useState(null);

const handleSubmit = (e) =>{
        e.preventDefault ();


        emailjs.sendForm('service_x8w94ri', 'template_lotgusg', ref.current, 'VetnLvQngdGA-utpx')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });

}
  return (
    <Section>
      <Container>
        <Left>
        
          <Form ref={ref} onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <Textarea placeholder="Write your message" name="message" rows={10}/>
            <Button type='Submit'>Send</Button>
            {success &&
             "Your message has been sent . we'll get back to you soon."}
          </Form>
        </Left>
        <Right>
        <Rightimg src="./img/wolf.png"/>
           {/* <Map/> */}
        </Right>
      </Container>
    </Section>
  )
}
