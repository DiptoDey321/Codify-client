import React, { useEffect, useState } from 'react';

function Course() {
    const [courses, setcourses] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/courses")
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])
    console.log(courses);
  return (
    <div>
        <h3>All courses {courses.length}</h3>
    </div>
  )
}

export default Course