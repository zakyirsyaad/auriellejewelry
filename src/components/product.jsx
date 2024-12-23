import { createClient } from '@/utils/supabase/client';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Product() {
    const supabase = createClient();

    // Fetch products and their reviews
    const { data: products, error } = await supabase
        .from('products')
        .select(`
            id, name, code, price, picture, created_at,
            reviews (id, user, rating, comment)
        `)
        .order('created_at', { ascending: false });

    if (error) {
        return <p>Error loading products</p>;
    }

    return (
        <div className="m-5 xl:m-10 2xl:mx-20 space-y-5">
            <h1 className="text-2xl font-bold" id='products'>All Products Available <span className='text-red-500'>({products.length}) Item</span></h1>
            <div className="grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 xl:gap-10">
                {products.map((product) => (
                    <div key={product.id} className='grid gap-3'>
                        <div className='space-y-2'>
                            <Image
                                src={product.picture}
                                alt={product.name}
                                width={300} height={300}
                                priority={true}
                                className='w-full object-cover rounded'
                            />
                            <h2 className='text-sm xl:text-lg'>{product.name}</h2>
                            <div>
                                <p className='text-sm font-semibold text-red-500 line-through italic'>Rp. 449.000</p>
                                <p className='font-bold xl:text-xl'>Rp. {product.price.toLocaleString('id-ID')}</p>
                            </div>
                        </div>

                        {/* Reviews */}
                        {product.reviews.length > 0 && (
                            <h3 className="text-sm flex items-center">Reviews:
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        fill={i < product.reviews[0].rating ? '#FFD700' : '#E0E0E0'}
                                        size={16}
                                        stroke=""
                                    />
                                ))}
                            </h3>
                        )}

                        {/* Order Button */}
                        <Link
                            href={`https://api.whatsapp.com/send?phone=6281241933754&text=Hi, I want to order ${product.name} - ${product.code}`}
                            target="_blank"
                            className="place-content-end place-self-end"
                        >
                            <button className="bg-black hover:bg-gray-500 duration-300 text-white px-5 py-2 font-bold rounded">
                                Order Now
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
