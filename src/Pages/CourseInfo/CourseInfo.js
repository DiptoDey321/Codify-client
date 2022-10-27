import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

function CourseInfo() {
  const {id} = useParams();
 

  const [data, setdata] = useState([]);

  useEffect(()=>{
    fetch("https://codify-server.vercel.app/courseslist")
      .then(res => res.json())
      .then(data => {
        setdata(data[0].courses)})
  },[])

  console.log(data);

  return (
    <div className='mx-[8%] sm:mx-[12%]'>
      <div className="flex justify-end mt-3">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button className='px-3 py-2 bg-gray-700 text-white rounded-md' onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
      </div>
       <div ref={ref} className="">
       {
        data.map(course => {
          if(course.id == id){
            return(
              <div className="">
                <div className="flex flex-col-reverse sm:flex-row py-10 items-center justify-center">
                  <div className="w-full sm:w-[50%] pr-10">
                    <h1 className='text-[25px] sm:text-[50px] text-slate-700 font-bold sm:mt-0 mt-5'>Grow Your carrier in</h1>
                    <p className='text-xl sm:text-3xl text-orange-500 font-bold'>{course.name}</p>
                    <p className='mt-5 text-slate-500 text-sm sm:text-base' >{course.des}</p>
                    <button className='px-4 py-2 bg-orange-500 text-white mt-5 rounded'><Link to={`/checkout/${course.id}`}>Get premium excess</Link></button>
                  </div>
                  <div className="w-full sm:w-[50%]">
                    <img className='w-full' src={course.img} alt="" />
                  </div>
                </div>
                <div className="other mt-10 mx-[6%]">
                  <h3 className='text-slate-600 text-3xl'>You will learn :</h3>
                  <p className='border p-4 mt-5 text-slate-500'>{course.learn}</p> <br />
                  <p className='mb-10'>Course Duration : <span className='text-green-900 text-base'>{course.courseTime}</span></p>
                </div>
              </div>
            )
          }
        })
       }
       </div>
    </div>
  )
}

export default CourseInfo