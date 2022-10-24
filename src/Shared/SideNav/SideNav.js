import React from 'react'

function SideNav() {
  return (
    <div className='w-64'>
        <div className="logo flex items-center justify-center mt-10">
            <img className='w-40' src="https://i.ibb.co/wr0nHSJ/logo.png" alt="" srcSet="" />
        </div>
        <div className="menus mt-10">
            <ul className='flex flex-col gap-y-5'>
                <li>Courses</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Gallery</li>
                <li>Success Story</li>
                <li>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav