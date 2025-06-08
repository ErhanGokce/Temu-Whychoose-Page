import React from "react";
import SupportButton from "./Buttons/SupportButton";

const steps = [
  {
    number: 1,
    title: "Ücretsiz kargo (yerel depolardan gönderilen ürünler hariç)",
    description:
      "Bu fırsatı, son on yılda geliştirdiğimiz güçlü ve verimli sipariş karşılama ağı sayesinde sunuyoruz. DHL eCommerce, ARAS, Ptt, WE WORLD EXPRESS LIMITED, ASE Asia Africa Sky Express, SKYNET ile birlikte çalışıyoruz.",
  },
  {
    number: 2,
    title: "Teslimat garantisi",
    description:
      "Dünyanın dört bir yanındaki güvenilir lojistik hizmet sağlayıcıları, paketinizin size güvenli ve zamanında ulaşmasını sağlar. Herhangi bir sorun olması durumunda Mashoor, sorunları çözmek ve en iyi çözümleri sunmak için tedarikçiler ve ilgili lojistik hizmet sağlayıcılarıyla birlikte çalışacaktır.",
    link: {
      text: "Daha fazla bilgi edin",
      href: "#", 
    },
  },
  {
    number: 3,
    title: "Teslimat garantisi",
    description:
      "Dünyanın dört bir yanındaki güvenilir lojistik hizmet sağlayıcıları, paketinizin size güvenli ve zamanında ulaşmasını sağlar. Herhangi bir sorun olması durumunda Mashoor, sorunları çözmek ve en iyi çözümleri sunmak için tedarikçiler ve ilgili lojistik hizmet sağlayıcılarıyla birlikte çalışacaktır.",
    link: {
      text: "Daha fazla bilgi edin",
      href: "#", 
    },
  },
  {
    number: 4,
    title: "Teslimat garantisi",
    description:
      "Dünyanın dört bir yanındaki güvenilir lojistik hizmet sağlayıcıları, paketinizin size güvenli ve zamanında ulaşmasını sağlar. Herhangi bir sorun olması durumunda Mashoor, sorunları çözmek ve en iyi çözümleri sunmak için tedarikçiler ve ilgili lojistik hizmet sağlayıcılarıyla birlikte çalışacaktır.",
    link: {
      text: "Daha fazla bilgi edin",
      href: "#", 
    },
    showSupportButton: true,
  },
  {
    number: 5,
    title: "Teslimat garantisi",
    description:
      "Dünyanın dört bir yanındaki güvenilir lojistik hizmet sağlayıcıları, paketinizin size güvenli ve zamanında ulaşmasını sağlar. Herhangi bir sorun olması durumunda Mashoor, sorunları çözmek ve en iyi çözümleri sunmak için tedarikçiler ve ilgili lojistik hizmet sağlayıcılarıyla birlikte çalışacaktır.",
    link: {
      text: "Daha fazla bilgi edin",
      href: "#", 
    },
  },
];

export default function Guarantee() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-950" id="siparis">Sipariş garantisi</h2>

      <div className="space-y-10">
        {steps.map((step) => (
          <div key={step.number}>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-semibold mt-1">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-950">{step.title}</h3>
                <p className="text-sm text-gray-800 mt-2">{step.description}</p>
                {step.link && (
                  <a
                    href={step.link.href}
                    className="text-sm text-gray-400 mt-3 inline-block hover:text-orange-400 transition-all duration-100"
                  >
                    {step.link.text} &gt;
                  </a>
                )}

                {step.number === 5 && (
          <div className="mt-4 mb-4">
            <SupportButton />
          </div>
        )}
              </div>
            </div>
            <hr className="my-6 border-gray-200" />
          </div>
        ))}
      </div>

      <div className="space-y-10">
        
          <div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-8 rounded-sm bg-green-700 text-white flex items-center justify-center text-sm font-semibold mt-1">
                Plant
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-950">Mashoor'nun Ağaç Dikme Programı</h3>
                <p className="text-sm text-gray-800 mt-2">Mashoor, Temmuz 2023'ten bu yana Sahra Altı Afrika'yı ağaçlandırmak üzere bir programı finanse etmek için Trees for the Future ile iş birliği yapmaktadır.</p>
                
                  <a
                    href="#"
                    className="text-sm text-gray-400 mt-3 inline-block hover:text-orange-400 transition-all duration-100"
                  >
                   Daha fazla bilgi edin &gt; 
                  </a>
                
              </div>
            </div>
            <hr className="my-6 border-gray-200" />
          </div>
        
      </div>
      
    </section>
  );
}
