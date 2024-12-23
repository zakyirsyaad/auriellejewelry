import { createClient } from '@/utils/supabase/client';
import { Star } from 'lucide-react';
import React from 'react'

export default async function Reviews() {
    const supabase = createClient();

    // Fetch products and their reviews
    const { data: reviews, error } = await supabase
        .from('reviews')
        .select()
        .order('created_at', { ascending: false });

    if (error) {
        return <p>Error loading reviews</p>;
    }

    return (
        <section>
            <div className="m-5 xl:m-10 2xl:mx-20 space-y-5">
                <h1 className="text-2xl xl:text-4xl font-bold text-center">What our customers say</h1>
                <div className="grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 xl:gap-10">
                    {reviews.map((review) => (
                        <div key={review.id} className="grid gap-5 border border-black rounded p-5">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold">{review.user}</h3>
                                <p className="text-sm">{review.comment}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        fill={review.rating >= star ? '#FFD700' : '#E0E0E0'}
                                    />
                                ))}
                                <p className="text-sm">{review.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
