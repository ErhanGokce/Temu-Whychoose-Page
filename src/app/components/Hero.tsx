import React from 'react'
import { Percent, Check, ThumbsUp} from '@geist-ui/icons'

function Hero() {
    const items = [
         {
      icon: <Percent size={40} color="green" />,
      title: "Mashoor diğerlerinden daha düşük fiyatları nasıl sunabilir?",
      description:
        "Mashoor, müşterileri doğrudan uygun maliyetli üreticilerle bir araya getiriyor ve rekabetçi fiyatlara sahip ürünlere olanak tanıyor. Müşteriler, birden fazla aracı ortadan kaldırarak ve fabrikadan tüketicilere doğrudan gönderiler yaparak toptan satış fiyatlarından kaynak üzerinden faydalanır.",
    },
    {
      icon: <ThumbsUp size={40} color="green" />,
      title: "Geniş bir ürün yelpazesi",
      description:
        "Mashoor, gelişmiş bir tedarikçi ağına erişim imkânına sahiptir. Bu tedarikçilerin birçoğu, ölçeğimiz sayesinde Mashoor’da tüketicilere uygun fiyatlar sunan dünya standartlarında üreticilerdir. Mashoor’nun ayrıca sahte veya güvenli olmayan ürünlere karşı katı politikaları bulunmaktadır.",
    },
    ];

  return (
    <div className='space-y-10 mt-0 flex flex-col items-center px-4 py-8 max-w-5xl mx-auto'>
      <img 
      src="http://localhost:3000/images/BigTick.png"
      alt='WhyChooseMashoor'
      className='w-auto h-22 mx-auto mb-4'
      />
        {items.map((item, index) => (
            <div key={index} className='flex items-start space-x-4'>
                <div className='text-green-500'>{item.icon}</div>
                <div>
                    <h3 className='text-xl font-semibold text-gray-950'>{item.title}</h3>
                    <p className='text-gray-700'>{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Hero