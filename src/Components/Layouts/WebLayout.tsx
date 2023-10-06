import React from 'react'
import Header from '../Blocks/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Blocks/Footer'
import DetailedPage from '../Pages/DetailedPage'

const WebLayout:React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet  />
        {/* <DetailedPage/> */}
        <Footer/>
    </div>
  )
}

export default WebLayout