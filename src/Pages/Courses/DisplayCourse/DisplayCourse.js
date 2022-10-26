import React from 'react'

function DisplayCourse(courseData) {
    
    // console.log(courseData);
  return (
    <div className="">
        <h1 className='ml-10 text-left text-3xl font-bold pt-8 text-green-800'>{courseData.courseData.category}</h1>
        <div className='flex items-center flex-wrap gap-10  mt-10 mx-10 pb-10'>
            {
                courseData?.courseData?.courses?.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
            }
        </div>
    </div>
    
  )
}
function SingleCourse({course}){
    // console.log(course);
    return (
        <div className="w-[400px] border-2 rounded-md">
            <div className="bg-white flex justify-center">
                <img className="w-full" src={course.img} alt="" srcSet="" />
            </div>
            <div className="flex justify-between px-3 py-3">
                <p className='text-base font-bold text-slate-600'>{course.name}</p>
                <p className='text-base font-bold text-lime-800'>${course.price}</p>
            </div>
            <p className='text-sm px-3 mb-3 text-slate-600 text-justify'>{(course.des).length > 200 ? (course.des).slice(0,200) : course.des}</p>
            <div className="flex items-center justify-center mb-5">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-md"> Buy now</button>
            </div>
        </div>
    )
}

export default DisplayCourse