import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
      <div className='border-b shadow flex items-center px-[3%] justify-between py-3'>

        <div className="logo flex items-center justify-center ">
            <Link to="/">
              <img className='w-40' src="https://i.ibb.co/2dKrW8N/logo-removebg-preview.png" alt="" srcSet="" />
            </Link>
        </div>

        <div className="menus">
            <ul className='flex flex-row gap-x-10 items-center'>
                <li>
                  <Link to='/' className='flex flex-row gap-x-2 items-center cursor-pointer font-medium text-[#404040] py-3'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.625 8.625V19.875H18.375V8.625M2.625 10.875L12 2.625L21.375 10.875" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Home</span></Link>
                </li>
                <li >
                  <Link to='/courses' className='flex flex-row gap-x-2 items-center cursor-pointer font-medium text-[#404040] py-3'>
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.75 1.5C21.9489 1.5 22.1397 1.57902 22.2803 1.71967C22.421 1.86032 22.5 2.05109 22.5 2.25V15.75C22.5 15.9489 22.421 16.1397 22.2803 16.2803C22.1397 16.421 21.9489 16.5 21.75 16.5H2.25C2.05109 16.5 1.86032 16.421 1.71967 16.2803C1.57902 16.1397 1.5 15.9489 1.5 15.75V2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H21.75ZM2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 15.75C0 16.3467 0.237053 16.919 0.65901 17.341C1.08097 17.7629 1.65326 18 2.25 18H21.75C22.3467 18 22.919 17.7629 23.341 17.341C23.7629 16.919 24 16.3467 24 15.75V2.25C24 1.65326 23.7629 1.08097 23.341 0.65901C22.919 0.237053 22.3467 0 21.75 0H2.25Z" fill="#404040"/>
                      <path d="M7.5 9C7.5 8.80109 7.57902 8.61032 7.71967 8.46967C7.86032 8.32902 8.05109 8.25 8.25 8.25H18.75C18.9489 8.25 19.1397 8.32902 19.2803 8.46967C19.421 8.61032 19.5 8.80109 19.5 9C19.5 9.19891 19.421 9.38968 19.2803 9.53033C19.1397 9.67098 18.9489 9.75 18.75 9.75H8.25C8.05109 9.75 7.86032 9.67098 7.71967 9.53033C7.57902 9.38968 7.5 9.19891 7.5 9ZM7.5 5.25C7.5 5.05109 7.57902 4.86032 7.71967 4.71967C7.86032 4.57902 8.05109 4.5 8.25 4.5H18.75C18.9489 4.5 19.1397 4.57902 19.2803 4.71967C19.421 4.86032 19.5 5.05109 19.5 5.25C19.5 5.44891 19.421 5.63968 19.2803 5.78033C19.1397 5.92098 18.9489 6 18.75 6H8.25C8.05109 6 7.86032 5.92098 7.71967 5.78033C7.57902 5.63968 7.5 5.44891 7.5 5.25ZM7.5 12.75C7.5 12.5511 7.57902 12.3603 7.71967 12.2197C7.86032 12.079 8.05109 12 8.25 12H18.75C18.9489 12 19.1397 12.079 19.2803 12.2197C19.421 12.3603 19.5 12.5511 19.5 12.75C19.5 12.9489 19.421 13.1397 19.2803 13.2803C19.1397 13.421 18.9489 13.5 18.75 13.5H8.25C8.05109 13.5 7.86032 13.421 7.71967 13.2803C7.57902 13.1397 7.5 12.9489 7.5 12.75ZM6 5.25C6 5.44891 5.92098 5.63968 5.78033 5.78033C5.63968 5.92098 5.44891 6 5.25 6C5.05109 6 4.86032 5.92098 4.71967 5.78033C4.57902 5.63968 4.5 5.44891 4.5 5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5C5.44891 4.5 5.63968 4.57902 5.78033 4.71967C5.92098 4.86032 6 5.05109 6 5.25V5.25ZM6 9C6 9.19891 5.92098 9.38968 5.78033 9.53033C5.63968 9.67098 5.44891 9.75 5.25 9.75C5.05109 9.75 4.86032 9.67098 4.71967 9.53033C4.57902 9.38968 4.5 9.19891 4.5 9C4.5 8.80109 4.57902 8.61032 4.71967 8.46967C4.86032 8.32902 5.05109 8.25 5.25 8.25C5.44891 8.25 5.63968 8.32902 5.78033 8.46967C5.92098 8.61032 6 8.80109 6 9V9ZM6 12.75C6 12.9489 5.92098 13.1397 5.78033 13.2803C5.63968 13.421 5.44891 13.5 5.25 13.5C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12C5.44891 12 5.63968 12.079 5.78033 12.2197C5.92098 12.3603 6 12.5511 6 12.75V12.75Z" fill="#404040"/>
                    </svg>
                    <span>Courses</span>
                  </Link>
                </li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer font-medium text-[#404040] py-3'>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1C13.925 1 22 9.075 22 19M17 19C17 11.832 11.168 6 4 6M12 19C12 14.589 8.411 11 4 11M1 11V19M4 16C3.20435 16 2.44129 16.3161 1.87868 16.8787C1.31607 17.4413 1 18.2044 1 19C1 19.7956 1.31607 20.5587 1.87868 21.1213C2.44129 21.6839 3.20435 22 4 22C4.79565 22 5.55871 21.6839 6.12132 21.1213C6.68393 20.5587 7 19.7956 7 19C7 18.2044 6.68393 17.4413 6.12132 16.8787C5.55871 16.3161 4.79565 16 4 16V16Z" stroke="#404040" stroke-width="2"/>
                  </svg>
                  <span>Blog</span>
                </li>
                {/* <li className='flex flex-row gap-x-1 items-center cursor-pointer font-medium text-[#404040] py-3'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.486 0 0 4.486 0 10V14.143C0 15.167 0.897 16 2 16H3C3.26522 16 3.51957 15.8946 3.70711 15.7071C3.89464 15.5196 4 15.2652 4 15V9.857C4 9.59178 3.89464 9.33743 3.70711 9.14989C3.51957 8.96236 3.26522 8.857 3 8.857H2.092C2.648 4.987 5.978 2 10 2C14.022 2 17.352 4.987 17.908 8.857H17C16.7348 8.857 16.4804 8.96236 16.2929 9.14989C16.1054 9.33743 16 9.59178 16 9.857V16C16 17.103 15.103 18 14 18H12V17H8V20H14C16.206 20 18 18.206 18 16C19.103 16 20 15.167 20 14.143V10C20 4.486 15.514 0 10 0Z" fill="#404040"/>
                  </svg>
                  <span>Support</span>
                </li> */}
                
                <li className='flex flex-row gap-x-2 items-center cursor-pointer font-medium text-[#404040] py-3'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_212_39)">
                    <path d="M11.9997 1.33331C9.89001 1.33331 7.82772 1.9589 6.0736 3.13097C4.31947 4.30304 2.9523 5.96894 2.14496 7.91802C1.33763 9.8671 1.12639 12.0118 1.53797 14.0809C1.94955 16.1501 2.96545 18.0507 4.45721 19.5425C5.94897 21.0342 7.84959 22.0501 9.91872 22.4617C11.9878 22.8733 14.1326 22.662 16.0816 21.8547C18.0307 21.0474 19.6966 19.6802 20.8687 17.9261C22.0408 16.1719 22.6663 14.1096 22.6663 12C22.6663 9.171 21.5425 6.4579 19.5422 4.45751C17.5418 2.45712 14.8287 1.33331 11.9997 1.33331V1.33331ZM11.9997 21.3333C10.1537 21.3333 8.34922 20.7859 6.81436 19.7604C5.2795 18.7348 4.08322 17.2771 3.3768 15.5717C2.67039 13.8662 2.48555 11.9896 2.84568 10.1791C3.20581 8.36865 4.09473 6.70561 5.40002 5.40032C6.70531 4.09503 8.36835 3.20611 10.1788 2.84598C11.9893 2.48586 13.8659 2.67069 15.5714 3.3771C17.2768 4.08352 18.7345 5.2798 19.7601 6.81466C20.7856 8.34952 21.333 10.154 21.333 12C21.333 14.4753 20.3497 16.8493 18.5993 18.5996C16.849 20.35 14.475 21.3333 11.9997 21.3333Z" fill="#404040"/>
                    <path d="M18.667 8.06667C18.542 7.9425 18.3731 7.8728 18.197 7.8728C18.0208 7.8728 17.8519 7.9425 17.727 8.06667L10.3269 15.4333L6.32695 11.4333C6.20495 11.3016 6.03562 11.2237 5.85621 11.2169C5.6768 11.21 5.50201 11.2747 5.37028 11.3967C5.23856 11.5187 5.16069 11.688 5.15382 11.8674C5.14694 12.0468 5.21162 12.2216 5.33362 12.3533L10.3269 17.3333L18.667 9.01333C18.7294 8.95136 18.779 8.87762 18.8129 8.79638C18.8467 8.71514 18.8642 8.62801 18.8642 8.54C18.8642 8.45199 18.8467 8.36485 18.8129 8.28361C18.779 8.20237 18.7294 8.12864 18.667 8.06667Z" fill="#404040"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_212_39">
                    <rect width="24" height="24" fill="#404040"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <span>Success Story</span>
                </li>
                <li className='flex flex-row gap-x-2 items-center cursor-pointer font-medium text-[#404040] py-3'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9289 14.0977C14.3692 13.6137 14.6125 12.9824 14.6109 12.3281C14.6109 10.8773 13.4414 9.70312 12 9.70312C10.5586 9.70312 9.38906 10.8773 9.38906 12.3281C9.38906 13.0102 9.64688 13.6289 10.0711 14.0977C9.5628 14.4126 9.1383 14.846 8.83383 15.3606C8.52936 15.8753 8.35398 16.456 8.32266 17.0531C8.32138 17.0785 8.32529 17.1039 8.33415 17.1278C8.343 17.1516 8.35661 17.1734 8.37415 17.1918C8.39168 17.2102 8.41279 17.2249 8.43617 17.2349C8.45955 17.2449 8.48472 17.25 8.51016 17.25H9.53906C9.6375 17.25 9.71719 17.1727 9.72422 17.0742C9.81328 15.8883 10.8023 14.9531 12.0023 14.9531C13.2023 14.9531 14.1914 15.8906 14.2805 17.0742C14.2875 17.1727 14.3672 17.25 14.4656 17.25H15.4922C15.5176 17.25 15.5428 17.2449 15.5662 17.2349C15.5896 17.2249 15.6107 17.2102 15.6282 17.1918C15.6457 17.1734 15.6593 17.1516 15.6682 17.1278C15.6771 17.1039 15.681 17.0785 15.6797 17.0531C15.6141 15.8039 14.9297 14.7164 13.9289 14.0977ZM12 13.5469C11.332 13.5469 10.7883 13.0008 10.7883 12.3281C10.7883 11.6555 11.332 11.1094 12 11.1094C12.668 11.1094 13.2117 11.6555 13.2117 12.3281C13.2117 13.0008 12.668 13.5469 12 13.5469ZM21.75 5.25H18V3.9375C18 3.83437 17.9156 3.75 17.8125 3.75H16.5C16.3969 3.75 16.3125 3.83437 16.3125 3.9375V5.25H12.8438V3.9375C12.8438 3.83437 12.7594 3.75 12.6562 3.75H11.3438C11.2406 3.75 11.1562 3.83437 11.1562 3.9375V5.25H7.6875V3.9375C7.6875 3.83437 7.60313 3.75 7.5 3.75H6.1875C6.08437 3.75 6 3.83437 6 3.9375V5.25H2.25C1.83516 5.25 1.5 5.58516 1.5 6V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V6C22.5 5.58516 22.1648 5.25 21.75 5.25ZM20.8125 18.5625H3.1875V6.9375H6V8.25C6 8.35313 6.08437 8.4375 6.1875 8.4375H7.5C7.60313 8.4375 7.6875 8.35313 7.6875 8.25V6.9375H11.1562V8.25C11.1562 8.35313 11.2406 8.4375 11.3438 8.4375H12.6562C12.7594 8.4375 12.8438 8.35313 12.8438 8.25V6.9375H16.3125V8.25C16.3125 8.35313 16.3969 8.4375 16.5 8.4375H17.8125C17.9156 8.4375 18 8.35313 18 8.25V6.9375H20.8125V18.5625Z" fill="#404040"/>
                  </svg>
                  <span>FAQ</span>
                </li>
            </ul>
        </div>
        <div className="profile ml-20 flex flex-row gap-x-5 items-center">
          <div className="">
            <div className="flex items-center gap-x-3 hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4856 18.4284C10.5926 17.8284 13.4204 17.88 17.5328 18.4494C17.8306 18.4926 18.1028 18.6421 18.2989 18.8702C18.4951 19.0984 18.6021 19.3899 18.6002 19.6908C18.6002 19.9788 18.5012 20.2584 18.3224 20.4768C18.0108 20.8576 17.6915 21.2321 17.3648 21.6H18.9494C19.049 21.4812 19.1492 21.36 19.2506 21.237C19.6065 20.8006 19.8006 20.2546 19.8002 19.6914C19.8002 18.4764 18.9134 17.4294 17.6972 17.2614C13.4876 16.6788 10.5452 16.623 6.3122 17.2416C5.0834 17.421 4.2002 18.4842 4.2002 19.7076C4.2002 20.2506 4.3772 20.7876 4.7126 21.2226C4.8116 21.351 4.9094 21.477 5.0066 21.6006H6.5528C6.24885 21.2367 5.95239 20.8666 5.6636 20.4906C5.49197 20.2655 5.39939 19.9901 5.4002 19.707C5.4002 19.0608 5.8646 18.519 6.4856 18.4284ZM12.0002 12.6C12.473 12.6 12.9411 12.5069 13.3779 12.326C13.8146 12.1451 14.2115 11.8799 14.5458 11.5456C14.8801 11.2113 15.1452 10.8144 15.3262 10.3777C15.5071 9.9409 15.6002 9.47277 15.6002 9.00001C15.6002 8.52725 15.5071 8.05912 15.3262 7.62235C15.1452 7.18558 14.8801 6.78872 14.5458 6.45443C14.2115 6.12014 13.8146 5.85496 13.3779 5.67405C12.9411 5.49313 12.473 5.40001 12.0002 5.40001C11.0454 5.40001 10.1297 5.7793 9.45461 6.45443C8.77948 7.12956 8.4002 8.04523 8.4002 9.00001C8.4002 9.95479 8.77948 10.8705 9.45461 11.5456C10.1297 12.2207 11.0454 12.6 12.0002 12.6V12.6ZM12.0002 13.8C13.2732 13.8 14.4941 13.2943 15.3943 12.3941C16.2945 11.494 16.8002 10.2731 16.8002 9.00001C16.8002 7.72697 16.2945 6.50607 15.3943 5.6059C14.4941 4.70572 13.2732 4.20001 12.0002 4.20001C10.7272 4.20001 9.50626 4.70572 8.60608 5.6059C7.70591 6.50607 7.2002 7.72697 7.2002 9.00001C7.2002 10.2731 7.70591 11.494 8.60608 12.3941C9.50626 13.2943 10.7272 13.8 12.0002 13.8V13.8Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.8C17.9646 22.8 22.8 17.9646 22.8 12C22.8 6.0354 17.9646 1.2 12 1.2C6.0354 1.2 1.2 6.0354 1.2 12C1.2 17.9646 6.0354 22.8 12 22.8ZM12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24Z" fill="black"/>
              </svg>
              <button className='px-3 py-1 bg-white font-medium rounded-md'>Sign-out</button>
            </div>
            <div className="flex items-center gap-x-5">
              <button className='px-3 py-1 bg-slate-500 text-white font-medium rounded-md'><Link to='/login'>Login</Link></button>
              {/* <button className='px-3 py-1 bg-slate-500 text-white font-medium rounded-md'>Register</button> */}
            </div>
          </div>


          <div class="toggle-button-cover">
            <div class="">
              <div class="button r" id="button-1">
                <input type="checkbox" class="checkbox" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header