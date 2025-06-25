import React from 'react'
import { IoDownload } from "react-icons/io5";

const SignatureCreations = () => {

    const signatureMain = [
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
    ]

    const signatureSide = [
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
        {
            id: 1,
            name: 'Signature Chicken Biryani',
            description: 'Alaimagal’s signature chicken biryani, a fragrant blend of basmati rice, tender chicken, and aromatic spices, served with a side of raita.',
            image: '/signature-chicken-biryani.png',
        },
    ]
  return (
    <div className='px-24'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-[#03552A] font-extrabold text-[40px]'>Our Signature Creations</h1>
            </div>

            <div className='flex space-x-8 py-14'>
                <button className='border-2 border-[#03552A] font-semibold text-xl flex items-center gap-1 px-2 py-2 rounded-lg'>
                    View Full Menu 
                </button>
                <button className='bg-[#03552A] gap-1 flex text-xl font-semibold border-white text-white rounded-lg py-2 px-3'>
                    Download Menu <span className='text-3xl'><IoDownload /></span>
                </button>
            </div>


        </div>

        {/* Main Dishes */}
        <div>
            <h1 className='text-[#03552A] font-semibold text-2xl py-4'>Main Dishes</h1>
            <div className='overflow-x-hidden'>
                <div className='flex flex-row gap-6 animate-scroll'>
                    {signatureMain.map((item) => (
                        <div key={item.id} className='p-4 min-w-[250px]'>
                            <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                            <p className='text-[#03552A]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignatureCreations