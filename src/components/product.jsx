import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Product() {
    const supabase = createClient()

    const { data: products } = await supabase.from('products').select().order('created_at', { ascending: false })
    console.log(products)
    return (
        <div className='m-5 xl:m-10 2xl:mx-20 space-y-5'>
            <h1 className='text-2xl font-bold'>All Jewelry Product</h1>
            <div className='grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 xl:gap-10'>
                {products.map((product) => (
                    <div key={product.id} className='grid'>
                        <div className='space-y-2'>
                            <Image
                                src={product.picture}
                                alt={product.name}
                                width={300} height={300}
                                priority={true}
                                className='w-full object-cover rounded'
                            />
                            <h2 className='text-sm'>{product.name}</h2>
                            <div>
                                <p className='text-sm font-semibold text-red-500 line-through italic'>Rp. 449.000</p>
                                <p className='font-bold xl:text-xl'>Rp. {product.price.toLocaleString('id-ID')}</p>
                            </div>
                        </div>
                        <Link
                            href={`https://api.whatsapp.com/send?phone=6281241933754&text=Hai, Saya ingin membeli produk ${product.name} - ${product.code}`}
                            target='_blank'
                            className='place-content-end place-self-end'
                        >
                            <button className='bg-black hover:bg-gray-500 duration-300 text-white px-3 py-2 rounded'>Order Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
