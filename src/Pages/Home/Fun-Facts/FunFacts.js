import React from 'react'

function FunFacts() {
  return (
    <div className='bg-gray-200 mt-20 py-10'>
        <h3 className='text-3xl text-center text-slate-700 font-medium'>We are Proud</h3>
        <p className='text-lg text-center text-slate-500'>You don't have to struggle alone, you've got our assistance and help.</p>
        <div className="flex items-center justify-center gap-y-3 gap-x-[8%] mt-10">
            <div className="flex flex-col items-center">
                <p className='text-5xl font-bold text-[#0c2e60]'>291</p>
                <p className='text-slate-500'>Amazing Course</p>
            </div>
            <div className="flex flex-col gap-y-3 items-center">
                <p className='text-5xl font-bold text-[#0c2e60]'>89</p>
                <p className='text-slate-500'>Talented Instructor</p>
            </div>
            <div className="flex flex-col gap-y-3 items-center">
                <p className='text-5xl font-bold text-[#0c2e60]'>4K+</p>
                <p className='text-slate-500'>Skilled Student</p>
            </div>
            <div className="flex flex-col gap-y-3 items-center">
                <p className='text-5xl font-bold text-[#0c2e60]'>10</p>
                <p className='text-slate-500'>Categories</p>
            </div>
        </div>
    </div>
  )
}

export default FunFacts