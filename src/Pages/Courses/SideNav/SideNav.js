import React, { useEffect, useState } from 'react';
import './SideNav.css';

function SideNav(func) {
  console.log(func);
  const [courses, setcourses] = useState([])
    useEffect(()=>{
        fetch("https://codify-server.vercel.app/courses")
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])
    // console.log(func);
  return (
    <div className='bg-slate-300 side-nav'>
        <div className="menus ml-16 flex pt-20 h-full">

            <ul className='flex flex-col gap-y-5'>
              <li onClick={()=>func.func1()} className='flex flex-row gap-x-3 items-center cursor-pointer font-medium text-black py-3 hover:text-green-600 hover:font-bold transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                <span>View All</span>
              </li>
                {
                  courses.map(course => <Course func={func} key={course.id} props={course}></Course>)
                }
            </ul>
        </div>
    </div>
  )
}
function Course({props,func}){
  // console.log(func);
  return (
    <li onClick={()=>func.func(props.id)} className='flex flex-row gap-x-3 items-center cursor-pointer font-medium text-black py-3 hover:text-green-600 hover:font-bold transition-all'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
      <span>{props.category}</span>
    </li>
  )
}

export default SideNav