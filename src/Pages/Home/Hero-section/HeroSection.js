import React from 'react'

function HeroSection() {
  return (
    <div>
        <div className="flex flex-col sm:flex-row items-center mx-[8%] sm:mx-[10%]">
            <div className="w-full sm:w-[50%]">
                <h3 className='text-[30px] sm:text-[60px] font-medium text-slate-700 mt-10 sm:mt-0'>The World's Leading Distance-Learning Provider</h3>
                <p className='text-sm sm:text-base text-slate-600 mt-5'>Access 2700+Online yellow-shape Tutorial From Top Instructor.Meet university,and cultural institutions, who'll share their experience.</p>
                <button className='mt-5 py-2 px-4 bg-purple-700 text-white rounded-md'>Join now</button>
            </div>
            <div className="w-full sm:w-[50%]">
                <img src="" alt="" srcSet="https://i.ibb.co/xHsTYf2/Microsites-amico.png" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection