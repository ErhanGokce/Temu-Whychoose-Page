import { CheckCircle, Star } from '@geist-ui/icons';
import React from 'react'

const comments = [
  {
    user: "Ahmet Yılmaz",
    comment: "Temu'dan alışveriş yaparken gerçekten güvende hissettim. Kart bilgilerim şifrelenmiş ve hiçbir sorun yaşamadım.",
    image: "http://localhost:3000/images/user1.png",
    rating: 5,
    },

    {
    user: "Mahmut Yılmaz",
    comment: "Temu'dan alışveriş yaparken gerçekten güvende hissettim. Kart bilgilerim şifrelenmiş ve hiçbir sorun yaşamadım.",
    image: "http://localhost:3000/images/user1.png",
    rating: 4,
    },

    {
    user: "Mehmet Yılmaz",
    comment: "Temu'dan alışveriş yaparken gerçekten güvende hissettim. Kart bilgilerim şifrelenmiş ve hiçbir sorun yaşamadım. gerçekten bu alışeveri süperdi.",
    image: "http://localhost:3000/images/user1.png",
    rating: 5,
    },
];

export default function ClientComments() {
    return (
        <section className='space-y-4'>
            <div className='flex items-center gap-2'>
                <div className='bg-green-700 text-white p-1 rounded'>
                    <CheckCircle className='w-4 h-4' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-950'>Müşteri İncelemeleri</h2>
            </div>

            <div className='inline-flex items-center gap-2 bg-green-100 text-green-800 px-3-py-1 rounded'>
                <CheckCircle className='w-4 h-4' />
                <span className='text-sm'>Tüm incelemeler doğrulanmıştır</span>
            </div>

            <div className='space-y-4'>
                {comments.slice(0, 3).map((comment, index) => (
                    <div 
                    key={index} 
                    className={`relative overflow-hidden ${index === 2 ? 'after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:bg-gradient-to-b after:from-transparent after:to-white/95 after:pointer-events-none' : ''} flex justify-between border-b pb-4`}>
                        <div className='space-y-1'>
                            <div className='flex items-center gap-2'>
                                <span className='font-medium text-gray-700'>{comment.user}</span>
                                <div className='flex'>
                                    {Array.from({ length: comment.rating }).map((_, index) => (
                                        <Star key={index} fill='black' stroke='none' className='w-4 h-4' />
                                    ))}
                                </div>
                            </div>
                            <p className='text-gray-800 text-sm max-w-xl'>{comment.comment}</p>
                        </div>
                        {comment.image && (
                            <img src={comment.image} alt={comment.user} className='w-14 h-14 rounded object-cover' />
                            )}
                    </div>
                ))}
            </div>

            <a href='#' className='text-sm text-gray-400 hover:text-orange-400 transition-all duration-100'>Daha fazla görüntüle &gt;</a>
        </section>
    )
}