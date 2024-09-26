import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      {/*----leftsection---*/}
      <div>
        <img className='mb-5 w-40' src={assets.logo} alt=''/>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is an intuitive and user-friendly online doctor booking platform designed to connect patients with top healthcare professionals. Whether you're seeking a general physician, dermatologist, gynecologist, pediatrician, or neurologist, Healio offers a comprehensive directory of highly qualified and trusted doctors, ensuring easy access to healthcare anytime, anywhere.</p>

      </div>

      {/*----Centersection---*/}
      <div>
        <p className='text-xl font-meduim mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      {/*----Rightsection---*/}
      <div>
        <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
        <ul  className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>mahekpandey@outlook.com</li>
        </ul>
      </div>

    </div>
    <div>
        {/*----copyright text---*/}
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright © 2024 Mahek Pandey - All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer