import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineSearch} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import movieData from "../../MovieData.json"


const Container = styled.div`
height: 70px;
width: 100%;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow:rgba(0,0,0,0.12)0px 1px 3px,
rgba(0,0,0,0.24) 0px, 1px, 2px;
overflow: hidden;

`
const Logo = styled.div`
    margin-left:40px;
    font-size: 30px;
    font-weight:bolder;
`
const Second = styled.div`
    margin-left:40px;
    display: flex;
    color: white;
    align-items: center;
`
const InputHold = styled.div`
   width: 70px;
   height: 20px;
   background-color: white;
   border: 1px solid white;
   display: flex;
   align-items: center;
   color: black;
   padding: 10px;
   border-radius:5px;
   transition:all 300ms;
   margin-right:20px;

   :hover{
    width: 300px;
   }
`
const IconSearch = styled.div`
    font-size: 20px;
`
const Input = styled.input`
    background-color: transparent;
    flex: 1;
    outline: none;
    height: 100%;
    overflow:hidden;

`
const UserHold = styled.div`
    font-size: 20px;
`

const Header :React.FC= () => {
  return (
    <Container>
        <Logo>K10XMOVIES</Logo>
        <Second>
            <InputHold>

            <IconSearch>
           < AiOutlineSearch/>
            </IconSearch>

            <Input placeholder='search....'/>
            </InputHold>

            <UserHold>
           <BiUserCircle/>
            </UserHold>

        </Second>

    </Container>
  )
}

export default Header