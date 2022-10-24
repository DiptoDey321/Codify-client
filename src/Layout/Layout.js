import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import SideNav from '../Shared/SideNav/SideNav'

function Layout() {
  return (
    <div className='flex'>
        <div className="">
            <SideNav></SideNav>
        </div>
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Layout