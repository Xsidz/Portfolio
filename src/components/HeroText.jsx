import React from 'react'
import { FlipWords } from './FlipWords'
const words=["Secure","Modern","Scalable", "Efficient"]
const HeroText = () => {
  return (
    <div className='z-10 mt:20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* Desktopview */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className=' text-4xl font-medium'>Hii I'm Siddhesh</h1>

            <div className="flex flex-col items-start">
                <p className='text-5xl font-medium text-neutral-300'>A Developer <br /> Dedicated to Crafting</p>
                <div>
                    <FlipWords words={words} className="font-black text-white text-8xl"/>
                </div>

                <p className='text-4xl font-medium text-neutral-300'>Web Solution</p>
            </div>
        </div>
        {/* MobileView */}
        <div className="flex- flex-col space-y-6 md:hidden">
            <p className='text-4xl font-medium mt-12'>Hii I'm Siddhesh</p>
            <div>
                <p className='text-5xl font-black text-neutral-300'>Building </p>
                <div>
                    <FlipWords words={words} className="font-bold text-white text-7xl"/>
                </div>
                <p className='text-4xl font-black text-neutral-300'>Web Applications</p>
            </div>
        </div>
    </div>
  )
}

export default HeroText