import React from 'react'

function HeroSection() {
  return (
    <div>
        <div className="flex items-center mx-[10%]">
            <div className="w-[50%]">
                <h3 className='text-[60px] font-medium text-slate-700'>The World's Leading Distance-Learning Provider</h3>
                <p className='text-base text-slate-600 mt-5'>Access 2700+Online yellow-shape Tutorial From Top Instructor.Meet university,and cultural institutions, who'll share their experience.</p>
                <button className='mt-5 py-2 px-4 bg-purple-700 text-white rounded-md'>Join now</button>
            </div>
            <div className="w-[50%]">
                <img src="" alt="" srcSet="https://i.ibb.co/xHsTYf2/Microsites-amico.png" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection