import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CheckOut() {
    const {id} = useParams();
 

    const [data, setdata] = useState([]);

    useEffect(()=>{
        fetch("https://codify-server.vercel.app/courseslist")
        .then(res => res.json())
        .then(data => {
            setdata(data[0].courses)})
    },[])

  return (
    <div className='mx-[10%] sm:mx-[20%]'>
        <h3 className='text-[35px] sm:text-[70px] font-bold text-slate-700'>Congratulations...</h3>
        {
            // eslint-disable-next-line array-callback-return
            data.map(course =>{
                // eslint-disable-next-line eqeqeq
                if(course.id == id){
                    return(
                        <h5 className='mt-6 text-2xl font-bold mb-10'>You have successfull enrolled : <span className='text-green-800'>{course?.name}</span></h5>
                    )
                }
            })
        }

       
    </div>
  )
}

export default CheckOut