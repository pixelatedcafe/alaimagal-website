import React from 'react';
import { TbPhoneCall } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { sansita } from '../layout';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div id='contact' className="relative bg-[url('/footer-bg-2.png')] bg-cover bg-center">
      <div className="flex flex-col md:flex-row w-full p-4 sm:p-5 h-auto md:h-56 items-center justify-between">
        <div className="w-full md:w-3/12 flex justify-center items-center">
          <img
            src="/footer-logo.png"
            alt="Alaimagal Hotels Logo"
            className="w-64 sm:w-80 md:w-64 p-4 sm:p-6 md:p-10"
          />
        </div>

        {/* <div className="h-auto md:h-72 w-full md:w-2/12 flex flex-col justify-center items-center mt-4 md:mt-0">
          <h1 className={`${sansita.className} text-xl sm:text-2xl md:text-3xl font-bold font-sansita text-center`}>
            Quick Links
          </h1>
          <ul className="list-none space-y-3 sm:space-y-4 pt-3 sm:pt-4 text-center text-base sm:text-lg md:text-lg">
            <li>Home</li>
            <li>Signatures</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div> */}

        <div className="h-auto md:h-80 w-full md:w-5/12 flex flex-col justify-center items-center mt-4 md:mt-0 max-md:mb-3">
          <h1 className={`${sansita.className} text-xl sm:text-2xl md:text-3xl font-bold font-sansita text-center`}>
            Reach out to us
          </h1>
          <div className=" max-md:flex-col flex max-md:justify-center max-md:items-center  pt-4 max-md:space-y-4 sm:pt-5 space-x-6 text-base sm:text-lg md:text-lg">
            <div className="flex items-justify-center items-start gap-2">
             <div className="">
                <p className="text-lg sm:text-xl md:text-xl text-center font-bold">
                  <TbPhoneCall />
                </p>
              </div>
              <div>
                <p className="text-center">+91 96260 66228</p>
                <p className="text-center">+91 86675 90755</p>
              </div>
              
            </div>
            <div className="flex justify-center items-start gap-2">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl text-center">
                <IoLocationOutline />
              </p>
              </div>

              <div>
                <p className=" text-left">
                GG Complex, 
                81, Vivekananda Rd, <br />
                Near Canara Bank ATM, 
                Ram Nagar,<br /> Coimbatore - 641009
              </p>
              </div>
              
              
            </div>
          </div>
          <div className='flex justify-center items-center space-x-4 pt-4 sm:pt-5 text-2xl'>
            <div>
              <IoLogoWhatsapp />
            </div>
            <div>
              <IoMail />
            </div>
            <div>
              <RiInstagramFill />
            </div>
          </div>
        </div>

         <div className="w-full md:w-4/12 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.35940109537!2d76.80913209915161!3d11.011970544709065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ff1c9044bf%3A0xb44a567e14719a5d!2zQWxhaW1hZ2FsIEhvdGVscyDgroXgrrLgr4jgrq7grpXgrrPgr40g4K6J4K6j4K614K6V4K6u4K-N!5e0!3m2!1sen!2sin!4v1751301861729!5m2!1sen!2sin"
            className="w-full max-w-[300px] h-[150px] sm:max-w-[350px] sm:h-[200px] md:max-w-[400px] md:h-[200px]"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="h-16 flex flex-col items-center justify-center space-y-1">
        <p>© 2025 Alaimagal Hotels. All rights reserved.</p>
        <p>
          Plated Digitally by{' '}
          <a
            className="font-semibold"
            target="_blank"
            href="https://www.thepixelatedcafe.com"
            rel="noopener noreferrer"
          >
            The Pixelated Café
          </a>
        </p>
      </div>

      {/* Decorative Images */}
      <div className="absolute top-0 left-0 hidden sm:block">
        <img src="/1.png" alt="Footer Background" className="w-16 sm:w-24 md:w-auto" />
      </div>
      <div className="absolute bottom-0 left-0 hidden sm:block">
        <img src="/4.png" alt="Footer Background" className="w-16 sm:w-24 md:w-auto" />
      </div>
      <div className="absolute top-0 right-0 hidden sm:block">
        <img src="/2.png" alt="Footer Background" className="w-16 sm:w-24 md:w-auto" />
      </div>
      <div className="absolute bottom-0 right-0 hidden sm:block">
        <img src="/3.png" alt="Footer Background" className="w-16 sm:w-24 md:w-auto" />
      </div>
    </div>
  );
};

export default Footer;