import Image from 'next/image'
import React from 'react'
import * as motion from "framer-motion/client";

export default function Hero() {
    return (
        <section className='xl:h-[650px] relative'>
            <div className='grid grid-cols-2'>
                <Image
                    src="/image/right-hero.jpg"
                    alt="Aurielle Jewelry Picture"
                    width={300} height={300} className='w-full h-full xl:h-[650px] object-cover'
                    priority={true}
                />
                <Image
                    src="/image/left-hero.jpg"
                    alt="Aurielle Jewelry Picture"
                    width={300} height={300} className='w-full h-full xl:h-[650px] object-cover'
                    priority={true}
                />
            </div>
            <div className='absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full'></div>
            <div className='absolute top-32 xl:top-60 w-full h-full text-center'>
                <h1 className='text-4xl xl:text-8xl 2xl:text-8xl font-bold text-white'>Aurielle Jewelry</h1>
                <motion.h2 animate={{ y: [50, 0], opacity: [0, 1], transition: { duration: 1 } }} className='text-sm xl:text-xl text-white'>#1 best online store titanium jewelry in the world!</motion.h2>
            </div>

        </section >
    )
}
