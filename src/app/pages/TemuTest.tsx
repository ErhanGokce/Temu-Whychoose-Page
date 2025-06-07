import React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';
import Hero from '@/app/components/Hero';
import { Stick } from 'next/font/google';
import StickyScroll from '../components/StickyScroll';
import SecuritySection from '../components/SecuritySection';
import Guarantee from '../components/GuaranteeSection';
import ClientComments from '../components/ClientComments';

const TemuTest = () => {
  const crumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Neden Temu", href: "/neden-temu" },
  ];

  return (
    <div className='px-4 py-8 max-w-7xl mx-auto'>
      <Breadcrumb crumbs={crumbs} />
      <Hero />
      <div className='max-w-5xl mx-auto space-y-8 mt-8'>
      <StickyScroll />
      <SecuritySection />
      <Guarantee />
      <ClientComments />
      </div>
      {/* İkonlu alanlar vb. buraya gelecek */}
    </div>
  );
};

export default TemuTest;
