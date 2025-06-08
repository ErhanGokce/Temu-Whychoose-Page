import React from 'react'
import Image from 'next/image'
import { CheckInCircle } from '@geist-ui/icons'


function SecuritySection() {
  return (
    <section id="guvenlik" className="mt-8 px-4">
        <h2 className='text-center text-2xl font-semibold mb-6 text-gray-950' id='guvenlik'>Gizlilik ve Güvenlik</h2>

        <div className='flex items-start gap-0.5'>
        <div className='mb-6 flex items-center'>
             <div className='flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white font-bold mr-4'>1</div>
        </div>
        <h3 className='text-2xl font-semibold mb-2 text-gray-950'>Güvenli ödeme yöntemerimizle gönül rahatlığıyla ödeme yapın</h3>
        </div>
        <ul className='list-none space-y-2 text-gray-700'>
            <li className='flex items-start gap-2'><CheckInCircle color='green' className='text-green-600 mt-1' size={20}/> Kart bilgileriniz güvende olur ve tehlikede değildir</li>
            <li className='flex items-start gap-2'><CheckInCircle color='green' className='text-green-600 mt-1' size={20}/> Tüm Veriler şifrelenir</li>
            <li className='flex items-start gap-2'><CheckInCircle color='green' className='text-green-600 mt-1' size={20}/> Mashoor, kart verilerini işlerken Ödeme Kartı Sektör Veri Güvenliği Standardını (PCI DSS) ve diğer güvenlik standartlarını izler</li>
            <li className='flex items-start gap-2'><CheckInCircle color='green' className='text-green-600 mt-1' size={20}/> Mashoor kart bilgilerinizi asla satmaz</li>
        </ul>

        {/* Card logos */}
       <div className="flex flex-wrap gap-4 mt-6">
  {[
    "/images/visa.png",
    "/images/visa.png",
    "/images/visa.png",
    "/images/visa.png"
  ].map((src, index) => (
    <div
      key={index}
      className="border border-gray-300 p-2 rounded-sm bg-gray-100 shadow-sm flex items-center justify-center"
    >
      <img src={src} alt={`logo-${index}`} className="h-10 object-contain" />
    </div>
  ))}
</div>
<div className="mt-6">
      <p className="text-sm text-green-600 font-medium mb-3">
        Sizin için alternatif ödeme yöntemleri de sunuyoruz.
      </p>
      <div className="flex flex-wrap gap-3">
        {[
    "/images/visa.png",
    "/images/visa.png",
    "/images/visa.png",
    "/images/visa.png"
  ].map((src, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md bg-white p-2 flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`alternatif-odeme-${index}`}
              width={40}
              height={24}
              className="object-contain h-8 w-auto"
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3 cursor-pointer hover:text-orange-400 transition-all duration-100">
        Daha fazla bilgi edin &gt;
      </p>
    </div>

    {/* securtyitemtwo */}
     <div className="flex items-start space-x-4 border-t pt-6 mt-6">
      {/* Sol yeşil daire içindeki sayı */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-semibold">
          2
        </div>
      </div>

      {/* Sağ metin alanı */}
      <div>
        <h3 className="text-2xl font-semibold text-black">
          Kişisel verilerinizi gizli, güvenli ve güvende tutuyoruz
        </h3>
        <p className="mt-2 text-sm text-green-600 font-medium">
          Kişisel verilerinizin güvenliği bizim için önemlidir.
        </p>
        <p className="mt-1 text-sm text-gray-700">
          Uygulama içinde şeffaflığı korumaya ve{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            İzin
          </a>{" "}
          taleplerini en aza indirmeye kararlıyız. Ayrıntılar için{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Gizlilik Politikamıza
          </a>{" "}
          ve{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Çerezler ve Benzer Teknolojiler Politikamıza
          </a>{" "}
          bakabilirsiniz.
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Kasım 2023’te, potansiyel güvenlik açıklarını başarılı bir şekilde keşfedip çözen siber güvenlik
          topluluğuna ödüller sunan bir hata ödül programı oluşturmak için siber güvenlik ajansı{" "}
          <a
            href="https://hackerone.com/Mashoor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            HackerOne
          </a>{" "}
          ile resmi bir ortaklık kurduk. Mashoor’da sorunsuz bir alışveriş deneyimi sürdürmeye kararlıyız. Daha
          fazla bilgi edinmek için{" "}
          <a
            href="https://hackerone.com/Mashoor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://hackerone.com/Mashoor
          </a>{" "}
          adresini ziyaret edin.
        </p>
      </div>
    </div>
    </section>
  )
}

export default SecuritySection;