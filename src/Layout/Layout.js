import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
function Layout() {
  return (
    <div className=''>
        <div className="h-fit w-full">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Layout