import React from 'react'
import { IoDownload } from "react-icons/io5";

const SignatureCreations = () => {

   const signatureMain = [
    {
        id: 1,
        name: 'Signature Full Meals',
        description: 'A royal spread of Alaimagal’s finest — biryani, raita, egg, gravy, and sweets, all plated with love. The ultimate feast for kings and queens of spice.',
        image: '/main_full_meals.png',
    },
    {
        id: 2,
        name: 'Signature Chicken Biryani',
        description: 'Slow-cooked seeraga samba rice layered with marinated chicken and aromatic masalas. Served with raita, this is Alaimagal’s timeless masterpiece.',
        image: '/main_chicken_briyani.png',
    },
    {
        id: 3,
        name: 'Signature Chicken Fried Rice',
        description: 'Wok-fried perfection with shredded chicken, crunchy veggies, and bold flavors in every grain. A street-style favorite turned signature dish.',
        image: '/main_chicken_fried_rice.png',
    },
    {
        id: 4,
        name: 'Signature Chicken Kothu',
        description: 'Chopped parotta mingled with spicy chicken, eggs, and gravy — a sizzling, smoky showstopper straight from the tawa to your soul.',
        image: '/main_chicken_kothu.png',
    },
    {
        id: 5,
        name: 'Signature Chicken Laba',
        description: 'Tender chicken cooked in a fiery, thick gravy bursting with flavor and tradition. Perfect with parotta or dosa, it’s Sunday lunch vibes any day.',
        image: '/main_chicken_laba.png',
    },
    {
        id: 6,
        name: 'Signature Kari Dosa',
        description: 'Crisp dosa crowned with spicy minced mutton masala. Crispy outside, juicy inside — a match made in Alaimagal heaven.',
        image: '/main_kari_dosa.png',
    },
    {
        id: 7,
        name: 'Signature Szechuan Fried Rice',
        description: 'Alaimagal’s Indo-Chinese twist — fiery Szechuan sauce tossed with rice, chicken, and veggies. Bold, bright, and blazing with flavor.',
        image: '/main_szechuan_fried_rice.png',
    }
];


  const signatureSide = [
    {
        id: 1,
        name: 'Signature Chicken 65',
        description: 'Deep-fried chunks of chicken, crisp on the outside, juicy inside, tossed in Alaimagal’s secret red masala — the OG of all sides.',
        image: '/side_chicken_65.png',
    },
    {
        id: 2,
        name: 'Signature Lemon Chicken',
        description: 'Zesty, tangy, and hot — this lemon-kissed chicken brings a refreshing punch to your spice ride.',
        image: '/side_lemon_chicken.png'
    },
    {
        id: 3,
        name: 'Signature Kholikondattam',
        description: 'A rustic village-style dry chicken fry — smoky, bold, and rooted in Tamil tradition. One bite, you’re hooked.',
        image: '/side_kholikondattam.png',
    },
    {
        id: 4,
        name: 'Signature Pallipalayam',
        description: 'A fiery Coimbatore classic made with dry red chilies, curry leaves, and no tomatoes — pure, punchy and proud.',
        image: '/side_pallipalayam.png',
    },
    {
        id: 5,
        name: 'Signature Uppu Kari',
        description: 'Salt, spice, and slow-fried mutton — this Chettinad treasure is dry, intense, and impossible to resist.',
        image: '/side_uppu_kari.png',
    },
    {
        id: 6,
        name: 'Signature Green 65',
        description: 'A vibrant twist on the classic — mint, coriander, and green chili come together in a herb-loaded blast of flavor.',
        image: '/side_green_65.png',
    },
    {
        id: 7,
        name: 'Signature Varutha Kari',
        description: 'Dry-fried mutton with roasted masalas, layered with deep South Indian soul. Bold, beefy, and beautiful.',
        image: '/side_varutha_kari.png',
    }
];

  return (
    <div id='menu' className=''>
        <div className='px-24 flex justify-between items-center'>
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
        <div className='flex'>
            <div className='relative w-full'>
                <div className='overflow-x-hidden'>
                    <div className='flex flex-row gap-6 animate-scroll'>
                        {signatureMain.map((item,index) => (
                            <div key={item.id} className=' flex items-center '>
                                <div className='p-4 flex flex-col items-center min-w-[400px]'>
                                    <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                                    <p className='text-[#03552A] text-justify'>{item.description}</p>    
                                </div>
                                
                                {index < signatureMain.length - 1 && (
                                    <img
                                    src= '/seperator.png'// Replace with your image URL
                                    alt='separator'
                                    className='h-[300]' // Adjust size and styling as needed
                                    />
                                )}
                            </div>
                        ))}
                        {signatureMain.map((item) => (
                            <div key={`second-${item.id}`} className='p-4 min-w-[400px]'>
                                <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                                <p className='text-[#03552A] text-justify'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='absolute w-[55px] right-0 top-4 rounded-l-4xl bg-[#03552A] h-55 flex items-center justify-center '>
                            <h1 className='text-white font-bold text-2xl transform rotate-90 whitespace-nowrap'>
                        Main Course
                    </h1>
                </div>
            </div>

            
        </div>
        {/* Side Dishes */}
        <div className='flex'>
            
            

            <div className='relative w-full'>
                <div className='absolute w-[50px] z-10 left-0 top-4 rounded-r-4xl bg-[#03552A] h-55 flex items-center justify-center opacity-100 '>
                    <h1 className=' text-white font-semibold text-2xl transform rotate-270 whitespace-nowrap'>
                        Side Dishes
                    </h1>
                </div>
                <div className='overflow-x-hidden'>
                    <div className='flex flex-row gap-6 animate-scroll-ii'>
                        {signatureSide.map((item,index) => (
                            <div key={item.id} className='flex items-center'>
                                <div className='p-4 flex flex-col items-center min-w-[400px]'>
                                    <img src={item.image} alt={item.name} className='w-full object-cover rounded-lg' />
                                    <p className='text-[#03552A]'>{item.description}</p>
                                </div>
                                {index < signatureMain.length - 1 && (
                                    <img
                                    src= '/seperator.png'// Replace with your image URL
                                    alt='separator'
                                    className='h-[300]' // Adjust size and styling as needed
                                    />
                                )}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           

            
        </div>

        
    </div>
  )
}

export default SignatureCreations