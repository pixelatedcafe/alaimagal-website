import React from 'react'
import { TbPhoneCall } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[url('/footer.svg')] m-5 h-96 bg-cover bg-center">
      <div className='flex w-full h-80 items-center justify-between'>
        <div className='w-4/12 flex justify-center items-center '>
            <img src="/footer-logo-1.png" alt="Alaimagal Hotels Logo" className="w-96 p-10" />
        </div>

        <div className='h-72 w-2/12 '>
          <h1 className='text-3xl font-bold'>Quick Links</h1>
          <ul className="list-none space-y-4 pt-5 font-semibold text-lg">
            <li className="">Home</li>
            <li className="">Signatures</li>
            <li className="">Menu</li>
            <li className="">Gallery</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
          </ul>
        </div>

        <div className='h-72 w-2/12'>
          <h1 className='text-3xl font-bold'>Reach out us</h1>
          <div className='pt-5 space-y-4 text-lg '>
            <div>
              <TbPhoneCall />
              <p className="">+91 96260 66228</p>
              <p className="">+91 86675 90755</p>
            </div>
            <div>
              <IoLocationOutline />
              <p>GG Complex, <br />
81, Vivekananda Rd,<br />
Near Canara Bank ATM, <br/>Ram Nagar, Coimbatore - 641009</p>
            </div>
          </div>
        </div>

        <div className='w-4/12 flex justify-center items-center'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.35940109537!2d76.80913209915161!3d11.011970544709065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ff1c9044bf%3A0xb44a567e14719a5d!2zQWxhaW1hZ2FsIEhvdGVscyDgroXgrrLgr4jgrq7grpXgrrPgr40g4K6J4K6j4K614K6V4K6u4K-N!5e0!3m2!1sen!2sin!4v1751301861729!5m2!1sen!2sin" 
            width="400" 
            height="300" 
            style={{ border: "0" }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
        <div className='h-16 flex flex-col items-center justify-center spacce-y-1'>
          <p>© 2025 Alaimagal Hotels. All rights reserved.</p>
          <p>Crafted with <span className="text-red-500">♥</span> by <a target="_blank" href='https://www.thepixelatedcafe.com'>The Pixelated Café</a></p>
        </div>

    </div>
  )
}

export default Footer