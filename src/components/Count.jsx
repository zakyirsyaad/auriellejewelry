'use client'
import React from 'react'
import { useMotionValue, motion, animate } from "framer-motion"

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
        <section className='flex xl:justify-center items-center gap-10 m-5 xl:m-10'>
            <div>
                <motion.h1 className='text-4xl xl:text-6xl 2xl:text-8xl font-bold'>{yearsValue}+</motion.h1>
                <p className='text-sm xl:text-base 2xl:text-lg'>years on the market</p>
            </div>
            <div>
                <motion.h1 className='text-4xl xl:text-6xl 2xl:text-8xl font-bold'>{reviewsValue}+</motion.h1>
                <p className='text-sm xl:text-base 2xl:text-lg'>positive customer reviews</p>
            </div>
        </section>
    )
}
