import React, { useState } from 'react'
import Hero from '../Hero'
import Card from '../Commons/Card'
import SearchedCard from '../Commons/SearchedCard'


const HomePage:React.FC = () => {
  const [keyword, setKeyword]= useState("")
  
  return (
    <div style={{color:"white", minHeight:"100vh"}}>
        <Hero/>

        <input
        placeholder='search movie'
        style={{
          height:40,
          width:250,
           margin:50

          
        }}
         onChange={(e)=> {
          setKeyword(e.target.value)
        }}/>
        

        <h2 
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        >
          FOR YOU
        </h2>

        <h2 style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          </h2>
          

          <SearchedCard 
          keyword={keyword}
          />
          <h2 
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
          >
           TRENDING
          </h2>
        
        <Card/>
        
    </div>

  )
}

export default HomePage