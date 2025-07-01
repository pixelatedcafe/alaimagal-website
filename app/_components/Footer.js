import React from 'react'
import { TbPhoneCall } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="relative bg-[url('/footer-bg-2.png')] bg-cover bg-center">
      <div className='flex w-full p-5 h-86 items-center justify-between'>
        <div className='w-3/12 flex justify-center items-center '>
            <img src="/footer-bg-1.png" alt="Alaimagal Hotels Logo" className="w-96 p-10" />
        </div>

        <div className='h-72 w-2/12 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold font-sansita'>Quick Links</h1>
          <ul className="list-none space-y-4 pt-4 text-center text-lg">
            <li className="">Home</li>
            <li className="">Signatures</li>
            <li className="">Menu</li>
            <li className="">Gallery</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
          </ul>
        </div>

        <div className='h-80 w-3/12 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold font-sansita'>Reach out us</h1>
          <div className='pt-5 space-y-4.5 text-lg '>
            <div className='flex flex-col items-center'>
              <p className='text-center font-bold text-xl'><TbPhoneCall /></p>
              <p className="pt-2 text-center">+91 96260 66228</p>
              <p className="text-center">+91 86675 90755</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-xl text-center font-bold'><IoLocationOutline /></p>
              <p className='pt-2 text-center'>GG Complex, <br />
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
        <p>Plated Digitally by <a className='font-semibold' target="_blank" href='https://www.thepixelatedcafe.com'>The Pixelated Café</a></p>
      </div>
      <div className='absolute top-0 left-0'>
        <img src="/1.png" alt="Footer Background" className="" />
      </div>
       <div className='absolute bottom-0 left-0'>
        <img src="/4.png" alt="Footer Background" className="" />
      </div>
       <div className='absolute top-0 right-0'>
        <img src="/2.png" alt="Footer Background" className="" />
      </div>
       <div className='absolute bottom-0 right-0'>
        <img src="/3.png" alt="Footer Background" className="" />
      </div>

    </div>
  )
}

export default Footer