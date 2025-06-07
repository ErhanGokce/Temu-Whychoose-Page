'use client';

import { useEffect, useState } from 'react';

const tabs = [
  { id: 'guvenlik', label: 'Güvenlik ve Gizlilik' },
  { id: 'siparis', label: 'Sipariş garantisi' },
];

export default function StickyScroll() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            if (index !== -1) setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string, index: number) => {
    setActiveTab(index);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-50 bg-white py-4">
      <div className="flex w-[600px] mx-auto border border-green-700 rounded-lg overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, index)}
            className={`flex-1 px-6 py-3 font-medium text-sm transition-all duration-200 ${
              activeTab === index
                ? 'bg-green-700 text-white'
                : 'text-green-700 bg-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
