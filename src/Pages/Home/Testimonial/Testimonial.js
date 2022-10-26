import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testi.css';

function Testimonial() {
  return (
    <div className='mx-[15%] mt-20'>
        <h2 className='text-4xl text-slate-700 font-bold text-center'>Testimonial</h2>
        <p className='text-lg text-slate-500 text-center mb-20'>See what people says about us</p>
        <Carousel>
                <div className='flex flex-col items-center justify-center'>
                    <div className="w-40 h-40 mb-10">
                            <img className="w-40 h-40 rounded-full" src="https://i.ibb.co/M1hq2hP/stock-photo-close-up-headshot-portrait-of-smiling-s-caucasian-man-look-at-camera-posing-in-own-flat.webp" alt="" srcSet="" />
                            
                    </div>
                    <p className='mx-40  mb-20'>The sole purpose of eLearning is to teach.” — Christopher Palm. “The most profound words will remain unread unless you can keep the learner engaged. You can't see their eyes to know if they got it so … say it, show it, write it, demo it and link it to an activity.</p>
                    
                    {/* <p className="legend"></p> */}
                </div>

                <div className='flex items-center justify-center flex-col'>
                    <div className="w-40 h-40 mb-10">
                        <img className="w-40 h-40 rounded-full" src="https://i.ibb.co/4Y3dC0q/images.jpg" alt="" srcSet="" />
                    </div>
                    <p className='mx-40 mb-20'>“Employees will continue to gain more positive attitudes toward their work because of the availability of personalized training.” — Ellis and Kuznia, Corporate eLearning Impact on Employees</p>
                    {/* <p className="legend"></p> */}
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className="w-40 h-40 mb-10">
                        <img className="w-40 h-40 rounded-full" src="https://i.ibb.co/KDHWhs9/360-F-364211147-1qg-LVxv1-Tcq0-Ohz3-Faw-Ufrt-ONzz8nq3e.jpgg" alt="" srcSet="" />
                    </div>
                    <p className='mx-40 mb-20'>“The most difficult limitation to overcome when implementing eLearning is resistance. eLearning will not be successful in a company culture that is opposed to change.” — Ellis and Kuznia</p>

                    {/* <p className="legend"></p> */}
                </div>
            </Carousel>
    </div>
  )
}

export default Testimonial