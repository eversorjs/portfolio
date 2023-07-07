import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const Container = styled.div`
    width: 1280px;
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 10px;
        
    }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    /* padding-left: 40px; */
`
const Logo = styled.img`
/* height: 50px; */


`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

@media only screen and (max-width: 768px) {
    display: none;
  }
`
const Listitem = styled.li`
color: white;
cursor: pointer;
`
const Icons = styled.div`
display: flex;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
    display: none;
  }
    /* padding-right: 40px; */
`
const Icon = styled.img`
height: 20px;
width: 30px;
cursor: pointer;
/* margin: 2px; */
`
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo2.png"/>
            <List>
                <Listitem>Contact :</Listitem>
                {/* <Listitem>Studio</Listitem> */}
                <Listitem>sukhdevthakur08@gmail.com</Listitem>
                <Listitem>+9779804564641</Listitem>
            </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
        </Section>
  )
}
