import React, { useEffect, useState } from 'react';
import DisplayCourse from './DisplayCourse/DisplayCourse';
import SideNav from './SideNav/SideNav';



function Course() {
  // const [primaryData, setPrimaryData] = useState(1)
  const [courseData, setcourseData] = useState([])

  const [courses, setcourses] = useState([])
  // console.log(courses);

  const handleClick = (id ) =>{
    console.log(id);
    // eslint-disable-next-line array-callback-return
    courses.map((course) => {
      if(course.id === id){
        setcourseData(course)
      }
    })
  }

  useEffect(()=>{
      fetch("https://codify-server.vercel.app/courses")
      .then(res => res.json())
      .then(data =>{ 
        setcourses(data)
       
      })
  },[])

  const viewAll = () =>{
    fetch("https://codify-server.vercel.app/courseslist")
      .then(res => res.json())
      .then(data => {
        console.log(data[0]);
        setcourseData(data[0])})

      console.log("clicked");  
  }

  useEffect(()=>{
    viewAll()
  },[])


  
  // console.log(courseData);
  return (
    <div className='flex flex-col sm:flex-row'>
        <div className="w-[400px] shrink-0">
          <SideNav func={handleClick} func1={viewAll}></SideNav>
        </div>
        <div className="w-fit">
          <DisplayCourse key={courseData.id} courseData={courseData}></DisplayCourse>
        </div>
    </div>
  )
}

export default Course