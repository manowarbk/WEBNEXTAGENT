'use client';
import { useLanguage } from '@/components/layout/ClientLayout';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function ServicesPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section bg-base" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">
              {lang === 'vi' ? 'Dịch Vụ Tư Vấn & Triển Khai' : 'Consulting & Implementation Services'}
            </h1>
            <p className="section-subtitle">
              {lang === 'vi' 
                ? 'Đồng hành cùng doanh nghiệp từ khâu lập chiến lược, thiết kế kiến trúc đến triển khai và vận hành hệ thống thực tế.'
                : 'Accompanying businesses from strategy formulation, architecture design to actual implementation and operation.'}
            </p>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '-4rem' }}>
        <ServicesGrid />
      </div>
    </>
  );
}
