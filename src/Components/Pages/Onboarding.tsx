
import React, { useState } from 'react'
import styled from '@emotion/styled'
import genres from "../Genres.json"
import { Link} from 'react-router-dom'



const Container=styled.div``
const LandingHero=styled.div`
height: 100vh;
width: 100%;
background-image:url("src/assets/slide1.jpg") ;
background-position: center;
background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
`
const H1=styled.h1`
font-size: 50px;
font-weight: bolder;
display: flex;
justify-content: center;
padding-top: 50px;

`
const H2=styled.div`
display: flex;
justify-content: center;
font-size: 30px;
padding-bottom: 10px;
font-weight:bold;
`
const ButtonHold=styled.button`
background: transparent;
border: none;
padding-top:50px;
z-index: 10px;


button{
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 15px;


}
`
const ButtHold = styled.button``

const Onboarding :React.FC= () => {
  const [Usergenre, setUsergenre]= useState("")
   const Newgenre:any = []
  Newgenre?.push(Usergenre)

  // localStorage.setItem("Usergenre", JSON.stringify(Newgenre))
  // setUsergenre(Newgenre)

  return (
    <Container>
      <LandingHero>
      <H1>KX10-MOVIES</H1>
        <H2>Unlimited movies, TV shows, and more</H2>
        
        <ButtonHold>
          
        {genres?.map((props)=>(
         
         <Link to="/homepage/"
            style={{
              color:"white",
              textDecoration:"none"
            }}
         >
             <button onClick={()=>{
            setUsergenre(props)
          }}>{props.genre}</button>
        
          
         </Link>
        
          
        ))}
        
        </ButtonHold>
        <ButtHold>
          <button>Continue</button>
        </ButtHold>



      
            {/* <ButtonHold>
                <button>Action</button>
                <button>Adventure</button>
                <button>Animated</button>
                <button>Biography</button>
                <button>Comedy</button>
                <button>Crime</button>
                <button>Dance</button>
                <button>Disaster</button>
                <button>Documentary</button>
                <button>Drama</button>
                <button>Erotic</button>
                <button>Family</button>
                <button>Fantasy</button>
                <button>Found Footage</button>
                <button>Historical</button>
                <button>Horror</button>
                <button>Independent</button>
                <button>Legal</button>
                <button>Live Action</button>
                <button>Martial Arts</button>
                <button>Musical</button>
                <button>Mystery</button>
                <button>Noir</button>
                <button>Performance</button>
                <button>Political</button>
                <button>Romance</button>
                <button>Satire</button>
                <button>Science Fiction</button>
                <button>Short</button>
                <button>Silent</button>
                <button>Slasher</button>
                <button>Sports</button>
                <button>Spy</button>
                <button>Superhero</button>
                <button>Supernatural</button>
                <button>Suspense</button> */}
                {/* <button>Teen</button>
                <button>Thriller</button>
                <button>War</button>
                <button>Western</button>
            </ButtonHold> */}
            
        </LandingHero>
    </Container>
  )
}

export default Onboarding