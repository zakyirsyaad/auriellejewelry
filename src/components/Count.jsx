'use client'
import React from 'react'
import { useMotionValue, motion, animate } from "framer-motion"
import Image from 'next/image'

export default function Count() {
    const years = useMotionValue(0)
    const reviews = useMotionValue(0)
    const [yearsValue, setYearsValue] = React.useState(0)
    const [reviewsValue, setReviewsValue] = React.useState(0)

    React.useEffect(() => {
        const yearsControls = animate(years, 5, {
            duration: 5,
            onUpdate: (value) => setYearsValue(Math.round(value))
        })
        return () => yearsControls.stop()
    }, [years])

    React.useEffect(() => {
        const reviewsControls = animate(reviews, 1000, {
            duration: 5,
            onUpdate: (value) => setReviewsValue(Math.round(value))
        })
        return () => reviewsControls.stop()
    }, [reviews])

    return (
        <section className='flex xl:justify-center items-center m-5 xl:m-10'>
            <div className='flex flex-col xl:flex-row xl:items-center gap-5'>
                <div>
                    <motion.h1 className='text-4xl xl:text-6xl 2xl:text-8xl font-bold'>{yearsValue}+</motion.h1>
                    <p className='text-sm xl:text-base 2xl:text-lg'>years on the market</p>
                </div>
                <div>
                    <motion.h1 className='text-4xl xl:text-6xl 2xl:text-8xl font-bold'>{reviewsValue}+</motion.h1>
                    <p className='text-sm xl:text-base 2xl:text-lg'>positive customer reviews</p>
                </div>
            </div>

            <hr className='w-20 h-1 bg-black rotate-90' />

            <div className='flex flex-col xl:flex-row xl:items-center gap-5'>
                <div className='flex gap-5 relative'>
                    <Image
                        src="/image/user 1.jpg"
                        alt="Aurielle Jewelry Picture"
                        width={300} height={300} className='w-14 h-14 object-cover border-black border-2 rounded-full'
                        priority={true}
                    />
                    <Image
                        src="/image/user 2.jpg"
                        alt="Aurielle Jewelry Picture"
                        width={300} height={300} className='w-14 h-14 object-cover border-black border-2 rounded-full absolute z-10 left-9'
                        priority={true}
                    />
                    <Image
                        src="/image/user 3.jpg"
                        alt="Aurielle Jewelry Picture"
                        width={300} height={300} className='w-14 h-14 object-cover border-black border-2 rounded-full absolute z-20 left-16'
                        priority={true}
                    />
                </div>
                <p className='capitalize font-semibold xl:pl-16 xl:text-lg'>over {reviewsValue}+ happy customers</p>
            </div>
        </section>
    )
}
