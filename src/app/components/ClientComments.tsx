import { CheckCircle, Star, ShieldUser } from 'lucide-react';
import React from 'react'

const comments = [
  {
    user: "sa***mx",
    comment: "Mashoor'dan alışveriş yaparken gerçekten güvende hissettim. Kart bilgilerim şifrelenmiş ve hiçbir sorun yaşamadım.",
    image: "http://localhost:3000/images/user1.png",
    rating: 5,
    },

    {
    user: "ka***85",
    comment: "Mashoor'dan alışveriş yaparken gerçekten güvende hissettim. Kart bilgilerim şifrelenmiş ve hiçbir sorun yaşamadım.",
    image: "http://localhost:3000/images/user1.png",
    rating: 4,
    },

    {
    user: "ze***89",
    comment: "Mashoor'dan alışveriş yaparken gerçekten güvende hissettim. Kart bilgilerim şifrelenmiş ve hiçbir sorun yaşamadım. gerçekten bu alışeveri süperdi.",
    image: "http://localhost:3000/images/user1.png",
    rating: 5,
    },
];

export default function ClientComments() {
    return (
        <section className='space-y-4'>
            <div className='flex items-center gap-2'>
                <div className='bg-green-700 text-white p-1 rounded'>
                    <Star fill='white' color='white' className='w-4 h-4' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-950'>Müşteri İncelemeleri</h2>
            </div>

            <div className='inline-flex items-center gap-2 bg-gray-100 text-green-700 px-3-py-1 rounded-[2px] pr-1 ml-8'>
                <div className='bg-green-700 w-5 h-5 items-center flex justify-center rounded-l-[2px]'>
                <ShieldUser color='white' className='w-4 h-4' />
                </div>
                <span className='text-sm'>Tüm incelemeler doğrulanmıştır</span>
            </div>

            <div className='space-y-4 pl-8'>
  {comments.slice(0, 3).map((comment, index) => (
    <div 
      key={index} 
      className="relative overflow-hidden flex justify-between border-b pb-4"
    >
      <div className='space-y-1'>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-gray-700'>{comment.user}</span>
          <div className='flex'>
            {Array.from({ length: comment.rating }).map((_, index) => (
              <Star key={index} fill='black' stroke='none' className='w-4 h-4' />
            ))}
          </div>
        </div>

        {/* user comment */}
        <p className={`text-sm max-w-xl ${index === 2 ? 'text-gray-500 opacity-85 blur-[0.2px]' : 'text-gray-800'}`}>
          {comment.comment}
        </p>
      </div>

      {/* user image */}
      {comment.image && (
        <img 
          src={comment.image} 
          alt={comment.user} 
          className={`w-14 h-14 rounded object-cover ${index === 2 ? 'opacity-85' : ''}`} 
        />
      )}
       {index === 2 && (
        <div className='bg-white w-full h-[43px] absolute bottom-0 left-0 flex items-center justify-center shadow-[0_-4px_12px_rgba(255,0,0,0.0)]'>
        <a
          href="#"
          className="absolute left-0 bottom-1/4 text-sm text-gray-400 hover:text-orange-400 transition-all duration-100 z-10"
        >
          Daha fazla görüntüle &gt;
        </a>
        </div>
      )}
    </div>
  ))}
  
</div>
        </section>
    )
}