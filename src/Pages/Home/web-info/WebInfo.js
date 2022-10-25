import React from 'react'

function WebInfo() {
  return (
    <div className='mt-16 flex justify-between mx-[15%] items-center'>
        <div className="w-[45%]">
            <img src="https://i.ibb.co/ZBhrWJ7/nicole-wolf-x-TBn1-YBr-TE-unsplash.jpg" alt="" srcSet="" />
        </div>
        <div className="w-[45%]">
           <h2 className='text-[35px] font-medium text-slate-700'>Achieve your <br /> Goals with Codify</h2>
           <p className='text-slate-500 mt-5 text-justify'>You can be your own Guiding star with our help. Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through ...</p>
           <div className=" mt-5">
                <p className='flex items-center gap-x-2 text-slate-500'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L6.25 11L8.875 8M7 6L12.25 11L21 1M15 1L11.5 5" stroke="#9747FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Upskill you</span>
                </p>
                <p className='flex items-center gap-x-2 text-slate-500'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L6.25 11L8.875 8M7 6L12.25 11L21 1M15 1L11.5 5" stroke="#9747FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span> Access more then 100 online courses</span>
                </p>
                <p className='flex items-center gap-x-2 text-slate-500'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L6.25 11L8.875 8M7 6L12.25 11L21 1M15 1L11.5 5" stroke="#9747FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Learn the latest skills & tecnology</span>
                </p>
           </div>
        </div>
    </div>
  )
}

export default WebInfo